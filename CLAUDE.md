# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI-Image-Edit is an AI-powered image generation and editing web application built with React 19, Vite, Fabric.js 7.0, and Tailwind CSS 4. It supports multi-layer canvas editing, AI image generation via OpenAI-compatible APIs (including native Gemini), mask-based local image editing, and browser-based AI background removal.

## Development Commands

### Local Development
```bash
# Install dependencies (uses --legacy-peer-deps for React 19 compatibility)
npm install

# Start dev server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Docker Development
```bash
# Initial build and run
docker-compose up -d --build

# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Access: http://localhost:8890
```

## Architecture Overview

### Core State Management (App.jsx)
The application uses React hooks for state management with the following key state:

- **Layer System**: Multi-layer image stack with independent transforms, visibility, and locking
  - Each layer stores: `id`, `name`, `url`, `base64`, `mimeType`, `width`, `height`, `x`, `y`, `visible`, `locked`
  - Layers are rendered bottom-to-top in the canvas

- **Mode Management**: Two primary modes
  - `generate`: Create new images from text prompts
  - `edit`: Edit existing images with or without masks

- **Drawing Tools**:
  - `select`: Layer selection and manipulation
  - `brush`: Freehand mask drawing
  - `rectangle`: Rectangle mask selection
  - `eraser`: Remove mask areas
  - Lasso tools: `free`, `polygonal`, `magnetic` (with edge detection)

### Component Structure

1. **App.jsx** (Root)
   - Layer lifecycle management (add/delete/modify)
   - API orchestration (generation vs editing)
   - Mode switching and state persistence (localStorage)

2. **CanvasEditor.jsx** (Canvas Component)
   - Fabric.js canvas initialization with infinite canvas support
   - Drawing tool implementations (brush, rectangle, lasso variants)
   - Undo/redo history management
   - Layer rendering and synchronization with Fabric objects
   - Viewport controls (zoom, pan with spacebar)
   - Mask coordinate conversion (canvas coords → layer-relative coords → image coords)

3. **ControlPanel.jsx** (Right Panel)
   - Prompt input and preset suggestions
   - API configuration (baseUrl, apiKey, model)
   - Image generation parameters (size, aspect ratio)
   - Mode toggle (generate/edit)
   - Generate/Edit button with loading states

4. **LayerPanel.jsx** (Left Panel)
   - Layer list with thumbnails
   - Layer controls (visibility, lock, reorder, rename, delete)
   - AI background removal integration
   - Layer download functionality

5. **Layout.jsx**
   - Three-column layout: toolbar (left), canvas (center), properties (right)
   - Responsive panel management

### API Integration (lib/api.js)

The application supports multiple API formats for maximum compatibility:

1. **OpenAI-Compatible Format** (`/v1/images/generations`, `/v1/images/edits`)
2. **OpenAI Chat Completions Format** (`/v1/chat/completions`) - for models like `gemini-3-pro-image-preview`
3. **Gemini Native Format** (`/v1beta/models/{model}:generateContent`) - when `useGeminiNative` is enabled

Key API functions:
- `generateImage()`: Standard OpenAI images API
- `generateImageViaChatCompletions()`: Chat-based generation with multi-modal content
- `editImage()`: Standard OpenAI edits API (requires mask)
- `editImageViaChatCompletions()`: Chat-based editing (supports mask-free editing for compatible models)

**Response Parsing**: The code contains extensive fallback logic to extract base64 images from various response formats (direct b64_json, markdown image links, external URLs, etc.)

### Mask Generation System

When editing with a mask, the application:

1. Collects all non-layer Fabric objects (paths from brush, rectangles from selection tools)
2. Creates an off-screen canvas matching the selected layer's original dimensions
3. Converts canvas coordinates → layer-relative coordinates → image coordinates
4. Renders white regions on black background (standard mask format)
5. Applies 1% expansion to mask regions to improve API results
6. Exports as base64 PNG

Critical: The mask generation uses layer-relative coordinates to ensure masks align correctly when layers are moved or transformed.

### Background Removal (lib/backgroundRemoval.js)

Uses `@imgly/background-removal` library:
- Runs entirely in the browser using ONNX Runtime Web
- Downloads AI model on first use (~50MB)
- Progress tracking via callback
- Result added as new transparent PNG layer

### Edge Detection (lib/edgeDetection.js)

Supports magnetic lasso tool:
- Sobel operator for gradient calculation
- Finds nearest high-gradient edge from cursor position
- Used for intelligent edge-snapping during selection

## Key Implementation Details

### Coordinate Systems
The application uses three coordinate systems:
1. **Canvas coordinates**: Fabric.js viewport coordinates (affected by zoom/pan)
2. **Layer coordinates**: Relative to layer's top-left corner in canvas
3. **Image coordinates**: Actual pixel coordinates in the original image

Always convert mask coordinates to image space before sending to API.

### Model Compatibility
- Models with name `gemini-3-pro-image-preview` are treated as chat-based models that support mask-free editing
- Other models require explicit mask for editing operations
- Native Gemini API requires different endpoint format and payload structure

### State Persistence
The following settings are persisted to localStorage:
- `apiKey`, `baseUrl`, `modelName`
- `imageSize`, `aspectRatio`
- `useGeminiNative` flag

### Docker Configuration
- Multi-stage build: Node 20 Alpine (build) → Nginx 1.27 Alpine (runtime)
- Uses `--legacy-peer-deps` to handle React 19 peer dependency issues
- Nginx serves static files from `/usr/share/nginx/html`
- Health check via wget on port 80
- Resource limits: 1 CPU / 512MB RAM

## Common Workflows

### Adding a New Drawing Tool
1. Add tool mode to `drawMode` state
2. Implement tool logic in CanvasEditor.jsx event handlers
3. Add toolbar button in CanvasEditor.jsx
4. Handle coordinate conversion if tool creates masks

### Supporting a New API Provider
1. Add response parsing logic in `extractBase64ImageFromChat()` or create new extractor
2. Test with both generation and editing endpoints
3. Handle provider-specific error formats

### Adding Layer Metadata
1. Update layer object structure in App.jsx `addLayer()`
2. Persist to layer state
3. Display in LayerPanel.jsx if needed
4. Ensure metadata survives layer updates

## Testing Notes

- Test with various image sizes and aspect ratios
- Verify mask alignment after layer transforms (move/scale/rotate)
- Test API timeout handling (default 300s)
- Check background removal with high-resolution images
- Test undo/redo across different drawing tools
- Verify Docker build with `--no-cache` flag periodically

---
name: design-system-builder
description: Creates production-ready design systems with tokens, components, and documentation. Use when building design systems from scratch or extracting from existing designs.
---

# Design System Builder

Builds comprehensive design systems with design tokens, component specifications, and Storybook documentation.

## Quick Start

```
User: "Create a design system for my fintech app with blue theme"

Claude: I'll create a complete design system with:
1. Professional blue color palette
2. Typography scale for financial data
3. 8px grid spacing system
4. Core components (buttons, forms, cards)
5. Storybook setup with documentation
```

## When to Use

- Starting new projects needing consistent design
- Modernizing codebases with unified design language
- Creating component libraries
- Extracting systems from Figma/Sketch designs
- Setting up Storybook documentation

## Workflow

### 1. Discovery
- Project type and platforms
- Existing brand guidelines
- Component complexity needed
- Target frameworks (React, Vue, etc.)

### 2. Design Tokens
- Color palette with semantic colors
- Typography scale (font families, sizes, weights)
- Spacing tokens (8px grid system)
- Border radius, shadows, animations
- Breakpoints for responsive design

### 3. Components
- Core components identification
- State definitions (hover, active, disabled)
- Accessibility requirements (WCAG 2.1 AA)
- Responsive behavior specifications

### 4. Implementation
Generate in multiple formats:
- CSS custom properties
- SCSS variables
- Tailwind configuration
- JSON tokens for cross-platform
- Style Dictionary setup

## Outputs

### Design Tokens
```css
:root {
  --color-primary-50: #e3f2fd;
  --color-primary-500: #2196f3;
  --color-primary-900: #0d47a1;
  --space-1: 0.5rem;
  --space-2: 1rem;
  --radius-sm: 0.25rem;
}
```

### Component Specs
- Button variants and states
- Form input specifications
- Card/container components
- Navigation patterns
- Feedback components

### Documentation
- Storybook stories
- Usage guidelines
- Accessibility specs
- Responsive behavior docs

## Templates

The skill includes:
- Design token templates (CSS, SCSS, JSON, Tailwind)
- Component specification templates
- Storybook configuration
- React/TypeScript component templates

See [templates/](#) for all available templates.

## Examples

### Creating from Scratch
```
User: "Build a design system for healthcare app"

Claude: Creating healthcare-focused design system:
1. Calming blue-green color palette
2. High contrast for accessibility
3. Clear typography for medical data
4. Form components for patient inputs
5. Warning/success states for alerts
```

### Extracting from Figma
```
User: "I have a Figma design, extract the design system"

Claude: I'll analyze your Figma and extract:
1. Color values → semantic tokens
2. Text styles → typography scale
3. Spacing → token system
4. Components → specifications
5. Export tokens in your format
```

## Best Practices

1. **Accessibility First**: WCAG 2.1 AA minimum
2. **Systematic Scales**: 8px grid, modular typography
3. **Semantic Tokens**: Abstract raw values
4. **Test Isolation**: Storybook for components
5. **Document Rationale**: Explain design decisions
6. **Multiple Formats**: Support different platforms

## Common Mistakes

- Inconsistent spacing without system
- Too many color variations
- Missing component states
- Poor contrast ratios
- No responsive considerations
- Overly complex token nesting

## Advanced

For complex needs, see:
- [reference/tokens.md](reference/tokens.md) - Token architecture
- [reference/components.md](reference/components.md) - Component patterns
- [reference/storybook.md](reference/storybook.md) - Documentation setup
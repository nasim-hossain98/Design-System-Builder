# Design Tokens Reference

## Token Architecture

Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes (color, typography, spacing, etc).

## Token Types

### Global Tokens
Raw values that define the foundation:
```json
{
  "color": {
    "blue": {
      "50": "#e3f2fd",
      "100": "#bbdefb",
      "500": "#2196f3",
      "900": "#0d47a1"
    }
  },
  "font": {
    "size": {
      "sm": "14px",
      "base": "16px",
      "lg": "18px",
      "xl": "20px"
    }
  }
}
```

### Semantic Tokens
Meaningful abstractions that reference global tokens:
```json
{
  "color": {
    "primary": "{color.blue.500}",
    "primary-hover": "{color.blue.600}",
    "background": "{color.white}",
    "text": "{color.gray.900}"
  }
}
```

### Component Tokens
Tokens specific to component implementations:
```json
{
  "button": {
    "primary": {
      "background": "{color.primary}",
      "color": "{color.white}",
      "padding": "{space.2} {space.4}"
    }
  }
}
```

## Token Naming Conventions

### Category
The type of token: color, space, font, radius, shadow, etc.

### Property
The specific attribute: background, text, border, etc.

### Scale
The size or value: sm, base, lg, xl, 1, 2, 3, etc.

### State
The interactive state: default, hover, focus, active, disabled

### Example
`color-primary-hover` → category: color, property: primary, state: hover

## Export Formats

### CSS Custom Properties
```css
:root {
  --color-primary: #2196f3;
  --space-1: 0.5rem;
  --radius-sm: 0.25rem;
}
```

### SCSS Variables
```scss
$color-primary: #2196f3;
$space-1: 0.5rem;
$radius-sm: 0.25rem;
```

### Tailwind Config
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#2196f3',
      },
      spacing: {
        1: '0.5rem',
      },
    },
  },
}
```

### Style Dictionary
```json
{
  "source": ["tokens/**/*.json"],
  "platforms": {
    "css": {
      "transformGroup": "css",
      "files": [{
        "destination": "variables.css",
        "format": "css/variables"
      }]
    }
  }
}
```

## Best Practices

1. **Use Semantic Names**: `color-primary` not `color-blue`
2. **Consistent Scales**: 8px grid for spacing, 4px for radius
3. **Theme Support**: Create semantic tokens for light/dark modes
4. **Documentation**: Include usage examples for each token
5. **Version Control**: Track token changes and migrations

## Common Patterns

### Color System
```json
{
  "color": {
    "primary": "#2196f3",
    "secondary": "#ff4081",
    "success": "#4caf50",
    "warning": "#ff9800",
    "error": "#f44336",
    "neutral": {
      "50": "#fafafa",
      "100": "#f5f5f5",
      "900": "#212121"
    }
  }
}
```

### Typography Scale
```json
{
  "font": {
    "family": {
      "sans": "Inter, system-ui, sans-serif",
      "mono": "Fira Code, monospace"
    },
    "size": {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem"
    }
  }
}
```

### Spacing Scale
```json
{
  "space": {
    "0": "0",
    "0.5": "0.125rem",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem"
  }
}
```
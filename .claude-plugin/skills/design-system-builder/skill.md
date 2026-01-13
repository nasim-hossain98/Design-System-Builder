---
name: design-system-builder
---

# Design System Builder

## Overview

The Design System Builder skill helps create comprehensive, production-ready design systems from scratch or based on existing designs. It generates consistent color palettes, typography scales, spacing tokens, component specifications, and documentation that promote visual consistency and brand cohesion across applications.

## When to Use This Skill

Use this skill when:
- Starting a new project that needs a consistent design system
- Modernizing an existing codebase with a unified design language
- Creating a component library for multiple projects
- Establishing brand guidelines for digital products
- Setting up Storybook for component documentation and testing
- Migrating from an inconsistent design to a systematic approach

## Workflow

### 1. Initial Assessment
1. Ask about the project type (web app, mobile app, component library, etc.)
2. Determine if there's an existing brand guide or design reference
3. Identify the target platforms (web, iOS, Android)
4. Understand the component complexity needed

### 2. Design Token Generation
1. Create color palette based on brand or generate harmonious colors
2. Establish typography scale with font families and sizes
3. Define spacing tokens following consistent ratios
4. Create semantic tokens for themes (light/dark modes)

### 3. Component Specification
1. Identify core components needed (buttons, inputs, cards, etc.)
2. Define component states (default, hover, active, disabled)
3. Specify responsive behavior and accessibility requirements
4. Create component API documentation

### 4. Implementation Setup
1. Generate design tokens in multiple formats (CSS, SCSS, JSON, Tailwind)
2. Create Storybook configuration for component documentation
3. Set up build processes for token compilation
4. Generate component starter templates

### 5. Documentation
1. Create comprehensive design system documentation
2. Include usage guidelines and examples
3. Provide migration guides if applicable
4. Generate style guide website structure

## Outputs

### Design Tokens
- Color palette (primary, secondary, neutral, semantic colors)
- Typography scale (font families, sizes, weights, line heights)
- Spacing scale (margins, paddings, gaps)
- Border radius tokens
- Shadow/elevation tokens
- Animation timing tokens

### Component Specifications
- Button variants and states
- Form input specifications
- Card/container components
- Navigation components
- Feedback components (alerts, toasts)
- Layout components

### Configuration Files
- Tailwind CSS configuration
- CSS custom properties
- SCSS variables and mixins
- JSON tokens for cross-platform use
- Style Dictionary configuration

### Documentation
- Storybook stories for all components
- Design token documentation
- Component usage guidelines
- Accessibility specifications
- Responsive behavior documentation

## Templates and References

The skill includes:
- Design token templates (CSS, SCSS, JSON, Tailwind)
- Storybook configuration templates
- Component specification templates
- Documentation website templates
- Build configuration examples

## Examples

### Creating a New Design System
```
User: "Create a design system for my fintech app with a professional blue color scheme"

Claude: I'll create a comprehensive design system for your fintech app. Let me generate:
1. A professional blue-based color palette with semantic colors for success/error states
2. A typography scale suitable for financial applications
3. Spacing tokens based on an 8px grid system
4. Core component specifications for buttons, forms, and data displays
5. Storybook setup for component documentation
```

### Converting Existing Design
```
User: "I have a Figma design, help me extract the design system"

Claude: I'll analyze your Figma design and extract:
1. Color values and create semantic color tokens
2. Typography styles and convert to a scalable system
3. Spacing measurements and normalize to token values
4. Component patterns and create specifications
5. Export-ready design tokens in multiple formats
```

### Component Library Setup
```
User: "Set up a component library with Storybook for my React app"

Claude: I'll set up a complete component library with:
1. Design tokens in CSS custom properties
2. React component templates with TypeScript
3. Storybook configuration with addons
4. Build setup for publishing to npm
5. Documentation structure and examples
```

## Common Mistakes to Avoid

1. **Inconsistent spacing**: Not using a systematic spacing scale
2. **Too many colors**: Creating unnecessary color variations
3. **Missing states**: Not defining all component states (hover, active, disabled)
4. **Poor contrast**: Failing to meet accessibility standards
5. **No responsive considerations**: Designing only for desktop
6. **Overly complex tokens**: Making tokens too specific or nested
7. **Missing documentation**: Not explaining token usage and rationale

## Red Flags

- Requesting design systems without clear use cases
- Asking for copyrighted design systems (Material Design, Carbon, etc.)
- Wanting to copy competitor's exact designs
- Requesting systems that bypass accessibility standards
- Asking for design tokens that don't follow any systematic approach
- Wanting to skip documentation or testing phases

## Best Practices

1. Always start with accessibility in mind
2. Use systematic scales (8px grid, modular scale for typography)
3. Create semantic tokens that abstract raw values
4. Test components in isolation with Storybook
5. Document the rationale behind design decisions
6. Provide multiple export formats for different platforms
7. Include dark mode considerations from the start
8. Plan for internationalization needs

## Technical Considerations

- Support for CSS-in-JS libraries
- Integration with existing build tools
- Tree-shaking for unused tokens
- Performance impact of CSS custom properties
- Cross-browser compatibility
- Support for high contrast modes
- Print stylesheet considerations
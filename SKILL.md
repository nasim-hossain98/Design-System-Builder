# Design System Builder

A comprehensive Claude skill for creating production-ready design systems from scratch. This skill helps you build consistent, accessible, and well-documented design systems with design tokens, component specifications, and Storybook documentation.

## Features

- **Design Token Generation**: Create systematic color palettes, typography scales, spacing tokens, and more
- **Component Specifications**: Detailed specs for buttons, forms, cards, and other UI components
- **Multiple Format Support**: Export tokens as CSS custom properties, SCSS, JSON, or Tailwind configs
- **Storybook Integration**: Pre-configured Storybook setup with templates and examples
- **Accessibility First**: Built with WCAG 2.1 AA compliance in mind
- **Dark Mode Support**: Semantic tokens that support theme switching
- **Documentation**: Comprehensive documentation templates and guidelines

## Quick Start

1. Install the skill in Claude Code
2. Ask Claude to create a design system for your project
3. Provide your requirements (brand colors, component needs, etc.)
4. Receive a complete design system package

## What's Included

### Design Tokens
- Color system with primary, secondary, neutral, and semantic colors
- Typography scale with font families, sizes, weights, and line heights
- Spacing system based on consistent ratios
- Border radius, shadows, and animation tokens
- Breakpoint definitions for responsive design

### Component Templates
- React/TypeScript component templates
- Storybook story templates
- Component specification documents
- Accessibility guidelines

### Configuration Files
- Tailwind CSS configuration
- CSS custom properties
- Style Dictionary setup
- Build configuration examples

## Example Usage

```
User: "Create a design system for my fintech application with a professional blue theme"

Claude: I'll create a comprehensive design system for your fintech app including:
1. Professional blue color palette with semantic colors
2. Typography scale suitable for financial data
3. 8px grid spacing system
4. Core components (buttons, forms, cards, tables)
5. Storybook setup with documentation
6. Dark mode support
7. Accessibility compliance
```

## File Structure

```
design-system-builder/
├── .claude-plugin/
│   ├── plugin.json
│   └── skills/
│       └── design-system-builder/
│           ├── skill.md
│           ├── assets/
│           │   ├── design-tokens-template.json
│           │   ├── css-custom-properties.css
│           │   ├── tailwind-config.js
│           │   ├── storybook-main.js
│           │   ├── storybook-preview.js
│           │   ├── component-story-template.js
│           │   ├── button-spec-template.md
│           │   ├── component-spec-template.md
│           │   └── component-template.tsx
│           └── references/
│               └── workflow.md
└── SKILL.md
```

## Best Practices

1. Always start with accessibility requirements
2. Use systematic scales for spacing and typography
3. Create semantic tokens that abstract raw values
4. Test components in isolation with Storybook
5. Document design decisions and rationale
6. Support multiple export formats for flexibility

## Contributing

Feel free to contribute additional templates, improve existing ones, or suggest new features for the design system builder.

## License

MIT License - Feel free to use this skill for personal or commercial projects.
# Design System Builder - Claude Skill

A comprehensive Claude skill for creating production-ready design systems from scratch.

## 🎯 What It Does

This skill helps you build complete design systems including:
- Systematic color palettes and design tokens
- Typography scales and spacing systems
- Component specifications and templates
- Storybook configuration for documentation
- Accessibility-compliant designs
- Dark mode support

## 📦 Installation

### Option 1: From GitHub (Recommended)
```bash
# First, add the marketplace
/plugin marketplace add https://github.com/nasim-hossain98/design-system-builder.git

# Then install the skill
/plugin install design-system-builder
```

### Option 2: Direct Installation
```bash
# Clone this repository
git clone https://github.com/nasim-hossain98/design-system-builder.git

# Install directly from the cloned path
/plugin install /path/to/design-system-builder
```

### Option 3: Manual Installation
Copy the skill files to your Claude skills directory:
```bash
# Copy SKILL.md and folders to ~/.claude/skills/design-system-builder/
```

## 🚀 Usage Examples

Once installed, you can ask Claude:

- "Create a design system for my React app with blue colors"
- "Build a component library with Storybook"
- "Generate design tokens from my brand guidelines"
- "Set up a dark mode compatible design system"

### Example Commands:
```
"Create a design system for my fintech app with professional blue colors"
"Build a component library with Storybook for my React project"
"Generate design tokens from my existing brand guidelines"
"Set up a dark mode-compatible design system"
```

## 📁 Repository Structure

```
design-system-builder/
├── SKILL.md                          # Main skill definition
├── README.md                         # This file
├── assets/                           # Templates and configurations
│   ├── design-tokens-template.json   # JSON token template
│   ├── css-custom-properties.css     # CSS variables template
│   ├── tailwind-config.js           # Tailwind configuration
│   ├── storybook-main.js            # Storybook main config
│   ├── storybook-preview.js         # Storybook preview config
│   ├── component-story-template.js  # Story template
│   ├── button-spec-template.md      # Button component spec
│   ├── component-spec-template.md   # Generic component spec
│   └── component-template.tsx       # React component template
└── references/
    └── workflow.md                  # Detailed workflow guide
```

## 🎨 Features

✅ **Multi-format Support**: CSS, SCSS, JSON, Tailwind configurations
✅ **Accessibility First**: WCAG 2.1 AA compliant
✅ **Dark Mode**: Built-in theme switching
✅ **Responsive**: Mobile-first approach
✅ **Customizable**: Adapt to any brand or style
✅ **Documented**: Every component has detailed specs

## 🔧 Technical Details

The skill generates:
- Systematic color scales using color theory
- Typography scales with proper hierarchy
- Spacing tokens following consistent ratios
- Component states (hover, active, focus, disabled)
- Accessibility attributes and ARIA labels
- Responsive breakpoint definitions

## 📋 Quick Start

1. **Install the skill** using one of the methods above
2. **Start Claude Code** in your terminal
3. **Ask Claude to create a design system**:
   ```
   "Create a design system for my healthcare app with trustworthy blue colors"
   ```
4. **Receive your complete design system** with tokens, components, and documentation

## 🎯 What You'll Get

### Design Tokens
- Color palette (primary, secondary, neutral, semantic)
- Typography scale (fonts, sizes, weights, line heights)
- Spacing system (margins, paddings, gaps)
- Border radius, shadows, animation tokens
- Breakpoint definitions

### Component Specifications
- Button variants and states
- Form input specifications
- Card/container components
- Navigation components
- Feedback components (alerts, toasts)

### Configuration Files
- Tailwind CSS config
- CSS custom properties
- SCSS variables
- JSON tokens for cross-platform use

### Documentation
- Storybook stories
- Usage guidelines
- Accessibility specs
- Responsive behavior docs

## 🛠️ Development

To contribute or modify this skill:

1. Clone the repository
2. Edit the templates in the `assets/` folder
3. Update the workflow in `references/workflow.md`
4. Test your changes with Claude Code

## 🤝 Contributing

Feel free to submit issues, improvements, or additional templates!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - Use freely for personal or commercial projects.

## 🌟 Show Your Support

If this skill helps you, please give it a star on GitHub!

---

**Repository**: https://github.com/nasim-hossain98/design-system-builder.git
**Issues**: https://github.com/nasim-hossain98/design-system-builder/issues
**Pull Requests**: https://github.com/nasim-hossain98/design-system-builder/pulls

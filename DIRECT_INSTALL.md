# Direct Installation Guide

Since the marketplace format has specific requirements, here's how to install the Design System Builder skill directly:

## Method 1: Direct Path Installation

1. **First, ensure your skill is in the correct location**:
   ```bash
   # Copy the skill to Claude's skills directory
   cp -r C:\Users\Nasim\design-system-builder C:\Users\Nasim\.claude\skills\
   ```

2. **In Claude Code, install directly**:
   ```bash
   /plugin install C:\Users\Nasim\design-system-builder
   ```

## Method 2: GitHub Raw Installation

1. **Push your files to GitHub**:
   ```bash
   cd C:\Users\Nasim\design-system-builder
   git init
   git add .
   git commit -m "Design System Builder Claude Skill"
   git branch -M main
   git remote add origin https://github.com/nasim-hossain98/Design-System-Builder.git
   git push -u origin main
   ```

2. **Clone and install**:
   ```bash
   # In a terminal
   git clone https://github.com/nasim-hossain98/Design-System-Builder.git

   # In Claude Code
   /plugin install /path/to/Design-System-Builder
   ```

## Method 3: Manual Installation

1. **Copy files manually to Claude's skill directory**:
   - Copy `SKILL.md` to `~/.claude/skills/design-system-builder/SKILL.md`
   - Copy `assets/` folder to `~/.claude/skills/design-system-builder/assets/`
   - Copy `references/` folder to `~/.claude/skills/design-system-builder/references/`

2. **The skill will auto-load** when you start Claude Code

## Testing the Installation

Once installed, test with:
```
"Create a design system for my app"
"Help me build a component library"
"Generate design tokens"
```

## Troubleshooting

If installation fails:
1. Check file paths are correct
2. Ensure SKILL.md is in the root directory
3. Verify all template files are present
4. Try restarting Claude Code

## Alternative: Use as Local Skill

You can also use the skill directly from the local files without formal installation by:
1. Keeping the files in a known location
2. Referencing the templates directly when working with Claude
3. Copy-pasting the workflows as needed

The skill templates are fully functional regardless of installation method!
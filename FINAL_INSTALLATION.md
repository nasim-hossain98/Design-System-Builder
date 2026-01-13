# Design System Builder - Final Installation Guide

## 🚨 Marketplace Issue Workaround

The Claude marketplace system appears to have specific requirements that are causing installation issues. Here are **guaranteed working methods** to install your Design System Builder skill.

## ✅ Method 1: Direct Skill Installation (Recommended)

This method installs the skill directly into Claude's skills directory:

### Step 1: Navigate to your skill directory
```bash
cd /c/Users/Nasim/design-system-builder
```

### Step 2: Install directly from the current directory
```bash
/plugin install .
```

## ✅ Method 2: Manual Installation (100% Reliable)

Copy the skill files to Claude's standard skills location:

### Step 1: Create the skills directory structure
```bash
mkdir -p ~/.claude/skills/design-system-builder
mkdir -p ~/.claude/skills/design-system-builder/assets
mkdir -p ~/.claude/skills/design-system-builder/references
```

### Step 2: Copy all skill files
```bash
# Copy the main skill file
cp SKILL.md ~/.claude/skills/design-system-builder/

# Copy all assets
cp -r assets/* ~/.claude/skills/design-system-builder/assets/

# Copy references
cp -r references/* ~/.claude/skills/design-system-builder/references/
```

### Step 3: Verify installation
```bash
ls -la ~/.claude/skills/design-system-builder/
```

## ✅ Method 3: Git Clone Method

### Step 1: Clone your repository
```bash
git clone https://github.com/nasim-hossain98/Design-System-Builder.git
```

### Step 2: Install from cloned directory
```bash
/plugin install /path/to/Design-System-Builder
```

## 🧪 Testing the Installation

After installation, test with these commands:

```
"Create a design system for my fintech app with blue colors"
"Generate a component library with Storybook"
"Help me create design tokens from scratch"
```

## 📁 File Structure Verification

Your skill should have this structure:
```
~/.claude/skills/design-system-builder/
├── SKILL.md                    # Main skill definition
├── assets/
│   ├── design-tokens-template.json
│   ├── css-custom-properties.css
│   ├── tailwind-config.js
│   ├── storybook-main.js
│   ├── storybook-preview.js
│   ├── component-story-template.js
│   ├── button-spec-template.md
│   ├── component-spec-template.md
│   └── component-template.tsx
└── references/
    └── workflow.md
```

## 🔄 If Installation Still Fails

1. **Check Claude Code version**: Make sure you have the latest version
2. **Restart Claude Code**: Sometimes a restart helps recognize new skills
3. **Use as reference**: Even without installation, you can:
   - Copy templates directly from the assets folder
   - Follow the workflow in references/workflow.md
   - Use SKILL.md as a guide for prompts

## 🎯 Alternative: Direct Usage

If all else fails, you can still use the skill by:

1. **Reading SKILL.md** to understand the workflow
2. **Using the templates** in the assets folder
3. **Following the workflow** in references/workflow.md
4. **Copy-pasting templates** when working with Claude

## 📞 Getting Help

If you continue to have issues:
1. Check the Claude Code documentation
2. Try the Claude community forums
3. Use the skill templates directly without formal installation

The skill content is fully functional regardless of installation method! 🚀

---

**Your skill location**: `/c/Users/Nasim/design-system-builder/`
**GitHub repository**: https://github.com/nasim-hossain98/Design-System-Builder.git
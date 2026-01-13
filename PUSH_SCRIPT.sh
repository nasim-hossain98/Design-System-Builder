#!/bin/bash

# Design System Builder - Push to GitHub Script

echo "🚀 Pushing Design System Builder to GitHub..."

# Check if we're in the right directory
if [ ! -f "SKILL.md" ]; then
    echo "❌ Error: SKILL.md not found. Please run from the design-system-builder directory."
    exit 1
fi

# Add all files
echo "📁 Adding all files..."
git add .

# Commit with a comprehensive message
echo "💾 Creating commit..."
git commit -m "Complete Design System Builder Claude Skill v1.0.0

Features:
- Comprehensive design system templates
- Component specifications with accessibility
- Storybook configuration
- Multiple format support (CSS, SCSS, JSON, Tailwind)
- Dark mode support
- Complete workflow documentation

Includes:
- SKILL.md (main skill definition)
- README.md (user documentation)
- All templates in assets/
- Workflow guide in references/
- Installation guides
- MIT License"

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push origin main

echo "✅ Successfully pushed to GitHub!"
echo ""
echo "📋 Repository URL: https://github.com/nasim-hossain98/Design-System-Builder"
echo "📋 Share this URL with others to use your skill!"
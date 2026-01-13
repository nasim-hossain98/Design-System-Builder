# {{ComponentName}} Component Specification

## Overview
Brief description of the component's purpose and usage.

## Anatomy
List the parts that make up the component:
- **Part 1**: Description
- **Part 2**: Description
- **Part 3**: Description

## Variants

### Variant 1
- **Purpose**: When to use this variant
- **Appearance**: Visual description
- **Usage**: Specific use cases

### Variant 2
- **Purpose**: When to use this variant
- **Appearance**: Visual description
- **Usage**: Specific use cases

## Sizes

### Small
- Dimensions: Specific measurements
- Padding/Spacing: Values
- Font size: Value
- Usage: When to use small size

### Medium (Default)
- Dimensions: Specific measurements
- Padding/Spacing: Values
- Font size: Value
- Usage: Default use case

### Large
- Dimensions: Specific measurements
- Padding/Spacing: Values
- Font size: Value
- Usage: When to use large size

## States

### Default
Base appearance without user interaction.

### Hover
- Visual changes on hover
- Cursor behavior
- Animation details

### Active
- Visual changes when active
- Animation details
- State duration

### Focus
- Focus indicator style
- Keyboard navigation behavior
- ARIA attributes

### Disabled
- Visual appearance
- Cursor behavior
- Interaction prevention

### Additional States
List any component-specific states

## API

### Props
```typescript
interface {{ComponentName}}Props {
  variant?: 'variant1' | 'variant2' | 'variant3';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  // Add all relevant props
  children?: ReactNode;
}
```

### Default Props
```typescript
{
  variant: 'default',
  size: 'medium',
  disabled: false,
  // Add other defaults
}
```

## Accessibility

### Requirements
- List accessibility requirements
- WCAG compliance needs
- Keyboard interaction patterns

### Implementation
```jsx
// Example of accessible implementation
<div
  role="appropriate-role"
  aria-label={ariaLabel}
  aria-labelledby={ariaLabelledBy}
  aria-describedby={ariaDescribedBy}
  aria-busy={loading}
  // Add other ARIA attributes
>
  {/* Component content */}
</div>
```

## Usage Examples

### Basic Usage
```jsx
<{{ComponentName}}>
  Content
</{{ComponentName}}>
```

### With Props
```jsx
<{{ComponentName}}
  variant="primary"
  size="large"
  onClick={handleClick}
>
  Custom Content
</{{ComponentName}}>
```

### Advanced Usage
```jsx
// Show complex usage scenarios
<{{ComponentName}}
  variant="secondary"
  iconLeft={<Icon name="star" />}
  onChange={handleChange}
  value={value}
>
  Advanced Configuration
</{{ComponentName}}>
```

## Responsive Behavior
- Mobile considerations
- Tablet behavior
- Desktop optimizations
- Breakpoint-specific changes

## Performance Considerations
- Rendering optimizations
- Memory usage
- Bundle size impact
- Lazy loading opportunities

## Testing Scenarios

### Visual Testing
1. All variants and sizes
2. All interaction states
3. Content variations
4. Edge cases

### Interaction Testing
1. Click/tap behavior
2. Keyboard navigation
3. Form integration
4. State changes

### Accessibility Testing
1. Screen reader compatibility
2. Keyboard operation
3. Focus management
4. ARIA implementation

## Related Components
- List related components
- Composition patterns
- Alternative components

## Design Tokens Used
- Colors: List color tokens
- Spacing: List spacing tokens
- Typography: List typography tokens
- Other tokens: List any additional tokens

## Additional Notes
Add any special considerations, notes, or best practices for this component.
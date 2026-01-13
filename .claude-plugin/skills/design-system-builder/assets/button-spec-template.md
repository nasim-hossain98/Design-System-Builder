# Button Component Specification

## Overview
The Button component is a fundamental interactive element that triggers actions when clicked.

## Anatomy
- **Container**: The clickable area
- **Label**: Text content
- **Icon** (optional): Leading or trailing icon
- **Loader** (optional): Loading indicator

## Variants

### Primary
- **Purpose**: Main call-to-action
- **Background**: Primary color
- **Text**: White
- **Usage**: Most important action on the page

### Secondary
- **Purpose**: Secondary actions
- **Background**: Transparent with border
- **Text**: Primary color
- **Usage**: Supporting actions

### Tertiary
- **Purpose**: Low priority actions
- **Background**: Transparent
- **Text**: Primary color
- **Usage**: Inline or subtle actions

### Danger
- **Purpose**: Destructive actions
- **Background**: Error color
- **Text**: White
- **Usage**: Delete, remove, or irreversible actions

## Sizes

### Small
- Height: 32px
- Padding: 8px 12px
- Font size: 14px
- Icon size: 16px

### Medium (Default)
- Height: 40px
- Padding: 12px 16px
- Font size: 16px
- Icon size: 20px

### Large
- Height: 48px
- Padding: 16px 24px
- Font size: 18px
- Icon size: 24px

## States

### Default
Base appearance without user interaction.

### Hover
- Cursor: pointer
- Slightly darker background
- Subtle shadow for elevated appearance

### Active
- Slightly scaled down (0.98)
- Darker background color
- No shadow

### Focus
- Visible focus ring (2px offset)
- Color: primary-500 with 50% opacity
- Keyboard navigation indicator

### Disabled
- Opacity: 0.5
- Cursor: not-allowed
- No hover effects

### Loading
- Shows loading spinner
- Text opacity: 0
- Prevents click events

## API

### Props
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  onClick?: (event: MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
}
```

### Default Props
```typescript
{
  variant: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
  fullWidth: false,
  type: 'button'
}
```

## Accessibility

### Requirements
- Keyboard focusable
- Enter and Space key activation
- ARIA label support
- Screen reader announcements
- Color contrast: 4.5:1 minimum

### Implementation
```jsx
<button
  type={type}
  disabled={disabled || loading}
  aria-busy={loading}
  aria-label={ariaLabel}
  aria-labelledby={ariaLabelledBy}
  aria-describedby={ariaDescribedBy}
  onClick={handleClick}
>
  {loading && <LoadingSpinner />}
  {iconLeft}
  <span className="button-label">{children}</span>
  {iconRight}
</button>
```

## Usage Examples

### Basic Button
```jsx
<Button onClick={() => alert('Clicked!')}>
  Click me
</Button>
```

### With Icon
```jsx
<Button iconLeft={<Icon name="plus" />}>
  Add Item
</Button>
```

### Loading State
```jsx
<Button loading onClick={handleSubmit}>
  Submit
</Button>
```

### Full Width
```jsx
<Button fullWidth>
  Full Width Button
</Button>
```

## Responsive Behavior
- Full width on mobile for primary CTAs
- Maintain consistent tap target size (min 44x44px)
- Icon-only buttons on small screens

## Performance Considerations
- Memoize expensive computations
- Lazy load icons if needed
- Optimize loading animations

## Testing Scenarios

### Visual Testing
1. All variants and sizes
2. All states (default, hover, active, focus, disabled)
3. With and without icons
4. Long text content
5. RTL layout support

### Interaction Testing
1. Click event handling
2. Keyboard navigation
3. Form submission
4. Loading state behavior

### Accessibility Testing
1. Screen reader announcements
2. Keyboard operation
3. Focus management
4. Color contrast compliance

## Related Components
- Link: For navigation
- IconButton: For icon-only actions
- ToggleButton: For on/off states
- ButtonGroup: For grouped actions

## Design Tokens Used
- Colors: primary, neutral, error
- Spacing: spacing-2, spacing-3, spacing-4
- Typography: font-size-base, font-weight-medium
- Shadows: shadow-sm, shadow-base
- Animations: duration-fast, ease-out
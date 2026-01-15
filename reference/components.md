# Component Patterns Reference

## Component Architecture

Components are the building blocks of the design system. Each component should be reusable, accessible, and well-documented.

## Component Structure

### Specification Document
Each component needs a specification that includes:
- Visual examples
- State definitions
- Behavior rules
- Accessibility requirements
- Responsive considerations

### Code Implementation
Components should be built with:
- Semantic HTML
- ARIA attributes where needed
- Flexible prop interfaces
- TypeScript support
- Comprehensive testing

## Core Components

### Button
```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  onClick?: () => void;
}
```

States:
- Default
- Hover
- Active/Pressed
- Focus
- Disabled
- Loading

### Input
```tsx
interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number';
  size?: 'sm' | 'md' | 'lg';
  state?: 'default' | 'error' | 'success' | 'warning';
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  helperText?: string;
  errorText?: string;
  required?: boolean;
}
```

States:
- Default
- Focus
- Filled
- Error
- Disabled
- Read-only

### Card
```tsx
interface CardProps {
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}
```

## Component Patterns

### Compound Components
Use for complex components with multiple parts:
```tsx
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>Actions</Card.Footer>
</Card>
```

### Render Props
For flexible component composition:
```tsx
<Dropdown
  renderTrigger={({ onClick }) => (
    <Button onClick={onClick}>Open</Button>
  )}
  renderContent={() => (
    <Dropdown.Menu>
      <Dropdown.Item>Option 1</Dropdown.Item>
    </Dropdown.Menu>
  )}
/>
```

### Polymorphic Components
Components that can render as different elements:
```tsx
<Text as="h1" size="2xl">Heading</Text>
<Text as="p" size="base">Paragraph</Text>
```

## Accessibility Requirements

### Keyboard Navigation
- All interactive components keyboard accessible
- Tab order follows visual hierarchy
- Focus indicators clearly visible
- Escape key closes modals/dropdowns

### Screen Reader Support
- Semantic HTML elements
- ARIA labels and descriptions
- Live regions for dynamic content
- Proper heading hierarchy

### Color and Contrast
- WCAG 2.1 AA compliance minimum
- 4.5:1 contrast ratio for normal text
- 3:1 contrast ratio for large text
- Color not sole indicator of state

## Responsive Design

### Breakpoints
```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
```

### Responsive Patterns
- Stack on mobile, side-by-side on desktop
- Touch-friendly sizes on mobile (44px minimum)
- Condensed layouts for smaller screens
- Progressive disclosure for complex content

## Component Documentation

### Storybook Stories
```javascript
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'danger']
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    }
  }
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Button'
  }
};

export const Loading = {
  args: {
    loading: true,
    children: 'Loading...'
  }
};
```

### Props Documentation
Document all props with:
- Type information
- Default values
- Description
- Usage examples
- Valid values

## Testing Strategies

### Visual Regression Testing
Use tools like Chromatic or Percy to catch visual changes.

### Accessibility Testing
- axe-core automated testing
- Manual keyboard navigation
- Screen reader testing
- Color contrast validation

### Interaction Testing
- Click/tap interactions
- Form submission
- State transitions
- Error handling

## Common Pitfalls

1. **Over-engineering**: Keep components focused and simple
2. **Inconsistent APIs**: Maintain consistent prop patterns
3. **Missing States**: Define all possible states upfront
4. **Poor Documentation**: Include usage examples and guidelines
5. **Ignoring Context**: Consider how components work together
6. **Hard-coded Values**: Use design tokens for all visual properties

## Component Checklist

- [ ] All states defined and implemented
- [ ] Accessibility requirements met
- [ ] Responsive behavior specified
- [ ] Props well-documented
- [ ] Storybook stories written
- [ ] Unit tests passing
- [ ] Visual regression tests passing
- [ ] Design tokens used for all values
- [ ] Semantic HTML used
- [ ] ARIA attributes where needed
- [ ] Keyboard navigation supported
- [ ] Focus management implemented
- [ ] Error states handled
- [ ] Loading states implemented
- [ ] Edge cases considered

## Resources

- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Inclusive Components](https://inclusive-components.design/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [Component Driven Development](https://www.componentdriven.org/)"}
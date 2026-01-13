import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

// Define component variants using class-variance-authority
const {{componentName}}Variants = cva(
  'base-component-classes',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-white hover:bg-primary-600',
        secondary: 'bg-transparent border border-primary-500 text-primary-500 hover:bg-primary-50',
        tertiary: 'bg-transparent text-primary-500 hover:bg-primary-50',
        danger: 'bg-error text-white hover:bg-error-dark',
      },
      size: {
        small: 'px-3 py-1.5 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

// Define component props interface
export interface {{ComponentName}}Props
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof {{componentName}}Variants> {
  asChild?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

// Component implementation
const {{ComponentName}} = React.forwardRef<HTMLDivElement, {{ComponentName}}Props>(
  ({ className, variant, size, disabled, loading, children, ...props }, ref) => {
    const Comp = asChild ? 'slot' : 'div';

    return (
      <Comp
        className={cn(
          {{componentName}}Variants({ variant, size }),
          {
            'opacity-50 cursor-not-allowed': disabled,
            'cursor-wait': loading,
          },
          className
        )}
        ref={ref}
        aria-disabled={disabled}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <LoadingSpinner size="sm" />
          </span>
        )}
        <span className={cn({ 'opacity-0': loading })}>{children}</span>
      </Comp>
    );
  }
);

{{ComponentName}}.displayName = '{{ComponentName}}';

export { {{ComponentName}}, {{componentName}}Variants };
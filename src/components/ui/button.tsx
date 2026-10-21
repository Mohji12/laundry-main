import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-normal rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed sm:whitespace-nowrap [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:border-accent hover:text-accent",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-secondary hover:text-secondary-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        /** Primary conversion button — bright blue gradient. */
        cta: "surface-sky text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:brightness-110 hover:shadow-glow",
        navy: "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
        outlineLight:
          "border border-primary-foreground/50 text-primary-foreground hover:-translate-y-0.5 hover:border-primary-foreground hover:bg-primary-foreground/10",
        outlineNavy:
          "border border-primary/25 text-primary hover:-translate-y-0.5 hover:border-accent hover:text-accent",
      },
      size: {
        default: "h-11 min-h-11 px-5 py-2",
        sm: "h-9 min-h-9 px-4 text-xs",
        lg: "h-auto min-h-12 px-5 py-3 text-sm sm:min-h-13 sm:px-8 sm:text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import styles from "./text.module.css";

const textVariants = cva(styles.Text, {
  variants: {
    align: {
      left: styles['Text--left'],
      center: styles['Text--center'],
      right: styles['Text--right'],
    },
    variant: {
      primary: styles['Text--primary'],
      description: styles['Text--description'],
      muted: styles['Text--muted'],
      error: styles['Text--error'],
      success: styles['Text--success'],
    },
    fullWidth: {
      true: styles['Text--fullWidth'],
    },
    heading: {
      h1: styles['Text--h1'],
      h2: styles['Text--h2'],
      h3: styles['Text--h3'],
      h4: styles['Text--h4'],
      h5: styles['Text--h5'],
      h6: styles['Text--h6'],
    },
  },
  defaultVariants: {
    align: "left",
    variant: "primary",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
  VariantProps<typeof textVariants> {
  /** 텍스트 내용 */
  children: React.ReactNode;
}

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
  Omit<VariantProps<typeof textVariants>, 'heading' | 'fullWidth'> {
  /** 제목 내용 */
  children: React.ReactNode;
}

// Root Text component - renders <p> by default
const TextRoot = React.forwardRef<HTMLParagraphElement, TextProps>(
  (props, ref) => {
    const {
      children,
      className,
      align,
      variant,
      fullWidth,
      ...other
    } = props;

    return (
      <p
        ref={ref}
        className={clsx(textVariants({ align, variant, fullWidth }), className)}
        {...other}
      >
        {children}
      </p>
    );
  }
);

TextRoot.displayName = "Text";

// H1 component
const H1 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (props, ref) => {
    const {
      children,
      className,
      align,
      variant,
      ...other
    } = props;

    return (
      <h1
        ref={ref}
        className={clsx(
          textVariants({ align, variant, heading: "h1" }),
          className
        )}
        {...other}
      >
        {children}
      </h1>
    );
  }
);

H1.displayName = "Text.h1";

// H2 component
const H2 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (props, ref) => {
    const {
      children,
      className,
      align,
      variant,
      ...other
    } = props;

    return (
      <h2
        ref={ref}
        className={clsx(
          textVariants({ align, variant, heading: "h2" }),
          className
        )}
        {...other}
      >
        {children}
      </h2>
    );
  }
);

H2.displayName = "Text.h2";

// H3 component
const H3 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (props, ref) => {
    const {
      children,
      className,
      align,
      variant,
      ...other
    } = props;

    return (
      <h3
        ref={ref}
        className={clsx(
          textVariants({ align, variant, heading: "h3" }),
          className
        )}
        {...other}
      >
        {children}
      </h3>
    );
  }
);

H3.displayName = "Text.h3";

// H4 component
const H4 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (props, ref) => {
    const {
      children,
      className,
      align,
      variant,
      ...other
    } = props;

    return (
      <h4
        ref={ref}
        className={clsx(
          textVariants({ align, variant, heading: "h4" }),
          className
        )}
        {...other}
      >
        {children}
      </h4>
    );
  }
);

H4.displayName = "Text.h4";

// H5 component
const H5 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (props, ref) => {
    const {
      children,
      className,
      align,
      variant,
      ...other
    } = props;

    return (
      <h5
        ref={ref}
        className={clsx(
          textVariants({ align, variant, heading: "h5" }),
          className
        )}
        {...other}
      >
        {children}
      </h5>
    );
  }
);

H5.displayName = "Text.h5";

// H6 component
const H6 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (props, ref) => {
    const {
      children,
      className,
      align,
      variant,
      ...other
    } = props;

    return (
      <h6
        ref={ref}
        className={clsx(
          textVariants({ align, variant, heading: "h6" }),
          className
        )}
        {...other}
      >
        {children}
      </h6>
    );
  }
);

H6.displayName = "Text.h6";

// Compound component export
export const Text = Object.assign(TextRoot, {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
});

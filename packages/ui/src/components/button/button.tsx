import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import styles from "./button.module.css";

const buttonVariants = cva(styles.Button, {
  variants: {
    variant: {
      primary: styles['Button--primary'],
      secondary: styles['Button--secondary'],
      ghost: styles['Button--ghost'],
      text: styles['Button--text'],
    },
    size: {
      sm: styles['Button--sm'],
      md: styles['Button--md'],
      lg: styles['Button--lg'],
    },
    fullWidth: {
      true: styles['Button--fullWidth'],
    },
    loading: {
      true: styles['Button--loading'],
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  /** 버튼 내용 */
  children: React.ReactNode;

  /** 로딩 상태 */
  loading?: boolean;

  /** 아이콘 (왼쪽) */
  iconLeft?: React.ReactNode;

  /** 아이콘 (오른쪽) */
  iconRight?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      className,
      variant,
      size,
      loading = false,
      iconLeft,
      iconRight,
      fullWidth,
      disabled,
      ...other
    } = props;

    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={clsx(
          buttonVariants({ variant, size, fullWidth, loading }),
          className
        )}
        type="button"
        disabled={isDisabled}
        aria-busy={loading}
        {...other}
      >
        {loading && (
          <span className={styles.ButtonSpinner} aria-hidden="true">
            <svg
              className={styles.ButtonSpinnerSvg}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className={styles.ButtonSpinnerCircle}
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        )}
        {!loading && iconLeft && (
          <span className={styles.ButtonIcon} aria-hidden="true">
            {iconLeft}
          </span>
        )}
        {children}
        {!loading && iconRight && (
          <span className={styles.ButtonIcon} aria-hidden="true">
            {iconRight}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

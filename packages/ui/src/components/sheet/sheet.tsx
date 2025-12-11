import * as React from "react";
import { Dialog as BaseDialog } from "@base-ui-components/react/dialog";
import { clsx } from "clsx";
import styles from "./sheet.module.css";
import { CloseIcon } from "../../icons/close-icon";

/**
 * Sheet (Side Drawer) Component
 *
* Based on Base UI Dialog but styled as a sliding sheet.
 * Supported sides: 'left' | 'right' (default: 'right')
 */

// Root
export type SheetRootProps = React.ComponentProps<typeof BaseDialog.Root>;
const SheetRoot = BaseDialog.Root;

// Trigger
export type SheetTriggerProps = React.ComponentProps<typeof BaseDialog.Trigger>;
const SheetTrigger = BaseDialog.Trigger;

// Portal
export type SheetPortalProps = React.ComponentProps<typeof BaseDialog.Portal>;
const SheetPortal = BaseDialog.Portal;

// Backdrop
export interface SheetBackdropProps extends React.ComponentPropsWithoutRef<typeof BaseDialog.Backdrop> {
    className?: string;
}
const SheetBackdrop = React.forwardRef<HTMLDivElement, SheetBackdropProps>(
    ({ className, ...props }, ref) => {
        return (
            <BaseDialog.Backdrop
                {...props}
                ref={ref}
                className={clsx(styles.SheetBackdrop, className)}
            />
        );
    }
);
SheetBackdrop.displayName = "Sheet.Backdrop";

// Content (Popup)
export type SheetSide = "left" | "right";

export const SheetSides = {
    Left: "left",
    Right: "right",
} as const;

export interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof BaseDialog.Popup> {
    className?: string;
    side?: SheetSide | "left" | "right";
    children?: React.ReactNode;
}

const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
    ({ className, side = SheetSides.Right, children, ...props }, ref) => {
        return (
            <SheetPortal>
                <SheetBackdrop />
                <BaseDialog.Popup
                    {...props}
                    ref={ref}
                    className={clsx(styles.SheetPopup, className)}
                    data-side={side}
                >
                    {children}
                </BaseDialog.Popup>
            </SheetPortal>
        );
    }
);
SheetContent.displayName = "Sheet.Content";

// Header
const SheetHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={clsx(styles.SheetHeader, className)} {...props} />
);
SheetHeader.displayName = "Sheet.Header";

// Footer
const SheetFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={clsx(styles.SheetFooter, className)} {...props} />
);
SheetFooter.displayName = "Sheet.Footer";

// Title
export interface SheetTitleProps extends React.ComponentPropsWithoutRef<typeof BaseDialog.Title> {
    className?: string;
}
const SheetTitle = React.forwardRef<HTMLHeadingElement, SheetTitleProps>(
    ({ className, ...props }, ref) => (
        <BaseDialog.Title
            {...props}
            ref={ref}
            className={clsx(styles.SheetTitle, className)}
        />
    )
);
SheetTitle.displayName = "Sheet.Title";

// Description
export interface SheetDescriptionProps extends React.ComponentPropsWithoutRef<typeof BaseDialog.Description> {
    className?: string;
}
const SheetDescription = React.forwardRef<HTMLParagraphElement, SheetDescriptionProps>(
    ({ className, ...props }, ref) => (
        <BaseDialog.Description
            {...props}
            ref={ref}
            className={clsx(styles.SheetDescription, className)}
        />
    )
);
SheetDescription.displayName = "Sheet.Description";

// Close (Custom trigger to close)
const SheetClose = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof BaseDialog.Close>>(
    ({ className, children, ...props }, ref) => (
        <BaseDialog.Close
            {...props}
            ref={ref}
            className={clsx(styles.SheetClose, className)}
        >
            {children || (
                <>
                    <CloseIcon />
                    <span className="sr-only">Close</span>
                </>
            )}
        </BaseDialog.Close>
    )
);
SheetClose.displayName = "Sheet.Close";

export const Sheet = {
    Root: SheetRoot,
    Trigger: SheetTrigger,
    Content: SheetContent,
    Header: SheetHeader,
    Footer: SheetFooter,
    Title: SheetTitle,
    Description: SheetDescription,
    Close: SheetClose,
};

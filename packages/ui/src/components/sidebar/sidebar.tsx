import * as React from 'react';
import { clsx } from 'clsx';
import { Link } from '../link/link';
import styles from './sidebar.module.css';

// Sidebar
export function Sidebar({ className, ...props }: React.ComponentPropsWithoutRef<'nav'>) {
    return <nav {...props} className={clsx(styles.Sidebar, className)} />;
}

export function SidebarHeader({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
    return <div {...props} className={clsx(styles.SidebarHeader, className)} />;
}

export function SidebarBody({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
    return <div {...props} className={clsx(styles.SidebarBody, className)} />;
}

export function SidebarFooter({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
    return <div {...props} className={clsx(styles.SidebarFooter, className)} />;
}

export function SidebarSection({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
    return <div {...props} className={clsx(styles.SidebarSection, className)} />;
}

export function SidebarDivider({ className, ...props }: React.ComponentPropsWithoutRef<'hr'>) {
    return <hr {...props} className={clsx(styles.SidebarDivider, className)} />;
}

export function SidebarSpacer({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
    return <div aria-hidden="true" {...props} className={clsx(styles.SidebarSpacer, className)} />;
}

export function SidebarHeading({ className, ...props }: React.ComponentPropsWithoutRef<'h3'>) {
    return <h3 {...props} className={clsx(styles.SidebarHeading, className)} />;
}

export type SidebarItemProps = {
    current?: boolean;
    className?: string;
    children: React.ReactNode
} & (
        | ({ href?: never } & React.ComponentPropsWithoutRef<'button'>)
        | ({ href: string } & React.ComponentPropsWithoutRef<typeof Link>)
    );

export const SidebarItem = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, SidebarItemProps>(function SidebarItem(
    { current, className, children, ...props },
    ref
) {
    const finalClassName = clsx(styles.SidebarItem, className);

    if ('href' in props && typeof props.href === 'string') {
        return (
            <Link
                {...(props as any)}
                className={finalClassName}
                data-current={current ? 'true' : undefined}
                ref={ref as React.ForwardedRef<HTMLAnchorElement>}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            {...(props as any)}
            type="button"
            className={finalClassName}
            data-current={current ? 'true' : undefined}
            ref={ref as React.ForwardedRef<HTMLButtonElement>}
        >
            {children}
        </button>
    );
});

export function SidebarLabel({ className, ...props }: React.ComponentPropsWithoutRef<'span'>) {
    return <span {...props} className={clsx(styles.SidebarLabel, className)} />;
}

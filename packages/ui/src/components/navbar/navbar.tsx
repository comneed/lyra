import * as React from 'react';
import { clsx } from 'clsx';
import { Link } from '../link/link';
import styles from './navbar.module.css';

// Navbar
export function Navbar({ className, ...props }: React.ComponentPropsWithoutRef<'nav'>) {
    return <nav {...props} className={clsx(styles.Navbar, className)} />;
}

// NavbarDivider
export function NavbarDivider({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
    return <div aria-hidden="true" {...props} className={clsx(styles.NavbarDivider, className)} />;
}

// NavbarSection
export function NavbarSection({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props} className={clsx(styles.NavbarSection, className)} />
    );
}

// NavbarSpacer
export function NavbarSpacer({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
    return <div aria-hidden="true" {...props} className={clsx(styles.NavbarSpacer, className)} />;
}

// NavbarItem
export type NavbarItemProps = {
    current?: boolean;
    className?: string;
    children: React.ReactNode
} & (
        | ({ href?: never } & React.ComponentPropsWithoutRef<'button'>)
        | ({ href: string } & React.ComponentPropsWithoutRef<typeof Link>)
    );

export const NavbarItem = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, NavbarItemProps>(function NavbarItem(
    { current, className, children, ...props },
    ref
) {
    const finalClassName = clsx(styles.NavbarItem, className);

    if ('href' in props && typeof props.href === 'string') {
        return (
            <Link
                {...(props as any)}
                className={finalClassName}
                data-active={current ? 'true' : undefined}
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
            data-active={current ? 'true' : undefined}
            ref={ref as React.ForwardedRef<HTMLButtonElement>}
        >
            {children}
        </button>
    );
});

// NavbarLabel
export function NavbarLabel({ className, ...props }: React.ComponentPropsWithoutRef<'span'>) {
    return <span {...props} className={clsx(styles.NavbarLabel, className)} />;
}

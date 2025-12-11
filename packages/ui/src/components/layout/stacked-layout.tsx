import * as React from 'react';
import { clsx } from 'clsx';
import { NavbarItem } from '../navbar/navbar';
import { Sheet } from '../sheet/sheet';
import styles from './stacked-layout.module.css';

function OpenMenuIcon() {
    return (
        <svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true" style={{ width: 20, height: 20, fill: 'currentColor' }}>
            <path d="M2 6.75C2 6.33579 2.33579 6 2.75 6H17.25C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z" />
        </svg>
    );
}

function MobileSidebar({ open, close, children }: React.PropsWithChildren<{ open: boolean; close: () => void }>) {
    return (
        <Sheet.Root open={open} onOpenChange={close}>
            <Sheet.Content side="left" className={styles.MobileSidebarPanel}>
                <div className={styles.MobileSidebarContainer}>
                    {children}
                </div>
            </Sheet.Content>
        </Sheet.Root>
    );
}

export function StackedLayout({
    navbar,
    sidebar,
    children,
}: React.PropsWithChildren<{ navbar: React.ReactNode; sidebar: React.ReactNode }>) {
    const [showSidebar, setShowSidebar] = React.useState(false);

    return (
        <div className={styles.Layout}>
            {/* Sidebar on mobile */}
            <MobileSidebar open={showSidebar} close={() => setShowSidebar(false)}>
                {sidebar}
            </MobileSidebar>

            {/* Navbar */}
            <header className={styles.NavbarHeader}>
                <div className={styles.NavbarToggle}>
                    <NavbarItem onClick={() => setShowSidebar(true)} aria-label="Open navigation">
                        <OpenMenuIcon />
                    </NavbarItem>
                </div>
                <div className={styles.NavbarContent}>{navbar}</div>
            </header>

            {/* Content */}
            <main className={styles.Main}>
                <div className={styles.Content}>
                    <div className={styles.ContentInner}>{children}</div>
                </div>
            </main>
        </div>
    );
}

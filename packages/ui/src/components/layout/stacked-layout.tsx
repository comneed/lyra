import * as React from 'react';
import { clsx } from 'clsx';
import { NavbarItem } from '../navbar/navbar';
import { Dialog } from '../dialog/dialog';
import styles from './stacked-layout.module.css';

function OpenMenuIcon() {
    return (
        <svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true" style={{ width: 20, height: 20, fill: 'currentColor' }}>
            <path d="M2 6.75C2 6.33579 2.33579 6 2.75 6H17.25C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z" />
        </svg>
    );
}

function CloseMenuIcon() {
    return (
        <svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true" style={{ width: 20, height: 20, fill: 'currentColor' }}>
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
        </svg>
    );
}

function MobileSidebar({ open, close, children }: React.PropsWithChildren<{ open: boolean; close: () => void }>) {
    return (
        <Dialog.Root open={open} onOpenChange={close}>
            <Dialog.Portal>
                <Dialog.Backdrop />
                <Dialog.Popup className={styles.MobileSidebarPanel}>
                    <div className={styles.MobileSidebarContainer}>
                        <div className={styles.MobileSidebarHeader}>
                            <Dialog.Close render={<NavbarItem aria-label="Close navigation"><CloseMenuIcon /></NavbarItem>} />
                        </div>
                        {children}
                    </div>
                </Dialog.Popup>
            </Dialog.Portal>
        </Dialog.Root>
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

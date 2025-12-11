import * as React from 'react';
import { NavbarItem } from '../navbar/navbar';
import { LayoutSidebarContainer, SidebarClose } from './layout-sidebar-container';
import styles from './sidebar-layout.module.css';

function OpenMenuIcon() {
    return (
        <svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true" style={{ width: 20, height: 20, fill: 'currentColor' }}>
            <path d="M2 6.75C2 6.33579 2.33579 6 2.75 6H17.25C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z" />
        </svg>
    );
}

export function SidebarLayout({
    navbar,
    sidebar,
    children,
}: React.PropsWithChildren<{ navbar: React.ReactNode; sidebar: React.ReactNode }>) {
    const [showSidebar, setShowSidebar] = React.useState(false);

    return (
        <div className={styles.Layout}>
            {/* Sidebar on desktop */}
            <div className={styles.SidebarDesktop}>{sidebar}</div>

            {/* Sidebar on mobile */}
            <LayoutSidebarContainer open={showSidebar} onOpenChange={setShowSidebar}>
                {sidebar}
            </LayoutSidebarContainer>

            {/* Navbar on mobile */}
            <header className={styles.NavbarMobile}>
                <div className={styles.NavbarMobileToggle}>
                    <NavbarItem onClick={() => setShowSidebar(true)} aria-label="Open navigation">
                        <OpenMenuIcon />
                    </NavbarItem>
                </div>
                <div className={styles.NavbarMobileContent}>{navbar}</div>
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

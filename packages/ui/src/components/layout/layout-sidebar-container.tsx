import * as React from 'react';
import { clsx } from 'clsx';
import { Sheet } from '../sheet/sheet';
import styles from './layout-sidebar-container.module.css';

// Context to check if we are inside LayoutSidebarContainer
const LayoutSidebarContainerContext = React.createContext<boolean>(false);

// Layout Sidebar Container
export function LayoutSidebarContainer({
    open,
    onOpenChange,
    children,
    className
}: React.PropsWithChildren<{
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    className?: string;
}>) {
    return (
        <Sheet.Root open={open} onOpenChange={onOpenChange}>
            <Sheet.Content side="left" className={clsx(styles.MobileSidebarPanel, className)}>
                <Sheet.Header className="sr-only">
                    <Sheet.Title>Menu</Sheet.Title>
                    <Sheet.Description>Navigation Menu</Sheet.Description>
                </Sheet.Header>
                <div className={styles.MobileSidebarContainer}>
                    <LayoutSidebarContainerContext.Provider value={true}>
                        {children}
                    </LayoutSidebarContainerContext.Provider>
                </div>
            </Sheet.Content>
        </Sheet.Root>
    );
}

export function SidebarClose(props: React.ComponentProps<typeof Sheet.Close>) {
    const isMobile = React.useContext(LayoutSidebarContainerContext);

    // Only render the close button if inside the LayoutSidebarContainer context (i.e. Sheet)
    // This prevents errors when SidebarClose is rendered in the Desktop Sidebar where no Sheet context exists.
    if (!isMobile) {
        return null;
    }

    return <Sheet.Close {...props} />;
}

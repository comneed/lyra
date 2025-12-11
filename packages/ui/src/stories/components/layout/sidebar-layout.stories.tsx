import type { Meta, StoryObj } from '@storybook/react';
import { SidebarLayout } from '../../../components/layout/sidebar-layout';
import {
    Navbar,
    NavbarItem,
    NavbarSection,
    NavbarSpacer
} from '../../../components/navbar/navbar';
import {
    Sidebar,
    SidebarHeader,
    SidebarBody,
    SidebarFooter,
    SidebarSection,
    SidebarItem,
    SidebarLabel,
    SidebarDivider
} from '../../../components/sidebar/sidebar';
import { Avatar } from '../../../components/avatar/avatar';

const meta = {
    title: 'Layout/SidebarLayout',
    component: SidebarLayout,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SidebarLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock Components
const MockSidebar = (
    <Sidebar>
        <SidebarHeader>
            <SidebarItem>
                <Avatar.Root data-size="sm">
                    <Avatar.Fallback>LY</Avatar.Fallback>
                </Avatar.Root>
                <SidebarLabel>Lyra UI</SidebarLabel>
            </SidebarItem>
        </SidebarHeader>
        <SidebarBody>
            <SidebarSection>
                <SidebarItem href="#" current>
                    <span>🏠</span>
                    <SidebarLabel>Home</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="#">
                    <span>📊</span>
                    <SidebarLabel>Analytics</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="#">
                    <span>📁</span>
                    <SidebarLabel>Projects</SidebarLabel>
                </SidebarItem>
            </SidebarSection>
            <SidebarDivider />
            <SidebarSection>
                <SidebarItem href="#">
                    <span>⚙️</span>
                    <SidebarLabel>Settings</SidebarLabel>
                </SidebarItem>
            </SidebarSection>
        </SidebarBody>
        <SidebarFooter>
            <SidebarItem>
                <Avatar.Root data-size="sm">
                    <Avatar.Fallback>US</Avatar.Fallback>
                </Avatar.Root>
                <SidebarLabel>User Name</SidebarLabel>
            </SidebarItem>
        </SidebarFooter>
    </Sidebar>
);

const MockNavbar = (
    <Navbar>
        <NavbarSection>
            <NavbarItem href="#">Dashboard</NavbarItem>
            <NavbarItem href="#">Activity</NavbarItem>
        </NavbarSection>
        <NavbarSpacer />
        <NavbarSection>
            <NavbarItem>
                <span style={{ fontSize: '18px' }}>🔍</span>
            </NavbarItem>
            <NavbarItem>
                <Avatar.Root data-size="sm">
                    <Avatar.Fallback>US</Avatar.Fallback>
                </Avatar.Root>
            </NavbarItem>
        </NavbarSection>
    </Navbar>
);

/**
 * 사이드바 레이아웃입니다.
 * 데스크탑에서는 사이드바가 고정되고, 모바일에서는 햄버거 메뉴로 토글됩니다.
 * 사이드바 레이아웃은 Navbar를 prop으로 받아서 모바일에서 표시합니다.
 */
export const Default: Story = {
    render: () => (
        <div style={{ height: '100vh' }}>
            <SidebarLayout
                sidebar={MockSidebar}
                navbar={MockNavbar}
            >
                <div style={{ padding: '24px' }}>
                    <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Dashboard</h1>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} style={{
                                padding: '24px',
                                backgroundColor: 'white',
                                borderRadius: '12px',
                                border: '1px solid #e5e7eb',
                                height: '160px'
                            }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Card {i}</h3>
                                <p style={{ color: '#6b7280' }}>Content for card {i}...</p>
                            </div>
                        ))}
                    </div>
                </div>
            </SidebarLayout>
        </div>
    ),
};

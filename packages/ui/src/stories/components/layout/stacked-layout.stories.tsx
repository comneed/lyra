import type { Meta, StoryObj } from '@storybook/react';
import { StackedLayout } from '../../../components/layout/stacked-layout';
import {
    Navbar,
    NavbarItem,
    NavbarSection,
    NavbarSpacer,
    NavbarLabel,
    NavbarDivider
} from '../../../components/navbar/navbar';
import {
    Sidebar,
    SidebarHeader,
    SidebarBody,
    SidebarSection,
    SidebarItem,
    SidebarLabel
} from '../../../components/sidebar/sidebar';
import { Avatar } from '../../../components/avatar/avatar';

const meta = {
    title: 'Layout/StackedLayout',
    component: StackedLayout,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof StackedLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock Components
const MockNavbar = (
    <Navbar>
        <NavbarSection>
            <NavbarItem href="#">
                <span style={{ fontSize: '20px', marginRight: '8px' }}>💎</span>
                <NavbarLabel>Lyra UI</NavbarLabel>
            </NavbarItem>
        </NavbarSection>
        <NavbarDivider />
        <NavbarSection>
            <NavbarItem href="#" current>Dashboard</NavbarItem>
            <NavbarItem href="#">Team</NavbarItem>
            <NavbarItem href="#">Projects</NavbarItem>
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
                    <SidebarLabel>Dashboard</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="#">
                    <SidebarLabel>Team</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="#">
                    <SidebarLabel>Projects</SidebarLabel>
                </SidebarItem>
            </SidebarSection>
        </SidebarBody>
    </Sidebar>
);

/**
 * 스택 레이아웃입니다.
 * 상단 네비게이션 바가 있는 일반적인 레이아웃입니다.
 * 모바일에서는 사이드바 메뉴를 사용합니다.
 */
export const Default: Story = {
    render: () => (
        <div style={{ height: '100vh', backgroundColor: '#f9fafb' }}>
            <StackedLayout
                navbar={MockNavbar}
                sidebar={MockSidebar}
            >
                <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '24px' }}>
                        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Dashboard</h1>
                        <p style={{ color: '#6b7280' }}>Overview of your projects and team activity.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
                        {[1, 2, 3].map((i) => (
                            <div key={i} style={{
                                padding: '24px',
                                backgroundColor: 'white',
                                borderRadius: '12px',
                                border: '1px solid #e5e7eb',
                                height: '200px',
                                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                            }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Project {i}</h3>
                                <p style={{ color: '#6b7280' }}>Project details and status updates...</p>
                            </div>
                        ))}
                    </div>
                </div>
            </StackedLayout>
        </div>
    ),
};

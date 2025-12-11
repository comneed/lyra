import type { Meta, StoryObj } from '@storybook/react';
import {
    Sidebar,
    SidebarHeader,
    SidebarBody,
    SidebarFooter,
    SidebarSection,
    SidebarItem,
    SidebarHeading,
    SidebarDivider,
    SidebarSpacer,
    SidebarLabel,
} from '../../../components/sidebar/sidebar';
import { SidebarClose } from '../../../components/layout/layout-sidebar-container';
import { Avatar } from '../../../components/avatar/avatar';

const meta = {
    title: 'Components/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ height: '100vh', width: '280px', borderRight: '1px solid #e5e7eb' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 Sidebar 구성입니다.
 * 헤더, 본문, 푸터 영역으로 구성됩니다.
 */
export const Default: Story = {
    render: () => (
        <Sidebar>
            <SidebarHeader>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <SidebarItem>
                        <Avatar.Root data-size="sm">
                            <Avatar.Fallback>LY</Avatar.Fallback>
                        </Avatar.Root>
                        <SidebarLabel>Lyra UI</SidebarLabel>
                    </SidebarItem>
                    <SidebarClose />
                </div>
            </SidebarHeader>

            <SidebarBody>
                <SidebarSection>
                    <SidebarItem href="#">
                        Home
                    </SidebarItem>
                    <SidebarItem href="#" current>
                        Dashboard
                    </SidebarItem>
                    <SidebarItem href="#">
                        Projects
                    </SidebarItem>
                    <SidebarItem href="#">
                        Tasks
                    </SidebarItem>
                </SidebarSection>

                <SidebarDivider />

                <SidebarSection>
                    <SidebarHeading>Settings</SidebarHeading>
                    <SidebarItem href="#">General</SidebarItem>
                    <SidebarItem href="#">Members</SidebarItem>
                    <SidebarItem href="#">Permissions</SidebarItem>
                </SidebarSection>

                <SidebarSpacer />

                <SidebarSection>
                    <SidebarItem href="#">Support</SidebarItem>
                    <SidebarItem href="#">Changelog</SidebarItem>
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
    ),
};

/**
 * 아이콘이 포함된 SidebarItem입니다.
 * (아이콘 대신 텍스트 이모지로 대체했습니다)
 */
export const WithIcons: Story = {
    render: () => (
        <Sidebar>
            <SidebarHeader>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <SidebarItem>
                        <span style={{ fontSize: '20px' }}>💎</span>
                        <SidebarLabel>Lyra UI</SidebarLabel>
                    </SidebarItem>
                    <SidebarClose />
                </div>
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
                    <SidebarItem href="#">
                        <span>✅</span>
                        <SidebarLabel>Tasks</SidebarLabel>
                    </SidebarItem>
                </SidebarSection>
            </SidebarBody>

            <SidebarFooter>
                <SidebarItem>
                    <span>⚙️</span>
                    <SidebarLabel>Settings</SidebarLabel>
                </SidebarItem>
            </SidebarFooter>
        </Sidebar>
    ),
};

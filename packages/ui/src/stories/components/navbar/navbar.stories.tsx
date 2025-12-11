import type { Meta, StoryObj } from '@storybook/react';
import {
    Navbar,
    NavbarDivider,
    NavbarItem,
    NavbarLabel,
    NavbarSection,
    NavbarSpacer,
} from '../../../components/navbar/navbar';
import { Link } from '../../../components/link/link';
import { MagnifyingGlassIcon, BellIcon, HomeIcon } from '@radix-ui/react-icons';
import React from 'react';

const meta = {
    title: 'Components/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        className: { control: 'text' },
    },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Navbar {...args}>
                <NavbarSection>
                    <Link href="/">
                        <HomeIcon width={20} height={20} style={{ marginRight: '8px' }} />
                        <NavbarLabel>Lyra UI</NavbarLabel>
                    </Link>
                </NavbarSection>

                <NavbarSpacer />

                <NavbarSection>
                    <NavbarItem href="#">
                        <MagnifyingGlassIcon width={16} height={16} />
                    </NavbarItem>
                    <NavbarItem href="#">
                        <BellIcon width={16} height={16} />
                    </NavbarItem>
                    <NavbarDivider />
                    <NavbarItem href="#">Profile</NavbarItem>
                </NavbarSection>
            </Navbar>
        </div>
    ),
};

export const WithNavigationItems: Story = {
    render: (args) => (
        <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Navbar {...args}>
                <NavbarSection>
                    <NavbarItem href="#" current>Dashboard</NavbarItem>
                    <NavbarItem href="#">Projects</NavbarItem>
                    <NavbarItem href="#">Team</NavbarItem>
                    <NavbarItem href="#">Settings</NavbarItem>
                </NavbarSection>

                <NavbarSpacer />

                <NavbarSection>
                    <NavbarItem>Log out</NavbarItem>
                </NavbarSection>
            </Navbar>
        </div>
    ),
};

export const Complex: Story = {
    render: (args) => (
        <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Navbar {...args}>
                <NavbarSection>
                    <Link href="/">
                        <strong>Brand</strong>
                    </Link>
                    <NavbarDivider />
                    <NavbarItem href="#" current>Overview</NavbarItem>
                    <NavbarItem href="#">Customers</NavbarItem>
                    <NavbarItem href="#">Products</NavbarItem>
                </NavbarSection>

                <NavbarSpacer />

                <NavbarSection>
                    <NavbarItem href="#">
                        <MagnifyingGlassIcon width={16} height={16} />
                        <span style={{ marginLeft: '8px' }}>Search</span>
                    </NavbarItem>
                    <NavbarDivider />
                    <NavbarItem href="#">Sign in</NavbarItem>
                    <NavbarItem href="#" style={{
                        backgroundColor: 'var(--color-primary-600)',
                        color: 'white',
                        borderRadius: '4px',
                        padding: '4px 12px'
                    }}>
                        Sign up
                    </NavbarItem>
                </NavbarSection>
            </Navbar>
        </div>
    ),
};

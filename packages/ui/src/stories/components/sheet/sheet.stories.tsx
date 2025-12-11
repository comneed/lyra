import type { Meta, StoryObj } from '@storybook/react';
import { Sheet } from '../../../components/sheet/sheet';
import { Button } from '../../../components/button/button';

const meta = {
    title: 'Components/Sheet',
    component: Sheet.Root,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Sheet.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 Sheet 컴포넌트입니다.
 * 우측에서 슬라이드되어 나타납니다.
 */
export const Default: Story = {
    render: () => (
        <Sheet.Root>
            <Sheet.Trigger render={<Button>Open Sheet</Button>} />
            <Sheet.Content>
                <Sheet.Header>
                    <Sheet.Title>Edit Profile</Sheet.Title>
                    <Sheet.Description>Make changes to your profile here.</Sheet.Description>
                </Sheet.Header>
                <div style={{ padding: '24px 0' }}>
                    <p>Sheet content goes here...</p>
                </div>
                <Sheet.Footer>
                    <Sheet.Close render={<Button variant="ghost">Cancel</Button>} />
                    <Button variant="primary">Save Changes</Button>
                </Sheet.Footer>
            </Sheet.Content>
        </Sheet.Root>
    ),
};

/**
 * 좌측에서 나타나는 Sheet입니다.
 */
export const LeftSide: Story = {
    render: () => (
        <Sheet.Root>
            <Sheet.Trigger render={<Button>Open Left Sheet</Button>} />
            <Sheet.Content side="left">
                <Sheet.Header>
                    <Sheet.Title>Navigation</Sheet.Title>
                    <Sheet.Description>Navigate through the application.</Sheet.Description>
                </Sheet.Header>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '24px 0' }}>
                    <Button variant="ghost" fullWidth style={{ justifyContent: 'flex-start' }}>Home</Button>
                    <Button variant="ghost" fullWidth style={{ justifyContent: 'flex-start' }}>Settings</Button>
                    <Button variant="ghost" fullWidth style={{ justifyContent: 'flex-start' }}>Profile</Button>
                </div>
            </Sheet.Content>
        </Sheet.Root>
    ),
};

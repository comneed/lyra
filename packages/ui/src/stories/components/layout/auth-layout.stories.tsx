import type { Meta, StoryObj } from '@storybook/react';
import { AuthLayout } from '../../../components/layout/auth-layout';
import { Button } from '../../../components/button/button';
import { Card } from '../../../components/card/card';

const meta = {
    title: 'Layout/AuthLayout',
    component: AuthLayout,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AuthLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 인증 레이아웃입니다.
 * 화면 중앙에 콘텐츠를 배치합니다.
 */
export const Default: Story = {
    render: () => (
        <div style={{ height: '100vh' }}>
            <AuthLayout>
                <Card.Root style={{ width: '400px', maxWidth: '100%' }}>
                    <Card.Header>
                        <Card.Title>Sign In</Card.Title>
                        <Card.Metadata>Welcome back! Please enter your details.</Card.Metadata>
                    </Card.Header>
                    <Card.Content>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500 }}>Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    style={{
                                        width: '100%',
                                        padding: '8px 12px',
                                        borderRadius: '8px',
                                        border: '1px solid #e5e7eb'
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500 }}>Password</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    style={{
                                        width: '100%',
                                        padding: '8px 12px',
                                        borderRadius: '8px',
                                        border: '1px solid #e5e7eb'
                                    }}
                                />
                            </div>
                            <Button variant="primary" fullWidth>Sign In</Button>
                        </div>
                    </Card.Content>
                    <Card.Actions align="center">
                        <Button variant="text" size="sm">Don't have an account? Sign up</Button>
                    </Card.Actions>
                </Card.Root>
            </AuthLayout>
        </div>
    ),
};

import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../../../components/avatar/avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar.Root,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 Avatar 컴포넌트입니다.
 * 이미지가 로드되지 않으면 폴백 텍스트가 표시됩니다.
 */
export const Default: Story = {
  render: () => (
    <Avatar.Root>
      <Avatar.Image
        src="https://i.pravatar.cc/150?img=1"
        alt="User Avatar"
      />
      <Avatar.Fallback>JD</Avatar.Fallback>
    </Avatar.Root>
  ),
};

/**
 * 이미지가 있는 아바타입니다.
 */
export const WithImage: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Avatar.Root>
        <Avatar.Image
          src="https://i.pravatar.cc/150?img=2"
          alt="User 1"
        />
        <Avatar.Fallback>U1</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root>
        <Avatar.Image
          src="https://i.pravatar.cc/150?img=3"
          alt="User 2"
        />
        <Avatar.Fallback>U2</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root>
        <Avatar.Image
          src="https://i.pravatar.cc/150?img=4"
          alt="User 3"
        />
        <Avatar.Fallback>U3</Avatar.Fallback>
      </Avatar.Root>
    </div>
  ),
};

/**
 * 폴백만 있는 아바타입니다.
 * 이미지가 없을 때 이니셜이 표시됩니다.
 */
export const WithFallback: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Avatar.Root>
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root>
        <Avatar.Fallback>AB</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root>
        <Avatar.Fallback>XY</Avatar.Fallback>
      </Avatar.Root>
    </div>
  ),
};

/**
 * 다양한 크기의 아바타입니다.
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Avatar.Root data-size="sm">
        <Avatar.Image
          src="https://i.pravatar.cc/150?img=5"
          alt="Small"
        />
        <Avatar.Fallback>SM</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root data-size="md">
        <Avatar.Image
          src="https://i.pravatar.cc/150?img=6"
          alt="Medium"
        />
        <Avatar.Fallback>MD</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root data-size="lg">
        <Avatar.Image
          src="https://i.pravatar.cc/150?img=7"
          alt="Large"
        />
        <Avatar.Fallback>LG</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root data-size="xl">
        <Avatar.Image
          src="https://i.pravatar.cc/150?img=8"
          alt="Extra Large"
        />
        <Avatar.Fallback>XL</Avatar.Fallback>
      </Avatar.Root>
    </div>
  ),
};

/**
 * 다양한 색상의 아바타입니다.
 */
export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Avatar.Root>
        <Avatar.Fallback>DF</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root data-color="primary">
        <Avatar.Fallback>PR</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root data-color="success">
        <Avatar.Fallback>SC</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root data-color="warning">
        <Avatar.Fallback>WR</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root data-color="danger">
        <Avatar.Fallback>DG</Avatar.Fallback>
      </Avatar.Root>
    </div>
  ),
};

/**
 * 여러 아바타를 겹쳐서 표시하는 그룹입니다.
 */
export const Group: Story = {
  render: () => (
    <div className="AvatarGroup" style={{ display: "inline-flex", flexDirection: "row-reverse", paddingLeft: "8px" }}>
      <Avatar.Root style={{ marginLeft: "-8px", border: "2px solid white" }}>
        <Avatar.Image
          src="https://i.pravatar.cc/150?img=10"
          alt="User 1"
        />
        <Avatar.Fallback>U1</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root style={{ marginLeft: "-8px", border: "2px solid white" }}>
        <Avatar.Image
          src="https://i.pravatar.cc/150?img=11"
          alt="User 2"
        />
        <Avatar.Fallback>U2</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root style={{ marginLeft: "-8px", border: "2px solid white" }}>
        <Avatar.Image
          src="https://i.pravatar.cc/150?img=12"
          alt="User 3"
        />
        <Avatar.Fallback>U3</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root style={{ marginLeft: "-8px", border: "2px solid white" }}>
        <Avatar.Fallback>+5</Avatar.Fallback>
      </Avatar.Root>
    </div>
  ),
};

/**
 * 아이콘을 폴백으로 사용하는 아바타입니다.
 */
export const WithIcon: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Avatar.Root>
        <Avatar.Fallback>
          <span style={{ fontSize: "24px" }}>👤</span>
        </Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root data-size="lg">
        <Avatar.Fallback>
          <span style={{ fontSize: "32px" }}>🎭</span>
        </Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root data-size="xl">
        <Avatar.Fallback>
          <span style={{ fontSize: "48px" }}>🤖</span>
        </Avatar.Fallback>
      </Avatar.Root>
    </div>
  ),
};

/**
 * 커스텀 스타일이 적용된 아바타입니다.
 */
export const CustomStyled: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Avatar.Root
        style={{
          borderRadius: "12px",
          border: "3px solid #8b5cf6",
        }}
      >
        <Avatar.Image
          src="https://i.pravatar.cc/150?img=13"
          alt="Custom"
          style={{ borderRadius: "12px" }}
        />
        <Avatar.Fallback
          style={{
            backgroundColor: "#f3e8ff",
            color: "#8b5cf6",
            fontWeight: "bold",
          }}
        >
          CS
        </Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root
        style={{
          borderRadius: "8px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <Avatar.Fallback
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          GR
        </Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root
        style={{
          border: "3px dashed #f59e0b",
        }}
      >
        <Avatar.Fallback
          style={{
            backgroundColor: "#fef3c7",
            color: "#f59e0b",
            fontWeight: "bold",
          }}
        >
          DB
        </Avatar.Fallback>
      </Avatar.Root>
    </div>
  ),
};

/**
 * 폴백 표시에 딜레이가 있는 아바타입니다.
 */
export const LoadingDelay: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Avatar.Root>
        <Avatar.Image
          src="https://invalid-url.com/image.jpg"
          alt="Delayed"
        />
        <Avatar.Fallback delay={500}>DL</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root>
        <Avatar.Image
          src="https://invalid-url.com/image.jpg"
          alt="Instant"
        />
        <Avatar.Fallback>IN</Avatar.Fallback>
      </Avatar.Root>
    </div>
  ),
};

/**
 * 이미지 로딩이 실패한 경우의 아바타입니다.
 */
export const FailedImage: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Avatar.Root>
        <Avatar.Image
          src="https://invalid-url.com/nonexistent.jpg"
          alt="Failed 1"
        />
        <Avatar.Fallback>F1</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root>
        <Avatar.Image
          src="https://invalid-url.com/nonexistent.jpg"
          alt="Failed 2"
        />
        <Avatar.Fallback>F2</Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root>
        <Avatar.Image
          src="https://invalid-url.com/nonexistent.jpg"
          alt="Failed 3"
        />
        <Avatar.Fallback>F3</Avatar.Fallback>
      </Avatar.Root>
    </div>
  ),
};

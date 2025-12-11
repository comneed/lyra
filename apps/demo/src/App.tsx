import { useState } from 'react'
import {
  Button,
  Card,
  Text,
  toast,
  Toast,
  SidebarLayout,
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarClose,
  Navbar,
  NavbarSection,
  NavbarSpacer,
} from '@comneed/lyra-ui'

function HomeIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" fill="currentColor" style={{ width: 20, height: 20 }}>
      <path fillRule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clipRule="evenodd" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" fill="currentColor" style={{ width: 20, height: 20 }}>
      <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
    </svg>
  )
}

function App() {
  const [count, setCount] = useState(0)

  const handleToast = () => {
    toast.success('버튼을 클릭했습니다!')
  }

  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <Button size="sm" variant="ghost">Login</Button>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <SidebarHeading>Lyra Demo</SidebarHeading>
            <SidebarClose />
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <SidebarItem current href="#">
                <HomeIcon />
                <SidebarLabel>홈</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="#">
                <UserIcon />
                <SidebarLabel>프로필</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
        </Sidebar>
      }
    >
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <Toast.Provider />

        <Text.h1 style={{ marginBottom: '32px' }}>
          대시보드
        </Text.h1>

        <div style={{ display: 'grid', gap: '24px' }}>
          <Card.Root>
            <Card.Header>
              <Card.Title>버튼 컴포넌트</Card.Title>
            </Card.Header>
            <Card.Content>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Button onClick={() => setCount(count + 1)}>
                  카운터 증가 ({count})
                </Button>
                <Button variant="secondary" onClick={handleToast}>
                  Toast 표시
                </Button>
                <Button variant="ghost" onClick={() => setCount(0)}>
                  리셋
                </Button>
              </div>
            </Card.Content>
          </Card.Root>

          <Card.Root>
            <Card.Header>
              <Card.Title>텍스트 컴포넌트</Card.Title>
            </Card.Header>
            <Card.Content>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Text.h3>제목 레벨 3</Text.h3>
                <Text>
                  이것은 Lyra UI 컴포넌트 라이브러리를 사용하는 데모 앱입니다.
                </Text>
                <Text variant="description">
                  새로운 SidebarLayout과 Navbar가 적용된 화면입니다.
                </Text>
              </div>
            </Card.Content>
          </Card.Root>

          <Card.Root>
            <Card.Header>
              <Card.Title>현재 카운트</Card.Title>
              <Card.Metadata>실시간 상태 관리</Card.Metadata>
            </Card.Header>
            <Card.Content>
              <Text.h2>{count}</Text.h2>
            </Card.Content>
            <Card.Actions>
              <Button size="sm" onClick={() => setCount(count + 1)}>
                +1
              </Button>
              <Button size="sm" variant="secondary" onClick={() => setCount(count - 1)}>
                -1
              </Button>
            </Card.Actions>
          </Card.Root>
        </div>
      </div>
    </SidebarLayout>
  )
}

export default App

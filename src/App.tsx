import React from "react";
import "./styles/index";
// import JoinForm from "./pages/JoinForm";
import { Layout, Breadcrumb } from "antd";
import styled from "styled-components";
import UserProfile from "./pages/UserProfile";
import JoinForm from "./pages/JoinForm";

const SLayout = styled(Layout)`
  > .ant-layout-sider {
    background: #eee;
  }

  .main-content {
    background: #fff;
    padding: 24px;
    margin: 0;
    min-height: 280;
  }
`;

const App: React.FC = () => {
  return (
    <SLayout style={{ height: "100vh" }}>
      <Layout.Sider width={300}>
        <UserProfile />
      </Layout.Sider>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout.Content className="main-content">
          <JoinForm />
        </Layout.Content>
      </Layout>
    </SLayout>
  );
};

export default App;

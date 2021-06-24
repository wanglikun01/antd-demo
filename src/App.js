import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { nanoid } from "nanoid";
import "./App.less";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
export default class App extends Component {
  state = {
    collapsed: false,
    menuList: [
      { id: nanoid(), name: "个人中心", icon: UserOutlined },
      { id: nanoid(), name: "摄影", icon: VideoCameraOutlined },
      { id: nanoid(), name: "上传", icon: UploadOutlined },
    ],
  };
  toggle = (v) => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const { collapsed, menuList } = this.state;
    return (
      <Layout className="layout-main">
        <Sider
          className="layout-sider"
          collapsed={collapsed}
          collapsible
          trigger={null}
        >
          <p className="logo">LOGO</p>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            {menuList.map((item) => {
              return (
                <Menu.Item key={item.id} icon={<item.icon />}>
                  {item.name}
                </Menu.Item>
              );
            })}
            <SubMenu key="111" title="一级菜单" icon={<AppstoreOutlined />}>
              <Menu.Item key="222">子菜单项</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header className="layout-header">
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
          </Header>
          <Content className="layout-content">Content</Content>
          {/* <Footer>Footer</Footer> */}
        </Layout>
      </Layout>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Button type="primary">Learn React</Button>
//       </header>
//     </div>
//   );
// }

// export default App;

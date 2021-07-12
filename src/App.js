import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { Layout, Menu } from "antd";
import Home from "./components/Home";

// import { nanoid } from "nanoid";
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
      {
        id: 1,
        name: "个人中心",
        icon: UserOutlined,
        children: [
          { id: 12, name: "二级菜单1", icon: AppstoreOutlined, to: "/home" },
          { id: 13, name: "二级菜单2", icon: AppstoreOutlined, to: "/home" },
        ],
      },
      {
        id: 2,
        name: "摄影",
        icon: VideoCameraOutlined,
        children: [
          { id: 22, name: "二级摄影1", icon: AppstoreOutlined, to: "/home" },
          { id: 23, name: "二级摄影2", icon: AppstoreOutlined, to: "/home" },
        ],
      },
      {
        id: 3,
        name: "上传",
        icon: UploadOutlined,
        to: "/home",
        children: [
          //   { id: 32, name: "二级上传1", icon: AppstoreOutlined },
          //   { id: 33, name: "二级上传2", icon: AppstoreOutlined },
        ],
      },
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
              return item.children.length ? (
                <SubMenu key={item.id} icon={<item.icon />} title={item.name}>
                  {item.children.map((item) => {
                    return (
                      <Menu.Item key={item.id} icon={<item.icon />}>
                        <Link to={item.to}>{item.name}</Link>
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              ) : (
                <Menu.Item key={item.id} icon={<item.icon />}>
                  <Link to={item.to}>{item.name}</Link>
                </Menu.Item>
              );
            })}
            {/* <SubMenu key="111" title="一级菜单" icon={<AppstoreOutlined />}>
              <Menu.Item key="222">子菜单项</Menu.Item>
            </SubMenu> */}
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
          <Content className="layout-content">
            <Route path="/home" component={Home} />
          </Content>
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

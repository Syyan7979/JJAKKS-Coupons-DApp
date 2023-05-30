import React, { useState } from 'react';
import './App.css'

import { Layout, Menu, theme } from 'antd';

// Custom components
import ClaimCoupon from './components/ClaimCoupon/ClaimCoupon'
import CreateCoupon from './components/CreateCoupon/CreateCoupon';
import TrackCoupons from './components/TrackCoupons/TrackCoupons';

const { Header, Content, Footer, Sider } = Layout;


const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  enum User {
    Admin,
    Client
  }

  const [userType, setUserType] = useState(User.Client)

  const adminMenuItems = [
    {
      key: 'create',
      label: "Create Coupon",
    },
    {
      key: 'track',
      label: "Track Coupons",
    }
  ];
  const clientMenuItems = [
    {
      key: 'claim',
      label: "Claim Coupons",
    }
  ];


  const [menuItems, setMenuItems] = useState(clientMenuItems)
  const [page, setPage] = useState(menuItems[0].key);


  const displayContent = (page: string) => {
    if (userType == User.Client) {
      switch (page) {
        case 'claim':
          return(<ClaimCoupon />);
      }
    } else {
  
      switch (page) {
        case 'create':
          return (<CreateCoupon />);
        case 'track':
          return (<TrackCoupons />);
      }
    }
  };

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="logo" >
          <img src={require("./assets/couffer-logo-white.png")} alt="Couffer Logo" style={{width: "150px", marginLeft: "auto", marginRight: "auto", display: "block"}}/>
        </div>
        <Menu
          theme="dark"
          className='nav-menu'
          mode="inline"
          defaultSelectedKeys={[menuItems[0].key]}
          items={menuItems}
          onClick={(e) => setPage(e.key)}
        />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer}} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
            {displayContent(page)}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default App;


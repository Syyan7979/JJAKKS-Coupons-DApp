import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

import './styles.css'
const { Meta } = Card;

const CouponCard = ({title, description,merchant,expiration_date}: { title: string, description: string, merchant: string, expiration_date: string}) => (
  <Card
    style={{ width: 300 , margin: '10px',}}
    actions={[
      <SettingOutlined key="setting" rev={undefined} />,
      <EditOutlined key="edit" rev={undefined} />,
      <EllipsisOutlined key="ellipsis" rev={undefined} />,
    ]}
  >
      <div className='cpn-title'>{title}</div>
      <div className='cpn-merchant'>{merchant}</div>
      <span>&#183;</span>
      <div className='cpn-valid-until'>VALID UNTIL {expiration_date}</div>
      <hr className="solid"></hr>
      <div className='cpn-description'>{description}</div>

  </Card>
);

export default CouponCard;
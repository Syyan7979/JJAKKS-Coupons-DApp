import React from 'react';
import { PlusCircleOutlined, EllipsisOutlined,} from '@ant-design/icons';
import { Avatar, Card } from 'antd';

import './styles.css'
const { Meta } = Card;

const CouponCard = ({image_src, coupon_code, description,merchant,expiration_date}: { image_src:string, coupon_code: string, description: string, merchant: string, expiration_date: string}) => (
  <Card
    style={{ width: 300 , margin: '10px',}}
    cover={
      <img
        alt="example"
        src={image_src}
      />
    }

    actions={[
      <PlusCircleOutlined key="claim" rev={undefined} label='Claim Coupon'/>,
      <EllipsisOutlined key="details" rev={undefined} label='See Details'/>,
    ]}
  >
      <div className='cpn-coupon_code'>{coupon_code}</div>
      <div className='cpn-merchant'>{merchant}</div>
      <span>&#183;</span>
      <div className='cpn-valid-until'>VALID UNTIL {expiration_date}</div>
      <hr className="solid"></hr>
      <div className='cpn-description'>{description}</div>

  </Card>
);

export default CouponCard;
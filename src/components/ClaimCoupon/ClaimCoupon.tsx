import React, { Component } from 'react';
import CouponCard from './CouponCard';
import './styles.css'
import { Space } from 'antd';

const ClaimCoupon = () => {
    return(
        <div className='claim-coupon flex-wrap'>
            <div style={{width: '100%'}}>
                <h1 className='claim-page-title'>CLAIM COUPONS</h1>
            </div>

            <CouponCard title="LAZADA15OFF" description='Get 15% off on all Lazada purchases' expiration_date='31 DEC 2023' merchant='LAZADA'/>
            <CouponCard title="SHOPEE10OFF" description='Get 10% off on all Shopee purchases' expiration_date='1 DEC 2023' merchant='SHOPEE'/>
            <CouponCard title="LAZADA15OFF" description='Get 15% off on all Lazada purchases' expiration_date='31 DEC 2023' merchant='LAZADA'/>
            <CouponCard title="SHOPEE10OFF" description='Get 10% off on all Shopee purchases' expiration_date='1 DEC 2023' merchant='SHOPEE'/>
            <CouponCard title="LAZADA15OFF" description='Get 15% off on all Lazada purchases' expiration_date='31 DEC 2023' merchant='LAZADA'/>
            <CouponCard title="SHOPEE10OFF" description='Get 10% off on all Shopee purchases' expiration_date='1 DEC 2023' merchant='SHOPEE'/>
 
        </div>
    )
}

export default ClaimCoupon;


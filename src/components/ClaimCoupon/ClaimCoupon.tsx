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

            <CouponCard image_src='https://umbrellacreative.com.au/wp-content/uploads/2020/01/hide-the-pain-harold-why-you-should-not-use-stock-photos-1024x683.jpg' coupon_code="LAZADA15OFF" description='Get 15% off on all Lazada purchases' expiration_date='31 DEC 2023' merchant='LAZADA'/>
            <CouponCard image_src='https://umbrellacreative.com.au/wp-content/uploads/2020/01/hide-the-pain-harold-why-you-should-not-use-stock-photos-1024x683.jpg' coupon_code="SHOPEE10OFF" description='Get 10% off on all Shopee purchases' expiration_date='1 DEC 2023' merchant='SHOPEE'/>
            <CouponCard image_src='https://umbrellacreative.com.au/wp-content/uploads/2020/01/hide-the-pain-harold-why-you-should-not-use-stock-photos-1024x683.jpg' coupon_code="LAZADA15OFF" description='Get 15% off on all Lazada purchases' expiration_date='31 DEC 2023' merchant='LAZADA'/>
            <CouponCard image_src='https://umbrellacreative.com.au/wp-content/uploads/2020/01/hide-the-pain-harold-why-you-should-not-use-stock-photos-1024x683.jpg' coupon_code="SHOPEE10OFF" description='Get 10% off on all Shopee purchases' expiration_date='1 DEC 2023' merchant='SHOPEE'/>
            <CouponCard image_src='https://umbrellacreative.com.au/wp-content/uploads/2020/01/hide-the-pain-harold-why-you-should-not-use-stock-photos-1024x683.jpg' coupon_code="LAZADA15OFF" description='Get 15% off on all Lazada purchases' expiration_date='31 DEC 2023' merchant='LAZADA'/>
            <CouponCard image_src='https://umbrellacreative.com.au/wp-content/uploads/2020/01/hide-the-pain-harold-why-you-should-not-use-stock-photos-1024x683.jpg' coupon_code="SHOPEE10OFF" description='Get 10% off on all Shopee purchases' expiration_date='1 DEC 2023' merchant='SHOPEE'/>
        </div>
    )
}

export default ClaimCoupon;


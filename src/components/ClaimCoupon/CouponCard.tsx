import React from 'react';
import { PlusCircleOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { claim_coupon, access_contract_adress } from '../../utils/operation';

import './styles.css';
const { Meta } = Card;

const CouponCard = ({
    index,
    image_src,
    coupon_code,
    description,
    merchant,
    expiration_date,
}: {
    index: number;
    image_src: string;
    coupon_code: string;
    description: string;
    merchant: string;
    expiration_date: string;
}) => {
    const handleClaimCoupon = async () => {
        try {
            const contractAddress = await access_contract_adress(index); // Get the contract address using the provided function and the index prop
            console.log('Contract Address:', contractAddress); // Add this console log to check the contract address

            if (!contractAddress) {
                throw new Error('Contract address not found');
            }

            await claim_coupon(contractAddress); // Call the claim_coupon function to claim the coupon
        } catch (error) {
            console.error('Error claiming coupon:', error);
        }
    };

    return (
        <Card
            style={{ width: 300, margin: '10px' }}
            cover={<img alt="example" src={image_src} />}
            actions={[
                <PlusCircleOutlined key="claim" rev={undefined} onClick={handleClaimCoupon} />, // Add onClick handler to the PlusCircleOutlined icon
                // <EllipsisOutlined key="details" rev={undefined} label='See Details' />,
            ]}
        >
            <div className="cpn-coupon_code">{coupon_code}</div>
            <div className="cpn-merchant">{merchant}</div>
            <span className="hor-line">&#183;</span>
            <div className="cpn-valid-until">VALID UNTIL {expiration_date}</div>
            <hr className="solid"></hr>
            <div className="cpn-description">{description}</div>
        </Card>
    );
};

export default CouponCard;

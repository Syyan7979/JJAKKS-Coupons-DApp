import React, { useState, useEffect } from 'react';
import CouponCard from './CouponCard';
import './styles.css';
import { access_contract, contract_count } from "../../utils/operation";
import { fetchStorage } from "../../utils/tzkt";

interface NFTContractType {
  ledger: number;
  merchant: string;
  metadata: number;
  claimants: {};
  coupon_id: string;
  operators: number;
  coupon_code: string;
  description: string;
  total_supply: string;
  administrator: string;
  last_token_id: string;
  token_metadata: number;
  expiration_date: string;
}

const ClaimCoupon = () => {
  const [NFTContracts, setNFTContracts] = useState<NFTContractType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const count = await contract_count();
        const storage = await fetchStorage();
        const contracts: NFTContractType[] = [];

        for (let i = 0; i < Number(count); i++) {
          const contract = await access_contract(i);
          contracts.push(contract as NFTContractType);
        }

        setNFTContracts(contracts);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const bytes2char = (bytes: Uint8Array) => {
    const decoder = new TextDecoder();
    return decoder.decode(bytes);
  };

  const hexToUint8Array = (hex: string): Uint8Array => {
    const bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
      bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
    }
    return bytes;
  };


  return (
    <div className='claim-coupon flex-wrap'>
      <div style={{ width: '100%' }}>
        <h1 className='claim-page-title'>CLAIM COUPONS</h1>
      </div>

      {NFTContracts.length === 0 ? (
        <div>No coupons available</div>
      ) : (
        NFTContracts.map((contract, index) => (
          <CouponCard
            key={index}
            index={index}
            image_src='https://umbrellacreative.com.au/wp-content/uploads/2020/01/hide-the-pain-harold-why-you-should-not-use-stock-photos-1024x683.jpg'
            coupon_code={bytes2char(hexToUint8Array(contract.coupon_code))}
            description={bytes2char(hexToUint8Array(contract.description))}
            expiration_date={bytes2char(hexToUint8Array(contract.expiration_date))}
            merchant={bytes2char(hexToUint8Array(contract.merchant))}
          />
        ))
      )}
    </div>
  );
};

export default ClaimCoupon;

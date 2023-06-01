// Call opeartions
import { tezos } from "./tezos";
import { wallet } from "./wallet";

// Admin functions Entrypoints
export async function create_couponNFT_contract(total_supply, merchant, expiration_date, coupon_code, coupon_id, description, metadata) {
    try {
        const contract = await tezos.wallet.at("KT1UzUMDoR3MCwcLvJGvErqw357XR9M7VoKT");
        const op = await contract.methods.create_couponNFT_contract().send({
            total_supply:total_supply,
            merchant:merchant,
            expiration_date:expiration_date,
            coupon_code:coupon_code, 
            coupon_id:coupon_id, 
            description:description, 
            metadata:metadata
        })
        await op.confirmation(1);
    } catch (err) {
        throw err;
    }
}

// Coupon Contract Entrypoints
// contract_addr is found at storage > bigmap of KT1UzUMDoR3MCwcLvJGvErqw357XR9M7VoKT
export async function burn(contract_addr) {
    try {
        const contract = await tezos.wallet.at(contract_addr);
        const op = await contract.methods.create_couponNFT_contract().send({
        })
        await op.confirmation(1);
    } catch (err) {
        throw err;
    }
}

export async function mint(contract_addr,owner) {
    try {
        const contract = await tezos.wallet.at(contract_addr);
        const op = await contract.methods.mint().send({
            mint: owner,
        })
        await op.confirmation(1);
    } catch (err) {
        throw err;
    }
}


export async function transfer(contract_addr) {
    try {
        const contract = await tezos.wallet.at(contract_addr);
        const op = await contract.methods.mint().send({})
        await op.confirmation(1);
    } catch (err) {
        throw err;
    }
}


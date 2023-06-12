// Call opeartions
import { tezos } from "./tezos";
import { getAccount } from "./wallet";

// Admin functions Entrypoints
export const create_couponNFT_contract = async (total_supply, merchant, expiration_date, coupon_code, coupon_id, description, metadata) => {
    try {
        const contract = await tezos.wallet.at("KT1NvfnH4sFEBat8mCC3gTBWi8h4n35JyBic");
        const op = contract.methods.default({
            total_supply:total_supply,
            merchant:merchant,
            expiration_date:expiration_date,
            coupon_code:coupon_code, 
            coupon_id:coupon_id, 
            description:description, 
            metadata:metadata
        }).toTransferParams()
        await op.confirmation(1);
    } catch (err) {
        throw err;
    }
}

// TO DO: Get contract addr from admin contract bigmap


// Coupon Contract Entrypoints
// contract_addr is found at storage > bigmap of KT1NvfnH4sFEBat8mCC3gTBWi8h4n35JyBic
export async function burn(contract_addr) {
    try {
        const contract = await tezos.wallet.at(contract_addr);
        console.log("Burning coupon in progress...");
        const storage = await contract.storage();
        const op = await contract.methods.burn(
            [
                {
                  from_: await getAccount(),
                  token_id: storage.last_token_id.toNumber() - 1,
                  amount: 1,
                }
            ]
        ).send()
        await op.confirmation(1);
    } catch (err) {
        throw err;
    }
}

// TO DO: SUCCESSFULLY CLAIM COUPON
// AKA mint
export async function claim_coupon(contract_addr) {
    try {
        const contract = await tezos.wallet.at(contract_addr);
        const op = await contract.methods.mint(await getAccount()).send();
        console.log("Claiming coupon in progress...");
        await op.confirmation(); // Wait for confirmation, default confirmation level is used
        console.log("Coupon claimed successfully!");
    } catch (err) {
        throw err;
    }
}


export async function transfer(contract_addr, to_addr) {
    try {
        const contract = await tezos.wallet.at(contract_addr);
        const op = await contract.methods.transfer(
            [
                {
                    from_: await getAccount(),
                    txs: [
                        {
                            to_: to_addr,
                            token_id: 0,
                            amount: 1,
                        },
                    ],
                }
            ]
        ).send()
        await op.confirmation(1);
    } catch (err) {
        throw err;
    }
}


// Access bigmap
export async function access_contract(index) {
    try {
        const mainContract = await tezos.contract.at("KT1NvfnH4sFEBat8mCC3gTBWi8h4n35JyBic");
        const mainStorage = await mainContract.storage();
        const nftContractAddress = await mainStorage['couponsNFTContracts'].get(index).then(value => value.toString());

        const nftContract = await tezos.contract.at(nftContractAddress);
        const nftStorage = await nftContract.storage();

            
        console.log("The storage of the NFT contract is:", nftStorage);

        return nftStorage
    } catch (err) {
        throw err;
    }
}

export async function access_contract_adress(index) {
    try {
      const mainContract = await tezos.wallet.at("KT1NvfnH4sFEBat8mCC3gTBWi8h4n35JyBic");
      const mainStorage = await mainContract.storage();
      const nftContractAddress = await mainStorage['couponsNFTContracts'].get(index).then(value => value.toString());
  
      if (!nftContractAddress || nftContractAddress === 'undefined') {
        throw new Error("NFT contract address not found");
      }
  
      return nftContractAddress;
    } catch (err) {
      throw err;
    }
  }
  
  




// Access bigmap
export async function contract_count() {
    try {
      const contract = await tezos.contract.at("KT1NvfnH4sFEBat8mCC3gTBWi8h4n35JyBic");
      const storage = await contract.storage();
      const contractCount = storage['couponsNFTContractsCount'];
  
      console.log(`The contract count is ${contractCount}.`);
      return contractCount;
    } catch (err) {
      throw err;
    }
  }

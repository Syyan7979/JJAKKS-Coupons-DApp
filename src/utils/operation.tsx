// Call opeartions
import { tezos } from "./tezos";
import { wallet } from "./wallet";


// export async function addBalanceOwner(deposit) {
//     try {
//         const contract = await tezos.wallet.at("KT1McssP2KyxZttN8UPGGfH5VNeQgrpNK7EG");
//         const op = await contract.methods.addBalanceOwner().send({
//             amount: deposit, // to do check if 50
//             mutez: false,
//         })
//         await op.confirmation(1);
//     } catch (err) {
//         throw err;
//     }
// }


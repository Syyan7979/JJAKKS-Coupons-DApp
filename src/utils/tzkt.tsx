// Fetch storage of the Smart Contract by completing fetchStorage
import axios from "axios";

export const fetchStorage = async () => {
    const res = await axios.get(
        "https://api.ghostnet.tzkt.io/v1/contracts/KT1TiGtN5mu97ybT7paAqEV9Hr4KXF77uNAo/storage"
    );

    return res.data;
};
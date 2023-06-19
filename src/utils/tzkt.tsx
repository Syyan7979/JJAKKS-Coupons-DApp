// Fetch storage of the Smart Contract by completing fetchStorage
import axios from 'axios';

export const fetchStorage = async () => {
    const res = await axios.get(
        'https://api.ghostnet.tzkt.io/v1/contracts/KT1KCR7wqDE2s2mVfNqxUtb8q7FGYLkYZmKR/storage'
    );

    return res.data;
};

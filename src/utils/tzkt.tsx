// Fetch storage of the Smart Contract by completing fetchStorage
import axios from 'axios';

export const fetchStorage = async () => {
    const res = await axios.get(
        'https://api.ghostnet.tzkt.io/v1/contracts/KT1QD2DLAnogGtew4VnoaTWVXqz45MzAovvT/storage'
    );

    return res.data;
};

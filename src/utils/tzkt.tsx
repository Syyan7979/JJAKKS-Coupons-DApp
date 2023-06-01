// Fetch storage of the Smart Contract by completing fetchStorage
import axios from "axios";

export const fetchStorage = async () => {
    const res = await axios.get(
        "https://api.ghostnet.tzkt.io/v1/contracts/KT1UzUMDoR3MCwcLvJGvErqw357XR9M7VoKT/storage"
    );

    return res.data;
};
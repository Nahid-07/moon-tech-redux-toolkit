import axios from "../../utils/axios.config";

const fetchProducts = async () => {
    const data = await axios.get("/products");

    return data.data.data
}

export default fetchProducts
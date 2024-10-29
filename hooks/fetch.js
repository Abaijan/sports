import axios from "axios";


const dynamicFetch = async (propApi) => {
    try {
        const resp =  await axios.get( process.env.NEXT_PUBLIC_LOCAL_URL + `${propApi}`);
        return resp.data;
    } catch (e) {
        console.log(e);
    }

}
export default dynamicFetch;
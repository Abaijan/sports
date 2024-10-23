import axios from "axios";


const dynamicFetch = async (propApi) => {
    try {
        const resp =  await axios.get('http://localhost:8000' + `${propApi}`);
        return resp.data;
    } catch (e) {
        console.log(e);
    }

}
export default dynamicFetch;
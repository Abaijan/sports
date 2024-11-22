import axios from "axios";


const dynamicFetch = async (propApi) => {
    try {
        const data =  await axios.get(process.env.NEXT_PUBLIC_LOCAL_URL + `${propApi}`);
        return data.data;
    } catch (e) {
        console.log(e);
    }

}
const dynamicFetch2 = async (propApi) => {
    try {
        const data =  await axios.post(process.env.NEXT_PUBLIC_LOCAL_URL + `${propApi}`);
        return data.data;
    } catch (e) {
        console.log(e);
    }
}
export default dynamicFetch;
export  {dynamicFetch2};
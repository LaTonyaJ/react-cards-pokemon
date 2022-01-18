import axios from "axios";
import {useState} from 'react';

const useAxios = (_url) => {
    const [response, setResponse] = useState([]);
    async function addResponseData(pokemon = ''){
    const resp = await axios.get(`${_url}${pokemon}`);
    setResponse(data => [...data, resp.data]);
    }

    return [response, addResponseData];
};

export default useAxios;
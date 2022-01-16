import axios from "axios";
import uuid from 'uuid';
import {useState} from 'react';

const useAxios = (_url) => {
    const [url, setUrl] = useState([]);
    async function addUrl(){
    const resp = await axios.get(`${_url}`);
    setUrl(url => [...url, {...resp.data, id: uuid()}]);
    }

    return [url, addUrl];
};

export default useAxios;
import axios from "axios"
import { ApiUrl } from "../constants/ApiURLs"

export const createHeader=()=>{
    const httpHeader={
        'Allow-Access-Origin':'*',
        'Content-Type':'application/json',

    }
    return httpHeader
}

export const get=()=>{
    return axios.get(ApiUrl.BASE_URL,{headers:createHeader()})
}
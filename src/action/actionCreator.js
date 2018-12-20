import actionTypes from "./actionTypes";
import {fetch} from "whatwg-fetch";

export const icon_action = ()=>({
    type : actionTypes.icon_type,
    payload : new Promise(resolve=>{
        let url = "/index/getMenu?select=2_1&zhouyi_ids=c4_l4";
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            // console.log(data)
            resolve(data)
        })
    })
})
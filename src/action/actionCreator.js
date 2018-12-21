import actionTypes from "./actionTypes";
import {fetch} from "whatwg-fetch";

export const home_banner_action = ()=>({
    type : actionTypes.home_banner,
    payload : new Promise(resolve=>{
        
        let url = "/api/getIndexNavSkip?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=newest_zhe";
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            // console.log(data)
            resolve(data)
        })
    })
})
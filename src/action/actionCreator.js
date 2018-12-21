import actionTypes from "./actionTypes";
import {fetch} from "whatwg-fetch";

<<<<<<< HEAD
export const icon_action = ()=>({
    type : actionTypes.icon_type,
    payload : new Promise(resolve=>{
        let url = "/index/getMenu?select=2_1&zhouyi_ids=c4_l4";
=======
export const home_banner_action = ()=>({
    type : actionTypes.home_banner,
    payload : new Promise(resolve=>{
        //https://webservice.juanpi.com/api/getIndexNavSkip?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=newest_zhe
        //https://webservice.juanpi.com/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4&app_name=zhe&app_version=&platform=&catname=newest_zhe
        
        let url = "/api/getIndexNavSkip?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=newest_zhe";
>>>>>>> lgq
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            // console.log(data)
            resolve(data)
        })
    })
})
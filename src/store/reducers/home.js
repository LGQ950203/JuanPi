const defaultState ={
<<<<<<< HEAD
    iconPic:[]
=======
    homeBanner:[],
    homeNav:[],
    homeHost:[]
>>>>>>> lgq
}

export default (state=defaultState,action)=>{
    
    switch(action.type){
<<<<<<< HEAD
        case "ICON_TYPE_FULFILLED":
        console.log(action.payload.menu_list)
            let homeIcon = JSON.parse(JSON.stringify(state));
            homeIcon.iconPic = action.payload.menu_list;
            return homeIcon;
            
=======
        
        case "HOME_BANNER_FULFILLED":
        // console.log(action.payload)
            let homeData = JSON.parse(JSON.stringify(state));
            homeData.homeBanner = action.payload.adsRes.slide_ads.config.slide;
            homeData.homeNav = action.payload.adsRes.block[0].multi_block[0].data;
            homeData.homeHost = action.payload.adsRes.block[0].multi_block[1].data;
            return homeData;
>>>>>>> lgq
    }
    return state;
}
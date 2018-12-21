const defaultState ={
    homeBanner:[],
    homeNav:[],
    homeHost:[],
    homeChristmas:[],
    homeAdvert:[]
}

export default (state=defaultState,action)=>{
    
    switch(action.type){
        case "HOME_BANNER_FULFILLED":
            let homeData = JSON.parse(JSON.stringify(state));
            homeData.homeBanner = action.payload.adsRes.slide_ads.config.slide;
            homeData.homeNav = action.payload.adsRes.block[0].multi_block[0].data;
            homeData.homeHost = action.payload.adsRes.block[0].multi_block[1].data;
            homeData.homeChristmas = action.payload.adsRes.block[0].multi_block;
            homeData.homeAdvert = action.payload.adsRes.block[0].multi_block
            return homeData;
    }
    return state;
}
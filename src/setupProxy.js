const proxy = require("http-proxy-middleware");


//https://m.juanpi.com/index/getMenu?select=2_1&zhouyi_ids=c4_l4
//https://webservice.juanpi.com/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4&app_name=zhe&app_version=&platform=&catname=newest_zhe
//https://webservice.juanpi.com/api/getIndexNavSkip?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=newest_zhe

module.exports = (app)=>{
    app.use("/api",proxy({
        target:"https://webservice.juanpi.com",
        changeOrigin:true
    }))
}
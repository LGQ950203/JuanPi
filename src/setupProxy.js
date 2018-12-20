const proxy = require("http-proxy-middleware");


//https://m.juanpi.com/index/getMenu?select=2_1&zhouyi_ids=c4_l4
module.exports = (app)=>{
    app.use("/index",proxy({
        target:"https://m.juanpi.com",
        changeOrigin:true
    }))
}
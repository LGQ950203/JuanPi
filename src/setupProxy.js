const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use("/api",proxy({
        target:"https://webservice.juanpi.com",
        changeOrigin:true
    }))
}
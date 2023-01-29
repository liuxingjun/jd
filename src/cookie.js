const fs = require('fs')
// 京东Cookie
const jd_cookie = process.env.JD_COOKIE
// 京融Cookie
const jr_cookie = process.env.JR_COOKIE

function setupCookie() {
    cookie1 = { "cookie": jd_cookie }
    if (jr_cookie != "") {
        cookie1.jrBody = jr_cookie
    }
    var cookieSet = {}
    cookieSet.CookiesJD = JSON.stringify([cookie1])
    path = 'CookieSet.json'
    content = JSON.stringify(cookieSet)
    fs.writeFile(path, content, 'utf8');
}
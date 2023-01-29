const cookie = require("./cookie")
const child_process = require('child_process');
cookie.saveCookie()
child_process.execFile('node', ['JD_DailyBonus.js'], function (error, stdout, stderr) {
    if (error) {
        throw error;
    }
    console.log(stdout);
});
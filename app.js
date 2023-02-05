const hour = document.querySelector(".h")
const minute = document.querySelector(".m")
const second = document.querySelector(".s")
const date = document.querySelector(".da")
const month = document.querySelector(".mo")
const year = document.querySelector(".ye")


const getTime = () => {

let digHour = new Date().getHours();

let digMin = new Date().getMinutes();

let digSec = new Date().getSeconds();

let digDate = new Date().getDate();

let digMon = new Date().getMonth();

let digYear = new Date(). getFullYear();

digHour = digHour < 10 ? "0" + digHour : digHour;
digMin = digMin < 10 ? "0" + digMin : digMin;
digSec = digSec < 10 ? "0" + digSec : digSec;
digDate = digDate < 10 ? "0" + digDate : digDate;
digMon = digMon < 10 ? "0" + digMon : digMon;
digYear = digYear < 10 ? "0" + digYear : digYear;


    hour.innerText = digHour;
    minute.innerText = digMin;
    second.innerText = digSec
    date.innerText = digDate
    month.innerText = digMon
    year.innerText = digYear
}

getTime();

setInterval(getTime, 1000);

const time = {
    h: document.querySelector('.sg-timer-hour'),
    m: document.querySelector('.sg-timer-minute'),
    s: document.querySelector('.sg-timer-second'),
}

function TimeFormatter(t) {
    return t <= 9 ? "0" + t : t;
}

const date = {
    y: document.querySelector('.sg-date-year'),
    m: document.querySelector('.sg-date-month'),
    d: document.querySelector('.sg-date-day'),
    w: document.querySelector('.sg-date-week'),
}

const week = [
    '星期天',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
]

function Timer() {
    const dateClass = new Date();
    time.h.innerHTML = TimeFormatter(dateClass.getHours());
    time.m.innerHTML = TimeFormatter(dateClass.getMinutes());
    time.s.innerHTML = TimeFormatter(dateClass.getSeconds());

    date.y.innerHTML = TimeFormatter(dateClass.getFullYear());
    date.m.innerHTML = TimeFormatter(dateClass.getMonth() + 1);
    date.d.innerHTML = TimeFormatter(dateClass.getDate());
    date.w.innerHTML = week[dateClass.getDay()];

}

Timer();

const logTime = new Date();
function logTimeFromat(dateClass) {
    return TimeFormatter(dateClass.getFullYear()) + '-' + TimeFormatter(dateClass.getMonth() + 1) + '-' + TimeFormatter(dateClass.getDate());
}
let str = logTimeFromat(logTime);
if (window.localStorage.getItem('isAnotherDay')) {
    let isAnotherDay = new Date(window.localStorage.getItem('isAnotherDay')) - new Date(str);

    console.log(isAnotherDay);
    if (isAnotherDay < 0) {
        window.localStorage.setItem('Today', false);
        window.localStorage.setItem('isAnotherDay', str);

        // -----------写这里--------------

        window.localStorage.setItem('Today', true);
    } else {
        window.localStorage.setItem('Today', true);
    }
} else {
    window.localStorage.setItem('isAnotherDay', str);
}

setInterval(() => {
    Timer();
}, 1000);

// #region default

// ----------默认函数-------------
function addEvent(dom, event, func) {
    dom.addEventListener(event, func);
}

// ----------校验器-------------
const Validator = {
    isEmpty(elem, tip) {
        if (elem.value == '') {
            return tip;
        }
    },
    textLength(elem, restrict, tip) { }
};
class Validate {
    constructor() {
        this.caches = [];
    }

    addValidate(elem, reg, tip) {
        this.caches.push(function () {
            let ary = reg.split(':');
            let regFunc = ary.shift();
            ary.unshift(elem);
            ary.push(tip);

            return Validator[regFunc].apply(this, ary);
        })
    }

    start() {
        if (this.caches.length == 0) return false;

        for (let i = 0, cache; cache = this.caches[i++];) {
            let err = cache();
            if (err) return err;
        }
    }
}
const regRet = function (add) {
    const validate = new Validate();

    for (let i = 0, sg; sg = add[i++];) {
        validate.addValidate(sg.elem, sg.reg, sg.tip);
    }

    let err = validate.start();

    return err;
}

// #endregion

// #region timer
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

setInterval(() => {
    Timer();
}, 1000);
// #endregion

// #region 初始化冒险地图
const TailMap = {
    wrap: document.querySelector('.game-background-item img'),
    map: [
        '../assets/GameBackground/home.png',
        '../assets/GameBackground/ancient.png',
        '../assets/GameBackground/night1.png',
        '../assets/GameBackground/night2.png',
        '../assets/GameBackground/forest.png',
        '../assets/GameBackground/initial.png',
        '../assets/GameBackground/snow.png',
    ],
};
function TailMapChange() {
    const TailMapRandom = Math.random() * TailMap.map.length;
    let TailMapIndex = parseInt(TailMapRandom);
    TailMap.wrap.src = TailMap.map[TailMapIndex];
}
TailMapChange();
setInterval(() => {
    TailMapChange();
}, 1800000)
// #endregion

// #region 角色信息
class RankSubscribe {
    constructor() {
        this.caches = {};
    }

    listen(key, fn) {
        if (!this.caches[key]) this.caches[key] = [];

        this.caches[key].push(fn);
    }

    trigger(key, value) {
        const fns = this.caches[key];

        if (!fns || fns.length == 0) return false;

        for (let i = 0, fn; fn = fns[i++];) {
            fn.call(this, value);
        }
    }
}

const rankElem = {
    progress: document.querySelector('.player-rank-progress-bar'),
    remain: document.querySelector('.remain-exe'),
    progressCompute(have, restrict) {
        let proportion = (100 / restrict).toFixed(5);

        return proportion * have;
    },

    rankRule: {
        "0": 7,
        "1": 11,
        "2": 16,
        "3": 25,
        "4": 37,
        "5": 56,
        "6": 85,
        "7": 128,
        "8": 192,
        "9": 288,
        "10": 432,
        "11": 475,
        "12": 523,
        "13": 575,
        "14": 633,
        "15": 696,
        "16": 766,
        "17": 842,
        "18": 927,
        "19": 1019,
        "20": 1121,
        "21": 1178,
        "22": 1239,
        "23": 1302,
        "24": 1368,
        "25": 1438,
        "26": 1511,
        "27": 1588,
        "28": 1670,
        "29": 1755,
        "30": 1844,
        "31": 1938,
        "32": 2037,
        "33": 2141,
        "34": 2250,
        "35": 2365,
        "36": 2486,
        "37": 2613,
        "38": 2746,
        "39": 2886,
        "40": 3033,
        "41": 3103,
        "42": 3174,
        "43": 3247,
        "44": 3322,
        "45": 3398,
        "46": 3477,
        "47": 3557,
        "48": 3638,
        "49": 3722,
        "50": 3808,
        "51": 3895,
        "52": 3985,
        "53": 4076,
        "54": 4170,
        "55": 4266,
        "56": 4364,
        "57": 4465,
        "58": 4567,
        "59": 4672,
        "60": 4780,
        "61": 4809,
        "62": 4837,
        "63": 4867,
        "64": 4896,
        "65": 4925,
        "66": 4955,
        "67": 4984,
        "68": 5014,
        "69": 5044,
        "70": 5075,
        "71": 5105,
        "72": 5136,
        "73": 5167,
        "74": 5198,
        "75": 5229,
        "76": 5260,
        "77": 5292,
        "78": 5323,
        "79": 5355,
        "80": 5387,
        "81": 5371,
        "82": 5355,
        "83": 5339,
        "84": 5323,
        "85": 5307,
        "86": 5291,
        "87": 5275,
        "88": 5260,
        "89": 5244,
        "90": 5228,
        "91": 5212,
        "92": 5197,
        "93": 5181,
        "94": 5166,
        "95": 5150,
        "96": 5135,
        "97": 5119,
        "98": 5104,
        "99": 5089,
        "100": 5073
    }
}


const userInfoElem = {
    level: document.querySelector('.real-rank'),
    progress: document.querySelector('.player-rank-progress-bar'),
    remain: document.querySelector('.remain-exe'),
    userInfo: window.localStorage.getItem('UserInfo')
        ? JSON.parse(JSON.parse(JSON.stringify(window.localStorage.getItem('UserInfo'))))
        : window.localStorage.setItem('UserInfo', JSON.stringify({
            rank: 0,
            exe: 0,
            remain: rankElem.rankRule[0],
            restrict: rankElem.rankRule[0],
        })),



    init() {
        this.userInfo = JSON.parse(JSON.parse(JSON.stringify(window.localStorage.getItem('UserInfo'))));

        this.level.innerHTML = this.userInfo.rank;
        this.progress.style.width = rankElem.progressCompute(this.userInfo.exe, this.userInfo.restrict) + '%';
        this.remain.innerHTML = this.userInfo.remain;
    }
}

userInfoElem.init();


const rankSubscribe = new RankSubscribe();


rankSubscribe.listen('rank', function (value) {
    userInfoElem.userInfo.remain = userInfoElem.userInfo.restrict - userInfoElem.userInfo.exe;
    let proportion = rankElem.progressCompute(value, userInfoElem.userInfo.restrict);

    rankElem.progress.style.width = proportion + '%';
    rankElem.remain.innerHTML = userInfoElem.userInfo.remain;

    if (userInfoElem.userInfo.exe >= rankElem.rankRule[userInfoElem.userInfo.rank]) {
        const surplus = Math.abs(rankElem.rankRule[userInfoElem.userInfo.rank] - userInfoElem.userInfo.exe);

        userInfoElem.userInfo.rank += 1;
        userInfoElem.userInfo.remain = rankElem.rankRule[userInfoElem.userInfo.rank] - surplus;
        userInfoElem.userInfo.exe = surplus;

        userInfoElem.userInfo.restrict = rankElem.rankRule[userInfoElem.userInfo.rank];

        proportion = rankElem.progressCompute(surplus, userInfoElem.userInfo.restrict);
        rankElem.progress.style.width = proportion + '%';

        rankElem.remain.innerHTML = userInfoElem.userInfo.remain;
    }

    window.localStorage.setItem('UserInfo', JSON.stringify({
        rank: userInfoElem.userInfo.rank,
        exe: userInfoElem.userInfo.exe,
        remain: userInfoElem.userInfo.restrict - userInfoElem.userInfo.exe,
        restrict: rankElem.rankRule[userInfoElem.userInfo.rank],
    }))
})

document.querySelector('#test').addEventListener('click', function () {
    rankSubscribe.trigger('rank', userInfoElem.userInfo.exe += 1)
})
// #endregion

// #region 手风琴列表
const accordionOption = {
    t: document.querySelectorAll('.sg-option-title'),
    c: document.querySelectorAll('.sg-option-content'),
    openIndex: (function () {
        if (window.localStorage.getItem('OpenIndex')) {
            return Number(window.localStorage.getItem('OpenIndex'))
        } else {
            window.localStorage.setItem('OpenIndex', 0);
            return 0;
        }
    })(),
    init() {
        for (let i = 0; i < accordionOption.t.length; i++) {
            accordionOption.t[i].index = i;
            accordionOption.c[i].classList.add('close-item');
            accordionOption.c[accordionOption.openIndex].classList.remove('close-item');

            accordionOption.t[i].addEventListener('click', function () {
                for (let i = 0; i < accordionOption.t.length; i++) {
                    accordionOption.c[i].classList.add('close-item');
                }
                accordionOption.c[this.index].classList.remove('close-item');
                window.localStorage.setItem('OpenIndex', this.index)
            })
        }
    }
}
accordionOption.init();
// #endregion

// #region ToDoList

const toDoListElem = {
    wrap: document.querySelector('.sg-option-ToDoList-content'),
    create: document.querySelector('.todolist-create-btn'),
    createWrap: document.querySelector('.sg-option-ToDoList-content-create-wrap'),
    close: document.querySelector('#todolist-cancel'),
    mask: document.querySelector('.todolist-dialog-mask'),
    publish: document.querySelector('#todolist-publish'),
    taskTitle: document.querySelector('#task-title'),

    oriJson: window.localStorage.getItem('ToDoList') || [],
    json: window.localStorage.getItem('TodayToDoList')
        ? JSON.parse(window.localStorage.getItem('TodayToDoList'))
        : window.localStorage.setItem('TodayToDoList', JSON.stringify([]))
}

class ToDoList {
    constructor(wrap, info) {
        this.wrap = wrap;
        this.info = info;
    }

    createToDoList(text, index) {

        if (this.wrap.classList.contains('none-of-todolist'))
            this.wrap.classList.remove('none-of-todolist');


        const that = this;
        const div = document.createElement('div');
        div.className = 'sg-option-ToDoList-item';
        div.index = index;
        div.innerHTML =
            `
                        <div class="sg-option-ToDoList-item-exe">Exe 5</div>
                        <div class="sg-option-ToDoList-item-text">${index},${text}</div>
                        <div class="sg-option-ToDoList-item-operate">
                            <img src="../assets/Common/yes.png" alt="">
                        </div>
                `;

        const btn = div.querySelector('.sg-option-ToDoList-item-operate');
        addEvent(btn, 'click', function () {
            if (document.body.contains(this.parentNode)) that.wrap.removeChild(this.parentNode);

            console.log(that.info);
            const spliceIndex = that.info.findIndex(val => {
                return val.id == this.parentNode.index;
            });
            toDoListElem.json.splice(spliceIndex, 1);
            if (!toDoListElem.json || toDoListElem.json.length == 0) {
                const testbtn = document.querySelector('.sg-option-ToDoList-content');
                testbtn.classList.add('none-of-todolist');
                testbtn.innerHTML = '今日任务已完成!';
            }
            window.localStorage.setItem('TodayToDoList', JSON.stringify(that.info));


            rankSubscribe.trigger('rank', userInfoElem.userInfo.exe += 5);
        })

        return div;
    }

    appendToDoList(elem) {

        if (!(elem.oriJson instanceof Object)) elem.oriJson = JSON.parse(elem.oriJson);

        if (elem.wrap.children.length == 0) elem.wrap.innerHTML = '';


        const createInfo = {
            id: elem.oriJson ? elem.oriJson.length : 0,
            status: false,
            text: elem.taskTitle.value,
        }

        elem.oriJson.push(createInfo)
        elem.json.push(createInfo);;
        window.localStorage.setItem('ToDoList', JSON.stringify(elem.oriJson));
        window.localStorage.setItem('TodayToDoList', JSON.stringify(elem.json));

        const div = toDoList.createToDoList(elem.taskTitle.value, elem.oriJson.length - 1);
        elem.wrap.appendChild(div);

        elem.taskTitle.value = '';
        toDoList.closeDialog(elem.createWrap, elem.mask);
    }

    openDialog(wrap, mask) {
        wrap.style.display = 'block';
        mask.style.display = 'block';
    }

    closeDialog(wrap, mask) {
        wrap.style.display = 'none';
        mask.style.display = 'none';
    }

    init() {
        const that = this;

        try {
            if (!toDoListElem.oriJson || toDoListElem.oriJson.length == 0) {
                toDoListElem.wrap.innerHTML = '还未发布任务哦!';
                toDoListElem.wrap.classList.add('none-of-todolist');
            } else if (!toDoListElem.json || toDoListElem.json.length == 0) {
                const testbtn = document.querySelector('.sg-option-ToDoList-content');
                testbtn.classList.add('none-of-todolist');
                testbtn.innerHTML = '今日任务已完成!';
            } else {
                toDoListElem.wrap.innerHTML = '';
                toDoListElem.wrap.classList.remove('none-of-todolist');
            }


            for (let i = 0; i < toDoListElem.json.length; i++) {
                const div = this.createToDoList(toDoListElem.json[i].text, i);

                this.wrap.appendChild(div);
            }

        } catch {

        }
    }
}


const toDoList = new ToDoList(toDoListElem.wrap, toDoListElem.json,);
toDoList.init();

addEvent(toDoListElem.create, 'click', function () {
    toDoList.openDialog(toDoListElem.createWrap, toDoListElem.mask);
});
addEvent(toDoListElem.close, 'click', function () {
    toDoList.closeDialog(toDoListElem.createWrap, toDoListElem.mask);
});
addEvent(toDoListElem.mask, 'click', function () {
    toDoList.closeDialog(toDoListElem.createWrap, toDoListElem.mask);
});
addEvent(toDoListElem.publish, 'click', function () {
    const err = regRet(
        [{ elem: toDoListElem.taskTitle, reg: 'isEmpty', tip: '不能为空' },]
    );

    if (err) return toDoListElem.taskTitle.setAttribute('placeholder', '不能为空!!!');

    toDoList.appendToDoList(toDoListElem)
    toDoListElem.taskTitle.setAttribute('placeholder', '请输入任务内容')
});
// #endregion

// #region 日期更迭
const logTime = new Date();
function logTimeFromat(dateClass) {
    return TimeFormatter(dateClass.getFullYear()) + '-' + TimeFormatter(dateClass.getMonth() + 1) + '-' + TimeFormatter(dateClass.getDate());
}

let str = logTimeFromat(logTime);
if (window.localStorage.getItem('isAnotherDay')) {
    let isAnotherDay = new Date(window.localStorage.getItem('isAnotherDay')) - new Date(str);

    if (isAnotherDay < 0) {
        window.localStorage.setItem('Today', false);
        window.localStorage.setItem('isAnotherDay', str);

        // -----------写这里--------------
        window.localStorage.setItem('TodayToDoList', JSON.stringify(JSON.parse(toDoListElem.oriJson)));
        toDoListElem.json = JSON.parse(window.localStorage.getItem('TodayToDoList'));

        toDoListElem.wrap.classList.remove('none-of-todolist');
        toDoListElem.wrap.innerHTML = '';
        for (let i = 0; i < toDoListElem.json.length; i++) {
            const div = toDoList.createToDoList(toDoListElem.json[i].text, i);

            toDoListElem.wrap.appendChild(div);
        }


        window.localStorage.setItem('Today', true);
    } else {
        window.localStorage.setItem('Today', true);

    }
} else {
    window.localStorage.setItem('isAnotherDay', str);

}
        // #endregion

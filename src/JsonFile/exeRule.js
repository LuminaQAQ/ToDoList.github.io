let exe = 5;
let initProportion = .5;

for (let i = 0; i <= 100; i++) {
    exe *= 1 + initProportion;
    rankElem.rankRule[i] = parseInt(exe);

    if (i == 10) initProportion -= .4;
    if (i == 20) initProportion -= .049;
    if (i == 40) initProportion -= .028;
    if (i == 60) initProportion -= .017;
    if (i == 80) initProportion -= .009;
}
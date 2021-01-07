var Question = [
    ["ソフトバンクのお父さんは現在何代目？","初代","二代目","三代目","四代目","二代目"],
    ["docomoが新しく発表したブランド名は？","aroha","ahamo","aimo","asobo","ahamo"],
    ["Yモバイルのキャラぷてにゃんの猫種は？","マンチカン","ペルシャ","ラグドール","スコティッシュフォールド","スコティッシュフォールド"]
];



var Qcnt = Math.floor( Math.random() *2);

Q_Set(Qcnt);

function Q_Set(){
Q.Question[Qcnt][0];
A.Question[Qcnt][1];
A2. Question[Qcnt][2];
A3.Question[Qcnt][3];
A4.Question[Qcnt][4];

};


var Q = document.getElementByClassName("textQ");
var A = document.getElementByClassName("ans1");
var A2 = document.getElementByClassName("ans2");
var A3 = document.getElementByClassName("ans3");
var A4 = document.getElementByClassName("ans4");



function Answer_Check(ans) {
    if(ans == Question[Qcnt][4]) {
    alert("正解");
    Q_Set();
    } else {
    alert("不正解");
    }
}





//フェードーーーーーーーーーー

var kuro = document.getElementById("fadeLayer");

function fade() {


      var maxheightA = Math.max(document.body.clientHeight, document.body.scrollHeight)
      var maxheightB = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight)
      var MaxHeight = Math.max(maxheightA,maxheightB);
      kuro.style.height = MaxHeight+"px";

      var maxwidthA = Math.max(document.body.clientWidth, document.body.scrollWidth)
      var maxwidthB = Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth)
      var MaxWidth = Math.max(maxwidthA, maxwidthB);
      kuro.style.width = MaxWidth + "px";

    //   setTimeout(function(){
        kuro.style.visibility = "visible";
    //   $(kuro).css({
    //     "opacity":"0.5",
    //     "transition-duration": "2s"
    //   })
      

    // },1000);


    }

function hidden() {
    kuro.style.visibility = "hidden";    
}




// おんがくけい！！！！！！！！！！！！！！！！！！！！！！！！！！

// const button = getElementsByTagName("button")
const bgm = document.querySelector("#titlebgm"); 
const sei = document.querySelector("#seikai");
const mon = document.querySelector("#monmon");
const ke = document.querySelector("#kettei");
const be = document.querySelector("#beem");
const cho = document.querySelector("#choise");
const pi = document.querySelector("#pinpon");
const don = document.querySelector("#dondon");
const kir = document.querySelector("#kirakira");
const eriA = document.querySelector("#eriAudiense");
const eriF = document.querySelector("#eriFiftyfifty");
const eriT = document.querySelector("#eriTelephone");


function monmon(){
    mon.loop = true;
    mon.play();
    mon.volume = 0.1;
}
function seikai() {
    sei.play();
}
function bgmmmm() {
    bgm.loop = true;
    bgm.play();
    bgm.volume = 0.1;
}
function bgmPause() {
    bgm.pause();
}
function kettei() {
    ke.play();
}
function beem() {
    be.play();
    be.volume = 1;
}
function choise() {
    cho.play();
    cho.volume = 0.5;
}
function pinpon() {
    pi.play();
   
}
function dondon() {
    don.play();
    don.volume = 1;
}
function kirakira() {
    kir.play();
    kir.volume = 1;
}
function eriAudiense() {
    eriA.play();
    eriA.volume = 1;
}
function eriFiftyfifty() {
    eriF.play();
    eriF.volume = 1;
}
function eriTelephone() {
    eriT.play();
    eriT.volume = 1;
}




// ！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！

var body = document.body;


var tou = document.getElementById("tou");

tou.addEventListener("click",()=>{
    bgmmmm();



    $('#sta').fadeIn(2000)
    $(body).css({
        "background-image": "url(img/space.jpg)",
        "width": "100vw",
    "height": "100vh",
        "transition-duration":"2s"
    });
    
    sta.style.display ="block";
    tou.style.display ="none";
})

$(body).css("background-color", "black");



var sta = document.getElementById("sta");
var tit = document.getElementById("tit");
var que = document.getElementById("que");
var ome = document.getElementById("ome");
var zan = document.getElementById("zan");
var jin = document.getElementById("jin");
var maru = document.getElementById("maru");
var lif = document.getElementById("life");
var tic = document.getElementById("tickets");
var fuk = document.getElementById("fukubukuros");
var aud = document.getElementById("audiense");
var tel = document.getElementById("telefon");
var fif = document.getElementById("fift");
var ddd = document.getElementById("doco");
var auau = document.getElementById("auau");
var soft = document.getElementById("sofsof");
var uquq = document.getElementById("uquq");
var ymym = document.getElementById("ymym");


sta.style.display ="none";
tit.style.display ="none";
que.style.display ="none";
ome.style.display ="none";
zan.style.display ="none";
jin.style.display ="none";
maru.style.display ="none";
lif.style.display ="none";
tic.style.display ="none";
fuk.style.display ="none";

var player = 0

var QQQ = 1;


function start(){

    kettei();
    $('#sta').fadeOut(1500)


    setTimeout(function(){

    $(tit).fadeIn(1000)
    sta.style.display ="none";
    tit.style.display ="block";
    

},2000);




}

function ma(){
 $(maru).addClass("animate__animated animate__delay-2s animate__zoomIn");
    maru.style.display ="block";
}

function maruH() {

    $(maru).removeClass("animate__animated animate__delay-2s animate__zoomIn");
    maru.style.display ="none";
    
}








function teltel() {
    fade();
    choise();

    setTimeout(function(){
        eriTelephone();
    },1000);

    setTimeout(function(){
        hidden();


        $(tel).css("opacity","0.1");
    },2000);
    
}

function audaud() {
    fade();
    choise();

    setTimeout(function(){
        eriAudiense();
    },1000);

     setTimeout(function(){
        hidden();

        $(aud).css("opacity","0.1");

    },2000);

    
}





//----リファクタリング中０１２３//\\\\\\\\\\\

ddd.addEventListener("click",(e)=>{
    console.log(e);
    kettei();
    swichQuestion(e);
})

auau.addEventListener("click",(e)=>{
    console.log(e);
    kettei();
    swichQuestion(e);
})

soft.addEventListener("click",(e)=>{
    console.log(e);
    kettei();
    swichQuestion(e);
})

uquq.addEventListener("click",(e)=>{
    console.log(e);
    kettei();
    swichQuestion(e);
})

ymym.addEventListener("click",(e)=>{
    console.log(e);
    kettei();
    swichQuestion(e);
})




const swichQuestion = (e)=> {
    switch (e.target.innerText) {
    case "docomo":
        $Q.textContent = DQuestion[Qcnt][0];
        $A.textContent= DQuestion[Qcnt][1];
        $A2.textContent= DQuestion[Qcnt][2];
        $A3.textContent= DQuestion[Qcnt][3];
        $A4.textContent= DQuestion[Qcnt][4];
    choiseQuestion();

        break;

    case "au":
        $Q.textContent = AQuestion[Qcnt][0];
        $A.textContent= AQuestion[Qcnt][1];
        $A2.textContent= AQuestion[Qcnt][2];
        $A3.textContent= AQuestion[Qcnt][3];
        $A4.textContent= AQuestion[Qcnt][4];
    choiseQuestion();
        
        break;

    case "softbank":
        $Q.textContent = SQuestion[Qcnt][0];
        $A.textContent= SQuestion[Qcnt][1];
        $A2.textContent= SQuestion[Qcnt][2];
        $A3.textContent= SQuestion[Qcnt][3];
        $A4.textContent= SQuestion[Qcnt][4];
        choiseQuestion();
        break;

    case "UQ":
        $Q.textContent = UQuestion[Qcnt][0];
        $A.textContent= UQuestion[Qcnt][1];
        $A2.textContent= UQuestion[Qcnt][2];
        $A3.textContent= UQuestion[Qcnt][3];
        $A4.textContent= UQuestion[Qcnt][4];
        choiseQuestion();
        break;

    case "Y!mobile":
        $Q.textContent = YQuestion[Qcnt][0];
        $A.textContent= YQuestion[Qcnt][1];
        $A2.textContent= YQuestion[Qcnt][2];
        $A3.textContent= YQuestion[Qcnt][3];
        $A4.textContent= YQuestion[Qcnt][4];
        choiseQuestion();
        break;

    default:
        break;
}




}


function choiseQuestion(){
    
    $('#tit').fadeOut(1000)
    setTimeout(function(){

        
            beem();

            $('#jin').fadeIn(3000)

        setTimeout(function(){
    
            // えりのぼいす？
            $('#jin').fadeOut(300)
            // jin.style.display = "block"
            // tit.style.display ="none";
            
        
            setQuestion();

        },4000);

    },2000);
}





function setQuestion(){

if(correct >= 5){
    // setTimeout(function(){
        omedetougozaimasu();

    // },4010);
    return;

    }else{

       

    }


bgmPause();
monmon();

console.log(Qcnt);

$A.style.visibility ="visible";
$A2.style.visibility ="visible";
$A3.style.visibility ="visible";
$A4.style.visibility ="visible";


$A.style.display ="none";
$A2.style.display ="none";
$A3.style.display ="none";
$A4.style.display ="none";

setTimeout(function(){
dondon();
$A.style.display ="block";
setTimeout(function(){
    dondon();
    $A2.style.display ="block";
    setTimeout(function(){
        dondon();
    $A3.style.display ="block";
        setTimeout(function(){
            dondon();
        $A4.style.display ="block";


},3500);
},3500);
},3500);
},4000);


que.style.display = "block"; 
lif.style.display ="block";
tit.style.display ="none";


}



//-----------------------------------------





















var DQuestion = [
["現在一般的に普及しているスマホの代表的なOSといえば「Android」ともうひとつはなに？","・AOs","・sOS","・iOS","・COS","・iOS"],
    ["docomoが新しく発表したブランド名は？","adamo","ahamo","asimo","asobo","ahamo"],
    ["スマホのGALAXYはサムスン製、PixelはGoogle製、iPhoneはApple製。ではXpariaは何製？","シャープ","京セラ","富士通","ソニー","ソニー"],
    ["スマホで代表的なSNSアプリといえば「LINE」「FaceBook」「Twitter」あとひとつはなに？","・imstagram","・instagrom","・instagram","・inspagram","・instagram"],
    ["この中でd払いができないお店はどれ？","ミスタードーナツ","モスバーガー","すき家","マクドナルド","マクドナルド"],
    ["iphoneシリーズ最新作「iphone12Pro」の画面のサイズはいくつ？","・6インチ","・6.1インチ","・6.2インチ","・6.3インチ","・6.1インチ"],
    ["docomoのキャラクターのひとり〇〇マル。その種類はライオンですが、〇〇に入る名前は？","ライマル","アニマル","ドニマル","ネコマル","ドニマル"],
    ["現在のdocomoショップ数はいくつ？","約1000","約2000","約3000","約4000","約2000"]

];

var AQuestion = [
    ["スマホのPixelはGoogle製、Xpariaはソニー製、iPhoneはApple製。ではGALAXYは何製？","・シャープ","・京セラ","・富士通","・サムスン","・サムスン"],
    ["auのマスコットキャラの三太郎は桃太郎・浦島太郎・あとひとつは何太郎？","金太郎","小太郎","Q太郎","一太郎","金太郎"],
    ["auのCMでかぐや姫を演じている俳優は誰？","菜々緒","浜辺美波","広瀬すず","有村架純","有村架純"],
    ["1月15日より放送されている新CM。新しく加わったキャラクターは何？","一寸帽子","花さかじいさん","一休さん","雪女","一休さん"],
    ["auの新しく発表した新プランは「データMax with ●●●●」？","Netflix","AmazonPrime","Hulu","Tver","AmazonPrime"],
    ["auのワイド学割は何才までOK？","22才","26才","29才","40才","29才"],
    ["現在人気のiPhoneシリーズ。その初代iPhoneが発表されたのは何年？","２００３年","２００５年","２００７年","２０１０年","２００７年"],
    ["iphoneシリーズ最新作「iphone12Pro」の画面のサイズはいくつ？","6インチ","6.1インチ","6.2インチ","6.3インチ","6.1インチ"]
    


];



var SQuestion = [
["ソフトバンク光のキャラクターはとあるポケモンですが、その名前はなに？","ピチュー","ピカチュウ","ライチュウ","チュウチュウ","ピカチュウ"],
    ["GooglePixel4a(5G)を独占販売しているキャリアはどこ？","docomo","au","softbank","楽天","softbank"],
    ["ソフトバンクのオンライン専用の新ブランドといえば「SoftBank on ●●●●」？","FaceBook","LINE","instagram","twitter","LINE"],
    ["スマホのGALAXYはサムスン製、Xpariaはソニー製、iPhoneはApple製。ではPixelは何製？","シャープ","京セラ","富士通","Google","Google"],
    ["ソフトバンクのお父さんの犬種は？","柴犬","秋田犬","北海道犬","土佐犬","北海道犬"],
    ["ソフトバンクで最近CMでも謳っている「5Gって〇〇〇〇〇？」〇に入る文字を答えよ","しんちゃん","攻殻機動隊","ドラえもん","テクノロジー","ドラえもん"],
    ["ソフトバンクのお父さんは現在何代目？","初代","二代目","三代目","四代目","二代目"],
    ["ソフトバンクのCMでおなじみのドラえもん。この中でスネ夫を演じているのは誰","古市和寿","古市一寿","古市規寿","古市憲寿","古市憲寿"]
    

];

var UQuestion = [
    
["スマホで代表的なSNSアプリといえば「LINE」「FaceBook」「Twitter」あとひとつはなに？","imstagram","instagrom","instagram","inspagram","instagram"],
    ["UQのポケットWi-Fiのブランド名は？","UQWiMAX","UQMAXPOWER","UQHiMAX","UQMAX","UQWiMAX"],
    ["現在人気のiPhoneSeシリーズ。現在出ている機種は何世代目？","第一世代","第二世代","第三世代","第四世代","第二世代"],
    ["UQの新プランの名前はなに？","UQプラン","Uプラン","くりあげプラン","くりこしプラン","くりこしプラン"],
    ["スマホのPixelはGoogle製、Xpariaはソニー製、iPhoneはApple製。ではGALAXYは何製？","シャープ","京セラ","富士通","サムスン","サムスン"],
    ["UQのキャラクター、ブルーガチャムクの出身地はどこ？","ブルーテラ","ブループラネット","ブルースター","ブルーコスモ","ブループラネット"],
    ["iphoneシリーズ最新作「iphone12Pro」の画面のサイズはいくつ？","6インチ","6.1インチ","6.2インチ","6.3インチ","6.1インチ"],
    ["UQモバイルのショップ数はいくつ？","約80","約180","約280","約380","約280"]
];

var YQuestion = [
    ["YモバイルのAndroidシリーズの代表格といえば何シリーズ？","androidone","androidtwo","androidthree","androidfour","androidone"],
    ["スマホのGALAXYはサムスン製、Xpariaはソニー製、iPhoneはApple製。ではPixelは何製？","・シャープ","・京セラ","・富士通","・Google","・Google"],
    ["Yモバイルが新しく発表したプランの名前は？","ベーシックプラン","スマホプラン","Yプラン","シンプルプラン","シンプルプラン"],
    ["Yモバイル公式マスコットキャラクターの名前はなに？","ふてにゃん","ぶてにゃん","ぐてにゃん","ぷてにゃん","ふてにゃん"],    
    ["現在人気のiPhoneシリーズ。その初代iPhoneが発表されたのは何年？","2003年","2005年","2007年","2010年","2007年"],
    ["Yモバイルのキャラクター。ふてにゃんの猫種は何？","マンチカン","ペルシャ","ラグドール","スコティッシュフォールド","スコティッシュフォールド"],
    ["Yモバイルのショップ数はいくつ？","約200","約600","約900","約1500","約900"]
];



var $Q = document.getElementById("mondai");
var $A = document.getElementById("kaitou");
var $A2 = document.getElementById("kaitou2");
var $A3 = document.getElementById("kaitou3");
var $A4 = document.getElementById("kaitou4");

// function aaa(){

//     console.log("成功")
// }

function fiftyfifty() {
    fade();
    choise();

    setTimeout(function(){
        
        eriFiftyfifty();
    },1000);
    setTimeout(function(e){
        hidden();
        const array = [$A,$A2,$A3,$A4]
        const barray = [];
        for(var i = 0;i<array.length;i++){
    console.log(DQuestion[Qcnt][5]);
           
            if(array[i].innerText===DQuestion[Qcnt][5]||array[i].innerText===AQuestion[Qcnt][5]||array[i].innerText===SQuestion[Qcnt][5]||array[i].innerText===UQuestion[Qcnt][5]||array[i].innerText===YQuestion[Qcnt][5]){
                console.log(array[i])
            }else{
                barray.push(array[i]);
            }

        }
        
       console.log(barray[0]);
       console.log(barray[1]);
       console.log(barray[2]);

       const copy = barray.slice();
       const selected = [...Array(2)].map(() => copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
       console.log(selected[0]);
       console.log(selected[1]);


     selected[0].style.visibility = "hidden";
     selected[1].style.visibility = "hidden";
        

     $(fif).css("opacity","0.1");


    },2000);


}



var Qcnt = Math.floor( Math.random() *3);

var rondoms = [];
var correct = 0




function omedetougozaimasu(){

            $(body).css({
                "background-image": "url(img/kaminosyukuhuku.jpg)",
                "width": "100vw",
            "height": "100vh",
            "background-repeat":"repeat",
                "background-size":"100% 100%",
                "transition-duration":"2s"
            });
            que.style.display = "none";
            lif.style.display ="none";
            ome.style.display = "block";
            $(ome).addClass("animate__animated animate__delay-2s animate__fadeIn");
            mon.pause();

            $(tic).addClass("animate__animated animate__delay-2s animate__fadeIn animate__slower");
            tic.style.display ="block";

            setTimeout(function(){
                kirakira();
                $(fuk).addClass("animate__animated animate__delay-2s animate__fadeInDown animate__slower");
                fuk.style.display ="block"; 

            },3000);
            
            player++




}


function zannendesita() {

    que.style.display ="none";
                    lif.style.display ="none";
                    zan.style.display ="block";


    $(body).css({
                "background-image": "url(img/gaaan.jpg)",
                "width": "100vw",
            "height": "100vh",
            "background-repeat":"repeat",
                "background-size":"100% 100%",
                "transition-duration":"2s"
            });





}

function sippai() {
                   


        hidden();
        mon.pause();

        const array = [$A,$A2,$A3,$A4]
        const barray = [];
        for(var i = 0;i<array.length;i++){
           
            if(array[i].innerText===DQuestion[Qcnt][5]||array[i].innerText===AQuestion[Qcnt][5]||array[i].innerText===SQuestion[Qcnt][5]||array[i].innerText===UQuestion[Qcnt][5]||array[i].innerText===YQuestion[Qcnt][5]){
                console.log(array[i])
            }else{
                barray.push(array[i]);
            }

        } 
        console.log(barray[0])
        console.log(barray[1])
        console.log(barray[2])

        var zero  = barray[0].getAttribute("id");
        console.log(zero);
        var zero1 = document.getElementById(zero);
        $(zero1).addClass("animate__animated  animate__hinge animate__slow" );

        var one  = barray[1].getAttribute("id");
        console.log(one);
        var one1 = document.getElementById(one);
        $(one1).addClass("animate__animated  animate__hinge animate__slow" );

        var two  = barray[2].getAttribute("id");
        console.log(two);
        var two1 = document.getElementById(two);
        $(two1).addClass("animate__animated  animate__hinge animate__slow" );

   
    
}



// document.getElementsByClassName(".frame").onclick = function() {
//     qSet();
//     console.log("成功")
// };

//正誤判定

$A.addEventListener('click',(e) =>{
    console.log(e);
    clickHandler(e);
});

$A2.addEventListener('click',(e) =>{
    clickHandler(e);
});

$A3.addEventListener('click',(e) =>{
    clickHandler(e);
});

$A4.addEventListener('click',(e) =>{
    clickHandler(e);
});


const clickHandler = (e) =>{
    // if(e.target.innerText === DQuestion[Qcnt][5]||e.target.innerText === AQuestion[Qcnt][5]||e.target.innerText === SQuestion[Qcnt][5]||e.target.innerText === UQuestion[Qcnt][5]||e.target.innerText === YQuestion[Qcnt][5]) {
        fade();
        choise();



    switch (e.target.innerText) {
                case DQuestion[Qcnt][5]:
                Qcnt++
                correct++
                ma();
                setTimeout(function(){
                    pinpon();
                    setTimeout(function(){
                        $Q.textContent = DQuestion[Qcnt][0];
                        $A.textContent= DQuestion[Qcnt][1];
                        $A2.textContent= DQuestion[Qcnt][2];
                        $A3.textContent= DQuestion[Qcnt][3];
                        $A4.textContent= DQuestion[Qcnt][4];
                        setQuestion();
                        hidden();
                        maruH();

                        

                    },2000);
                },2000);
                    
                
                    
                    break;

                case AQuestion[Qcnt][5]:
                Qcnt++
                correct++
                ma();
                setTimeout(function(){
                    pinpon();
                    setTimeout(function(){
                        $Q.textContent = AQuestion[Qcnt][0];
                        $A.textContent= AQuestion[Qcnt][1];
                        $A2.textContent= AQuestion[Qcnt][2];
                        $A3.textContent= AQuestion[Qcnt][3];
                        $A4.textContent= AQuestion[Qcnt][4];
                        setQuestion();
                        hidden();
                        maruH();
                        

                    },2000);
                },2000);
                    break;

                case SQuestion[Qcnt][5]:
                Qcnt++
                correct++
                ma();
                setTimeout(function(){
                    pinpon();
                    setTimeout(function(){
                        $Q.textContent = SQuestion[Qcnt][0];
                        $A.textContent= SQuestion[Qcnt][1];
                        $A2.textContent= SQuestion[Qcnt][2];
                        $A3.textContent= SQuestion[Qcnt][3];
                        $A4.textContent= SQuestion[Qcnt][4];
                        setQuestion();
                        hidden();
                        maruH();
                        

                    },2000);
                },2000);
                    break;

                case UQuestion[Qcnt][5]:
                Qcnt++
                correct++
                ma();
                setTimeout(function(){
                    pinpon();
                    setTimeout(function(){
                        $Q.textContent = UQuestion[Qcnt][0];
                        $A.textContent= UQuestion[Qcnt][1];
                        $A2.textContent= UQuestion[Qcnt][2];
                        $A3.textContent= UQuestion[Qcnt][3];
                        $A4.textContent= UQuestion[Qcnt][4];
                        setQuestion();
                        hidden();
                        maruH();
                        

                    },2000);
                },2000);
                    break;

                case YQuestion[Qcnt][5]:
                Qcnt++
                correct++
                ma();
                setTimeout(function(){
                    pinpon();
                    setTimeout(function(){
                        $Q.textContent = YQuestion[Qcnt][0];
                        $A.textContent= YQuestion[Qcnt][1];
                        $A2.textContent= YQuestion[Qcnt][2];
                        $A3.textContent= YQuestion[Qcnt][3];
                        $A4.textContent= YQuestion[Qcnt][4];
                        setQuestion();
                        hidden();
                        maruH();
                        

                    },2000);
                },2000);
                    break;
            
                default:
                    //はずれるやつ

                setTimeout(function(){
                    sippai();
                    setTimeout(function(){
                    
                    zannendesita();
                    
                },5000);
                },2000);
                    break;
            }






}











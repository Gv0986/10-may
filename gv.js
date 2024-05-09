const text =
" Sooooooooooo...... like mam it's 10th of may ........😚😚.......iske aage batane ki he kya jarurat .....ki Humne aaj saath me 3 months guzaar diye ....like aachi jaa rahi hai zindagi...chahere pe likhte huve ek jung jitne wali muskan hai .... feeling soo soo happy 😁....i love you....i love you teddy 🧸..i love you bache 😚....i love you more and more and more.....like kafi aacha feel ho raha hai ....bina jhagda kiye mast se 3 mahine ho gaye ...aapko kalesh karne ka chance he nahi diya 🙃....vaise haa thode se misunderstanding ho rahi thi bich bich me 😅 but still sorry mam ...for all that ...hope soo aab vaisa kuch na ho ....vaise I'm na mam ... super super excited ki aaj hum mil bhi rahe hai or aaj he humara one of the special day bhi hai ...🤗...bache aaj na mai aapko milke bhout bhout bhout sara pyar karunga....😶‍🌫️ jitna huk hai na sub ...yr word he nahi mil raha ☹️...jaane doo vaise like thode up's and down's feel hone lage the bich me but na yrr like ignore all that ....hum sirf pyar karenge sirf or sirf pyar karenge ....vaise it's been 90 days of togetherness 🎀😚....din bhale he kum huve hai but yrr aisa feel hota hai ki kitne saal ho rahe hai aapke sath...hum aese he decades jiyenge mam saath me ....vaise yrr mam like khud pe he vishwas nahi ho raha ki 3 months o gaye hai aapke sath ...or mai ek he jaghe tika huva hu .....voh mai aapko kaheta hu na mam hamesha ki kahi aapko pyar toh nahi ho gaya ...yr lagta hai mujhe bhi ho gaya 🫣🤭....you know mam like Tum aur mai kuch bhi nhi siwaay iske tum baarish tum saawan mai pavitra tum paawan tum gulaab tum phool mai maati mai dhul mai awaara mai paagal tum aankho kaa kaazal tum pana tum khona mai chota sa bacha tum chhota sa khilauna mai tera kandha Tu kandhe ka til mai sukha sa jism Tu jinda sa dil mujhko jo aake sardi si raaton me jhaado ke niche jo aake jo mil dekhu tumhari aankho me kahu kuch bhi nhi sahi toh kaha maine tum aur mai kuch bhi nhi "
const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();

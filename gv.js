const text =
" Read in soft and slow tone ....Hello bache... 😚 ... it's 11 11 and aaj mai kuch toh jada mangunga he 😁😁... ofcourse kal hum Milne wale hai ...😚...kuch  toh extra chahiye he wish me ....vaise agar aab tak aapke mun me aa gaya hai ki mai kya mangna chah raha hu toh shayad aap galat ho ...😅.....mai toh Bache ki baat kar raha tha aapne procedure socha toh usme meri ...kya galti.... don't worry mam 😊 i know my limits very well...mujhe koi  ghai nahi aapke sath....jaise mera teddy kahega vaise he hoga ....i love you bache 😚💕...koi bhi galti karke aapko khona nahi chahta...yrr like pyar bhout karta hu but khone se 🥺 bhi darta hu .... Bache mere saath hamesha rahena yrr .... you're totally completing me ❤️‍🩹...yrr sachi sachi kahu na toh mam like jubse aap aaye ho na  life me voh ek akelapan sa mit gaya hai 😊... it's that ki mam voh loneliness nahi feel hoti mai itna hasta hu masti karta hu ...ghumna firna sub ...but yrr khudko andar se akela mehsoos karta tha ...itne friends close friends ...even ladkiya...koi yeh kami puri nahi kar paya mam .... it's like ki connection nahi jud raha tha yrr 😁...sub mila unse but dil se dil ka rasta na mila ...aap aaye humne aankhe bund kar chalna shuru kar diya ... manzil aap ho rasta bhi apka  mujhe bharosa hai  mere bache pe mujhe galat raah kabhi nahi jane dega ....💜... it's like mam mai dard banu tum humdard banogi kya ... mai sardi ka dhoop ..tum sard banogi kya .. ...meri tumhi dava tumhi marz banogi kya .. meri laxmi bhi  or karz banogi kya ..  tum bus chaho mujhe khud garz banogi kya .. 🫣...tum ashiqui..tum dil nashi ..tum khwab si ..tum hum nashi ...tumhe chahna mera farz bane mai dhun banu tum tarz banogi kya .. ..ki aab tumhare bare me kya bolna...!!!!!! Mai dard banu tum humdard banogi kya ......... tumhare liye sochna mera sabse bada kaam tum aaram banogi kya....mera pyar meri jaan banogi kya mere chote se dil ki permanent mehman banogi kya galtiyan bhout karta hu mere sudharne ka reason banogi kya jisse zindagi bhar padhna chahu voh division banogi kya ...mai nature bana chahu mera season banogi kya ....aab jada nahi likhunga kyunki message aa chuka hai reply nahi  diya toh gusse ka reason bun jaunga  ..jo ki mujhe nahi banna ....so like mai toh chala apna yeh kaam adhura chodke meri manzil ki orr baki itna padh liya... chahere pe smile  thi matlab meri baatein  bich me 😅 pasand aai thi ... chalo aab pyar k 3 lafz kahe bhi doo itna tadapate ho  thoda sahe bhi doo ....vaise at last mai wish karunga he mam ki khudko mere naam thoda sa or likh doooo......baki second wish bolne me maja nahi hai 😁😁 "
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

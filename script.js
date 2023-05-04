// Declare your genre arrays here
let comedy = ["https://m.media-amazon.com/images/M/MV5BMjA0ODYwNzU5Nl5BMl5BanBnXkFtZTcwNTI1MTgxMw@@._V1_.jpg","https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51QiBjDIVrL._AC_UF894,1000_QL80_.jpg","https://m.media-amazon.com/images/M/MV5BMTQ2NDM1MTUzN15BMl5BanBnXkFtZTgwNTgxMTEwNzE@._V1_.jpg"];
console.log(comedy);

let terror = ["https://play-lh.googleusercontent.com/RF07zIkHRZN5voAi0RKseHYRNALAb8ZbxTH61DkiOyAuJGi0CJ_TgFMxYFOBSkUaUhVn=w240-h480-rw","https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_FMjpg_UX1000_.jpg","https://m.media-amazon.com/images/M/MV5BMmZlOGZkMjMtZDc4Ny00ZTQ1LWFmYTQtOThlY2JjYjg1NGQyXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg"];
console.log(terror);
let bestTerror = terror[1];
console.log(bestTerror);
let actions = ["https://upload.wikimedia.org/wikipedia/en/6/66/Transformers07.jpg","https://www.tvguide.com/a/img/catalog/provider/1/2/1-8885583834.jpg","https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_FMjpg_UX1000_.jpg"];
 let result = document.querySelector(".result");
// Submit Button

let submitButton = document.querySelector(".Submit");
// add a variable that selects the suggest button
let suggestButton= document.querySelector(".suggest");

submitButton.onclick= function(){
    let input= document.querySelector(".movieGener").value;
    
     if (input ==="comedy"|| input ==="Comedy"){
         
        for (let comedyMovie of comedy) {
            console.log(comedyMovie);
            result.insertAdjacentHTML("beforebegin","<img src="+ comedyMovie + ">");
        }
     }
        
      if (input === "terror") {
        for (let terrormovie of terror) {
            let img = "<img src=" + terrormovie + ">";
            result.insertAdjacentHTML("beforebegin", img);
        }
    } else if (input === "actions") {
        for (let actionmovie of actions) {
            let img = "<img src=" + actionmovie + ">";
            result.insertAdjacentHTML("beforebegin", img);
        }
    }
};

suggestButton.onclick = function(){
    let photoName = document.querySelector(".input2").value;
comedy.push(photoName);    
let img = "<img src=" + photoName + ">";
result.insertAdjacentHTML("beforeend",img);

  
};
let imageUrls= document.querySelector(".input1");
let addButton = document.querySelector(".suggest");
addButton.onclick = function(){
let photoName=document.querySelector(".input2").value;
comedy.push(photoName);    
let img = "<img src=" + photoName + ">";
result.insertAdjacentHTML("beforeend",img);
};



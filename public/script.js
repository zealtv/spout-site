console.log("hi");

var icons = [

  {  
    "url": "https://resolume.com",
    "img": "resolume.png"
  },

  {
    "url": "https://cycling74.com",
    "img": "max.png"
  },

  {
    "url": "https://processing.org",
    "img": "processing.png"
  }

];

// var icons = JSON.parse(json);
// console.log(icons);

document.body.onload = addFriend;

function addFriend () {


  icons.forEach(function(icon){
    console.log(icon.img);
    var friend = document.createElement("div");
    friend.className = "friend";
    
    var img = document.createElement("img");
    img.src = "images/icons/" + icon.img;
    img.style.maxHeight = "60px";
    img.style.maxWidth = "60px";

    var link = document.createElement("a");
    link.href = icon.url;    

    link.appendChild(img);
    friend.appendChild(link);

    var friendsDiv = document.getElementById("friends").appendChild(friend);
    // console.log(friendsDiv);

  });

  // for(i=0; i< 100; i++){
  //   var newDiv = document.createElement("div");
  //   newDiv.className = "friend";
  //   // var newContent = document.createTextNode("i am div");
  //   // newDiv.appendChild(newContent);
  
  //   var friendsDiv = document.getElementById("friends").appendChild(newDiv);
  //   // console.log(friendsDiv);
  // }



}

// var img = document.createElement("img");
// img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
// var src = document.getElementById("header");
// src.appendChild(img);
var icons = [
  // {  
  //   "url": "https://vizzable.zeal.co",
  //   "img": "vizzable.png"
  // },

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

document.body.onload = addFriend;

function addFriend () {
  icons.forEach(function(icon){
    
    // console.log(icon.img);

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

  });
}


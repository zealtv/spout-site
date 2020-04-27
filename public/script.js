// var icons = [
//   // {
//   //   "url": "https://vizzable.zeal.co",
//   //   "img": "vizzable.png"
//   // },

//   {
//     "url": "https://resolume.com",
//     "img": "resolume.png"
//   },

//   {
//     "url": "https://cycling74.com",
//     "img": "max.png"
//   },

//   {
//     "url": "https://processing.org",
//     "img": "processing.png"
//   }

// ];

document.body.onload = addFriends;

function addFriends() {
	//add icons
	icons.forEach(function(icon) {
		// console.log(icon.img);

		var friend = document.createElement('div');
		friend.className = 'friend';

		var img = document.createElement('img');
		img.src = 'images/icons/' + icon.img;
		img.style.maxHeight = '60px';
		img.style.maxWidth = '60px';

		var link = document.createElement('a');
		link.href = icon.url;

		link.appendChild(img);
		friend.appendChild(link);

		var friendsDiv = document.getElementById('friends').appendChild(friend);
	});

  //add supporters
  var supportersDiv = document.getElementById('supporters');

	supporters.forEach(function(supporter) {
		console.log(supporter.name);

		var supporter = document.createTextNode(supporter.name + ' \u00A0\u00A0');

		// var img = document.createElement('img');
		// img.src = 'images/icons/' + icon.img;
		// img.style.maxHeight = '60px';
		// img.style.maxWidth = '60px';

		var link = document.createElement('a');
		link.href = supporter.url;

		link.appendChild(supporter);
		// friend.appendChild(link);

		supportersDiv.appendChild(link);
	});
}

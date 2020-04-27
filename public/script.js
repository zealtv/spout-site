//Adds logos and supporter shout-outs
document.body.onload = addFriends;

function addFriends() {
	//add icons
	icons.forEach(function(icon) {

		var img = document.createElement('img');
		img.src = 'images/icons/' + icon.img;
		img.style.maxHeight = '60px';
		img.style.maxWidth = '60px';

		var link = document.createElement('a');
    link.href = icon.url;
    link.appendChild(img);
    
    var friend = document.createElement('div');
		friend.className = 'friend';
		friend.appendChild(link);

    document.getElementById('friends').appendChild(friend);
    
	});

	//add supporters
	supporters.forEach(function(supporter) {

  	var supporterText = document.createTextNode(supporter.name + ' \u00A0\u00A0');
    
    var link = document.createElement('a');
		link.href = supporter.url;
    link.appendChild(supporterText);
  
    document.getElementById('supporters').appendChild(link);  

	});
}

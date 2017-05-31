var butt = document.getElementsByClassName('buttony');
for (var i = 0 ; i < butt.length; i++ ) {
	var message = '';
	message += butt[i].innerText;
	alert(message);
}

var cards  = ["images_2/ginnsyari.jpg",
"images_2/mirukubo-i.jpg",
"images_2/torendelienjyeru.jpg",
"images_2/tyu-toriaru.jpg",
"images_2/nisikigoi.jpg",
"images_2/sandoittimann.jpg",
"images_2/baikinngu.jpg",
"images_2/somohurimyoujyou.jpg",
"images_2/waraimesi.jpg"];


var text = "";
for (var i = 0; i < cards.length; i++) {
imgID = String(i);
if (i%16==0) {
text += '<img src="images/omote_m1_.jpg" id=' + imgID + ' class="clear" onclick="changeImg(this.id)">';
}else {
text += '<img src="images/omote_m1_.jpg" id=' + imgID + ' onclick="changeImg(this.id)">';
}
}




document.getElementById("table").innerHTML = text;


function changeImg(id){

var index = Number(id);

document.getElementById(id).src = cards[index];
}
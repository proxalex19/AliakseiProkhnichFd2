"use strict";

var imgs = document.getElementsByTagName('img');
var zIndex = 1;

for (var i = 0; i<imgs.length; i++){
	imgs[i].addEventListener('mousedown', moveByMousedown, false);
}


function moveByMousedown(EO) {
	EO = EO || window.event;
	
	if (EO.which == '1') {
		var img = EO.target;
		var posImg = getElemPosition(img)
		var imgClickX = Math.round(EO.pageX - posImg.left);
		var imgClickY = Math.round(EO.pageY - posImg.top);
		img.style.position = 'absolute';
		img.style.zIndex = zIndex;
	}

	document.onmousemove = function (EO) {
		moveAt(EO);
		changeCursor();
		return false;
	}

	function changeCursor() { 
		document.body.style.cursor = 'move';
	}

	function moveAt(EO) {		
		img.style.left = EO.pageX - imgClickX +'px';
		img.style.top = EO.pageY - imgClickY + 'px';
	}
	
	img.onmouseup = function () {		
		document.onmousemove = null;
		document.onmouseup = null;
		document.body.style.cursor = 'default';
		zIndex++;
	 }
}


function getElemPosition(elem) {
	var posImg = elem.getBoundingClientRect();
	return{
		left: posImg.left+window.pageXOffset,
        top: posImg.top+window.pageYOffset
    }
}
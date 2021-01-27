const textboxz = document.querySelectorAll('.textboxz div');


let activeIcon = 0;

const imgels = document.querySelectorAll('.boxwrapper img');
imgels.forEach((imgel, inx)=> imgel.addEventListener('click', function(){ 
	resetHide()
	removeImgActive()
	imgel.classList.add("activeimg");
	textboxz.forEach((txtbox) => textboxz[inx].classList.remove('hidetxt'));

	textboxz.forEach((txtbox) => textboxz[inx].classList.add('showtxt'));

}))


function removeImgActive()
{
	imgels.forEach( imge => imge.classList.remove('activeimg')) 
}



function resetHide() {

	textboxz.forEach((txtbox) => txtbox.classList.add('hidetxt'));
}




// close text box
let closebtn = document.querySelectorAll('.txtp button')
closebtn.forEach(clsbtn => clsbtn.addEventListener('click', () => clsbtn.parentElement.classList.add('hidetxt')))
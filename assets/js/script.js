const burger = document.getElementById('burger');
const nav = document.querySelector('.nav');
const accept = document.getElementById('accept');
const cookie = document.querySelector('.cookieBand');
const custom = document.getElementById('custom');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const contentAccept = document.getElementById('contentAccept');
const adAccept = document.getElementById('adAccept');
const measureAccept = document.getElementById('measureAccept');
const contentRefuse = document.getElementById('contentRefuse');
const adRefuse = document.getElementById('adRefuse');
const measureRefuse = document.getElementById('measureRefuse');

burger.addEventListener('click', () => {
	nav.classList.toggle('show');
});

accept.addEventListener('click', () => {
	cookie.classList.toggle('close');
	swal({
		title: "Merci",
		icon: "success",
	  });
})

custom.addEventListener('click', () => {
	modal.style.display = 'block';
})

modalClose.addEventListener('click', () => {
	modal.style.display = 'none';
})

contentAccept.addEventListener('click', () => {
	if(contentRefuse.classList.contains('modalRefuse')) {
		contentRefuse.classList.toggle('modalRefuse');
	}
	contentAccept.classList.toggle('modalAccept');
})

adAccept.addEventListener('click', () => {
	if(adRefuse.classList.contains('modalRefuse')) {
		adRefuse.classList.toggle('modalRefuse');
	}
	adAccept.classList.toggle('modalAccept');
})

measureAccept.addEventListener('click', () => {
	if(measureRefuse.classList.contains('modalRefuse')) {
		measureRefuse.classList.toggle('modalRefuse');
	}
	measureAccept.classList.toggle('modalAccept');
})

contentRefuse.addEventListener('click', () => {
	if(contentAccept.classList.contains('modalAccept')) {
		contentAccept.classList.toggle('modalAccept');
	}
	contentRefuse.classList.toggle('modalRefuse');
})

adRefuse.addEventListener('click', () => {
	if(adAccept.classList.contains('modalAccept')) {
		adAccept.classList.toggle('modalAccept');
	}
	adRefuse.classList.toggle('modalRefuse');
})

measureRefuse.addEventListener('click', () => {
	if(measureAccept.classList.contains('modalAccept')) {
		measureAccept.classList.toggle('modalAccept');
	}
	measureRefuse.classList.toggle('modalRefuse');
})

ScrollReveal({ reset: true }).reveal('div[id^="land"]:not(#landscape)');
ScrollReveal({ reset: true }).reveal('div[id^=head]');
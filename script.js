// * Suit v1
// const tanya = true;
// while (tanya) {
// 	// statement


// 	// pilihan player
// 	const p = prompt('Pilih: gajah, orang, semut');


// 	// pilihan computer
// 	// membangkitkan bilangan random
// 	let comp = Math.random();
// 	if (comp < 0.34) {
// 		comp = 'gajah';
// 	} else if (comp >= 0.34 && comp < 0.67) {
// 		comp = 'orang';
// 	} else {
// 		comp = 'semut';
// 	}

// 	let hasil = '';
// 	// menentukan rules
// 	if (p == comp) {
// 		hasil = 'Seri';
// 	} else if (p == 'gajah') {
// 		// if (comp == 'orang') {
// 		// 	hasil = 'Menang';
// 		// } else {
// 		// 	hasil = 'Kalah';
// 		// }

// 		hasil = (comp == 'orang') ? 'Menang' : 'Kalah';
// 	} else if (p == 'orang') {
// 		hasil = (comp == 'Gunting') ? 'Kalah' : 'Menang';
// 	} else if (p == 'semut') {
// 		hasil = (comp == 'Kertas') ? 'Kalah' : 'Menang';
// 	} else {
// 		hasil = 'Memasukan pilihan yang salah';
// 	}



// 	// tampilan hasilnya

// 	alert('Kamu Memilih : ' + p + ' dan Komputer Memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);
// 	tanya = confirm('Lagi?');
// }

// alert('Terimakasih')


function getPilihanComp() {
	const comp = Math.random();
	if (comp < 0.34) return 'gajah';
	if (comp >= 0.34 && comp < 0.67) return 'orang';
	return 'semut';
}

function getHasil(comp, player) {
	if (player == comp) return 'Seri';
	if (player == 'gajah') return (comp == 'orang') ? 'Menang' : 'Kalah';
	if (player == 'orang') return (comp == 'gajah') ? 'Kalah' : 'Menang';
	if (player == 'semut') return (comp == 'orang') ? 'Kalah' : 'Menang';
}

// // Gajah
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
// 	const pilihanComputer = getPilihanComp();
// 	const pilihanPlayer = pGajah.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);

// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });

// // orang

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function () {
// 	const pilihanComputer = getPilihanComp();
// 	const pilihanPlayer = pOrang.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);

// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });

// // semut
// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function () {
// 	const pilihanComputer = getPilihanComp();
// 	const pilihanPlayer = pSemut.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);

// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });
function putar() {
	const imgComputer = document.querySelector('.img-komputer');
	const gambar = ['gajah', 'semut','orang'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function () {
		if(new Date().getTime() - waktuMulai > 1000){
			clearInterval;
			return;
		}
		imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
		if(i == gambar.length) i = 0;
	}, 100);
}



const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (i) {
	i.addEventListener('click', function () {
		const pilihanComputer = getPilihanComp();
		const pilihanPlayer = i.className;
		const hasil = getHasil(pilihanComputer, pilihanPlayer);

		putar();
		setTimeout(function () {
			const imgComputer = document.querySelector('.img-komputer');
			imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
	
			const info = document.querySelector('.info');
			info.innerHTML = hasil;			
		}, 1000);

	});
});
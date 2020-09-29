var tanya = true;
while (tanya) {
	// statement


// pilihan player
var p = prompt('Pilih: Gunting, Kertas, Batu');


// pilihan computer
// membangkitkan bilangan random
var comp =  Math.random();
if (comp < 0.34) {
	comp = 'Gunting';
} else if (comp >= 0.34 && comp < 0.67) {
	comp = 'Kertas';
} else {
	comp = 'Batu';
}

var hasil = '';
// menentukan rules
if (p == comp) {
	hasil = 'Seri';
} else if (p == 'Gunting') {
	// if (comp == 'Kertas') {
	// 	hasil = 'Menang';
	// } else {
	// 	hasil = 'Kalah';
	// }

	hasil = ( comp == 'Kertas') ? 'Menang' : 'Kalah';
} else if (p == 'Kertas') {
	hasil = ( comp == 'Gunting') ? 'Kalah' : 'Menang';
} else if (p == 'Batu') {
	hasil = ( comp == 'Kertas') ? 'Kalah' : 'Menang';
} else {
	hasil = 'Memasukan pilihan yang salah';
}



// tampilan hasilnya

alert('Kamu Memilih : ' + p + ' dan Komputer Memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);
tanya = confirm('Lagi?');
}

alert('Terimakasih')
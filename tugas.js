document.write('1.Hasil UTS');
const nama = 'Ani Nur';
document.write('<br>Nama : '+nama);
var niuts = 70;
document.write('<br>Nilai UTS : '+niuts);
var niuas = 70;
document.write('<br>Nilai UAS : '+niuas);
document.write('<br>Rata-rata : '+(niuts+niuas)/2);
let ket;
if ((niuts+niuas)/2 >= 75){
    ket = 'Lulus';
}  
else if((niuts+niuas)/2 >= 50){
    ket = 'Remidi';
} 
else{
    ket = 'tidak lulus';
}
document.write('<br>*Note : Selamat anda '+ket+'!'+'<hr>');
document.write('2.*Data Harga*');
var n  = [20000,40000,65000,80000];
for (var i=0;i<=3;i++){
    document.write('<br>Data Barang-'+i+', Harga = '+n[i])

    if(n[i]>=50000){
        document.write('<br>-----Diskon 5% = '+n[i]*0.05)
    }
}
document.write('<hr>3.Daftar')
let  daftar;
daftar = 'sudah';
let bayar;
bayar = '0';
let info;
document.write('<br>Daftar = '+daftar+
                '<br>Bayar = '+bayar);
switch(daftar&&bayar){
    case ('sudah'&&'1'):
        info = 'silahkan ikut Ospek' 
        break;
    case ('sudah'&&'0'):
        info = 'silahkan bayar terlebih dadulu'   
        break;
    default :
        info = 'silahkan hubungi administrasi'
}
document.write('<br>'+info)
// var daftar = 'belum';
// var bayar = '1';
// document.write('<br>Daftar : '+daftar+'<br>Bayar : '+bayar);
// if (daftar='sudah'&&'1'){
//     document.write('<br>"silahkan ikut Ospek"');
// }
// else if (daftar='sudah'&&'0'){
//     document.write('<br>"silahkan bayar terlebih dahulu"');
// }
// else{
//     document.write('<br>"silahkan hubungi administrasi"');
// }


 




window.onload = myfunction();

function myfunction(){
var date = new Date();
var month = new Date();
var year = new Date();
var tanggal = date.getDate();
var tahun = date.getFullYear();
switch (new Date().getMonth()) {
    case 0:
        month = "Januari";
        break;
    case 1:
        month = "Februari";
        break;
    case 2:
        month = "Maret";
        break;
    case 3:
        month = "April";
        break;
    case 4:
        month = "Mei";
        break;
    case 5:
        month = "Juni";
        break;
    case 6:
        month = "Juli";
        break;
    case 7:
        month = "Agustus";
        break;
    case 8:
        month = "September";
        break;
    case 9:
        month = "Oktober";
        break;
    case 10: 
        month = "November";
        break;
    case 11:
        month = "Desember";
        break;
  }


document.getElementById("output").innerHTML = tanggal + " "+ month + " " + tahun;
}
// Soal No 1 

let pekerjaanIT = ['Software Developer', "Database Administrator", "Hardware Engineer", 
"System Analyst", "Network Architect" ];
 
console.log("Jumlah Pekerjaan IT : " + pekerjaanIT.length);
console.log("Nama Pekerjaan IT : " + pekerjaanIT);

document.getElementById("jumlahPekerjaanIT").innerHTML = pekerjaanIT.length;
document.getElementById("namaPekerjaanIT").innerHTML = pekerjaanIT;

// Soal No 2

let allMember=["Rury, Shella, Dea, Ana, Raiza"];
const team1=allMember.slice(0,2);
const team2=allMember.slice(2,4);

console.log("Tim", team1, team2);

document.getElementById("team1").innerHTML = team1;
document.getElementById("team2").innerHTML = team2;

// Soal No 3

let a = [3,5,7,9,11];
let b = a.map(function(x){
    return x * 5;
});

console.log(b);

document.getElementById("soal3").innerHTML = b;

// Sal No 4

const pelajaran1 = ["Math", "English", "Programming"];
const pelajaran2 = ["Geography", "Spanish", "Programming"];

function CekPelajaran(pelajaran1, pelajaran2) {
    return pelajaran1.some(item => pelajaran2.includes(item))
};

CekPelajaran(pelajaran1,pelajaran2);

document.getElementById("soal4").innerHTML = CekPelajaran(pelajaran1,pelajaran2);

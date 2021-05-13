var sorular = [
    ["Lorem ipsum dolor sit amet.","Ali","Bodur","Cem","Dana"],
    ["Lorem ipsum dolor sit amet lorem morem.","Abi","Baa","Ceee","Dee"],
    ["Lorem ipsum dolor sit amet dürbün elimde değil beynimde.","Aq","Bq","Cq","Dq"],
    ["Lorem ipsum dolor sit amet fuat ayıklar kel başa bitse benimkisi fan.","Az","Bz","Cz","Dz"],
    
];

var cevapAnahtari = ["A","B","C","D"];

function cevapOlustur(array){
    return ` <input type="radio" name="cevap" id="" value="A">${array[1]}
    <input type="radio" name="cevap" id="" value="B">${array[2]}
    <input type="radio" name="cevap" id="" value="C">${array[3]}
    <input type="radio" name="cevap" id="" value="D">${array[4]}`;
}

function puanHesapla(arr1,arr2){
    let puan=0;
    for(let i=0;i<arr1.length;i++){
        if(arr1[i] == arr2[i]){
            puan+=25;
        }
    }
    return puan;

}

const basla = document.querySelector('.basla');
const form = document.querySelector('.bilmece');
const soru = document.querySelector('.soru');
const siklar = document.querySelector('.siklar');


const container = document.querySelector('.container');
basla.addEventListener("click",e=>{
    basla.style.display = "none";
    soru.innerHTML=`<p>${sorular[0][0]}</p>`;
    siklar.innerHTML= cevapOlustur(sorular[0]);
    form.style.display="flex";
});

const sonraki = document.querySelector('button[name="sonraki"]');
const bitir = document.querySelector('.bitir');
let i=1;
let cevaplar=[];
sonraki.addEventListener("click",e=>{

    cevaplar.push(document.querySelector('input[name="cevap"]:checked').value);
    console.log(cevaplar);
    soru.innerHTML=`<p>${sorular[i][0]}</p>`;
    siklar.innerHTML= cevapOlustur(sorular[i]);
    if(sorular.length == (i+1)){
        sonraki.style.display="none";
        bitir.style.display="block";
    }
    i++;
    e.preventDefault();
});



form.addEventListener('submit',e=>{
    cevaplar.push(document.querySelector('input[name="cevap"]:checked').value);
    console.log(cevaplar);
    e.preventDefault();
    let puan  = puanHesapla(cevaplar,cevapAnahtari);
    container.innerHTML = `<h2>Sonuç</h2> 
    <h3>Toplam ${puan} aldınız </h3>
    `;
});

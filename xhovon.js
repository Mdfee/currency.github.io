const taka = document.getElementById('taka');
const dollar = document.getElementById('dollar');
const euro = document.getElementById('euro');
const pound = document.getElementById('pound');
const rupee = document.getElementById('rupee');

euro.addEventListener('input' , function(){
    const eur = parseInt(euro.value);
    dollar.value = 1.19*eur;
    taka.value = 101.03*eur;
    pound.value = 0.86*eur;
    rupee.value = 88.37*eur;
})

taka.addEventListener('input' , function(){
    const tk = parseInt(taka.value);
    dollar.value = 0.012*tk;
    euro.value = 0.0099*tk;
    pound.value = 0.0085*tk;
    rupee.value = 0.88*tk;
})

dollar.addEventListener('input' , function(){
    const dol = parseInt(dollar.value);
    taka.value = 84.80*dol;
    euro.value = 0.84*dol;
    pound.value = 0.72*dol;
    rupee.value = 74.18*dol;
})

pound.addEventListener('input' , function(){
    const pou = parseInt(pound.value);
    dollar.value = 1.39*pou;
    euro.value = 1.17*pou;
    taka.value = 118.16*pou;
    rupee.value = 103.35*pou;
})

rupee.addEventListener('input' , function(){
    const rup = parseInt(rupee.value);
    dollar.value = 0.013*rup;
    euro.value = 0.011*rup;
    pound.value = 0.0097*rup;
    taka.value = 1.14*rup;
})
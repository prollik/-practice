
// frame20
/*ДАТА*/
$(function() {

    $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });

    $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });

    $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });

});


/*ГОРОД, выпадение списка+стрелочка*/
function f3() {
    var y = document.getElementById('spisUl');
    var img = document.getElementById('img');
    var filter = document.getElementById('filter');
    filter.style.display = 'block';
    y.style.display = 'block';

    if (y.style.display === 'block') {
        img.style.transform = 'rotate(180deg)';
    }}

/*ГОРОД, скрытые списка по клику пустого места*/
function filt() {
    filter.style.display = 'none';
    var y=document.getElementById('spisUl');

    y.style.display= 'none';

    if (y.style.display==='none'){
        img.style.transform = 'rotate(0deg)';
    }}

// ГОРОД, отображение в инпут
var out=document.getElementById('out');
var check =document.getElementsByClassName('checkbox__input');
var e='';


for (p=0; p<check.length; p++) {
    var e = check[p];
    console.log(e);
    e.onchange = сonclusion;

}
    function сonclusion() {
    console.log(this.value);
        if (this.checked === true) {
            out.innerHTML += this.value +', ' ;
        } else {
            console.log('2');
        }

    }



/*ТИП, выпадение списка+стрелочка*/
function f4() {
    var y1 = document.getElementById('spisUlt');
    var img1 = document.getElementById('img1');
    var filter1 = document.getElementById('filter1');
    filter1.style.display = 'block';
    y1.style.display = 'block';


    if (y1.style.display === 'block') {
        img1.style.transform = 'rotate(180deg)';
    }}

// ТИП, отображение в инпут
var out1=document.getElementById('out1');
var ali1 = document.getElementsByClassName('aLi1');
// console.log(ali1);
var z = "";

for(var i =0; i<ali1.length; i++){
    var z = ali1[i];
    // console.log(z);

    z.addEventListener('click', сonclusion1);
    function сonclusion1(){

        out1.innerHTML = this.innerHTML;
    }
}




/*ТИП, скрытие списка по клику пустого места*/
function filt1() {
    filter1.style.display = 'none';
    var y1=document.getElementById('spisUlt');

    y1.style.display= 'none';

    if (y1.style.display==='none'){
        img1.style.transform = 'rotate(0deg)';
    }}





/*СТАТУС, выпадение списка+стрелочка*/
function f5() {
    var y2 = document.getElementById('spisUlst');
    var img2 = document.getElementById('img2');
    var filter2 = document.getElementById('filter2');
    filter2.style.display = 'block';
    y2.style.display = 'block';

    if (y2.style.display === 'block') {
        img2.style.transform = 'rotate(180deg)';
    }}

/*СТАТУС, скрытие списка по клику пустого места*/
function filt2() {
    filter2.style.display = 'none';
    var y2=document.getElementById('spisUlst');

    y2.style.display= 'none';

    if (y2.style.display==='none'){
        img2.style.transform = 'rotate(0deg)';
    }}

// СТАТУС, отображение в инпут
var out2=document.getElementById('out2');
var ali2 = document.getElementsByClassName('aLi2');
// console.log(ali1);
var r = "";

for(var t =0; t<ali1.length; t++){
    var r = ali2[t];
    // console.log(r);

    r.addEventListener('click', сonclusion2);
    function сonclusion2(){

        out2.innerHTML = this.innerHTML;
    }
}

// frame23

/*ГОРОД, выпадение списка+стрелочка*/
function f6() {
    var spisUlС = document.getElementById('spisUlС');
    var img23C = document.getElementById('img23C');
    var idfilt23City = document.getElementById('idfilt23City');
    idfilt23City.style.display = 'block';
    spisUlС.style.display = 'block';

    if (spisUlС.style.display === 'block') {
        img23C.style.transform = 'rotate(180deg)';
    }}

// ГОРОД, отображение в инпут
var out23City=document.getElementById('out23City');
var liC23 = document.getElementsByClassName('liC23');
var z23 = "";

for(var i23 =0; i23<liC23.length; i23++){
    var z23 = liC23[i23];
    // console.log(z);

    z23.addEventListener('click', сonclusionC);
    function сonclusionC(){

        out23City.innerHTML = this.innerHTML;
    }
}


/*ГОРОД, скрытие списка по клику пустого места*/
function filt23City() {
    idfilt23City.style.display = 'none';
    var spisUlС=document.getElementById('spisUlС');

    spisUlС.style.display= 'none';

    if (spisUlС.style.display==='none'){
        img23C.style.transform = 'rotate(0deg)';
    }}




/*КЛИНИКА, выпадение списка+стрелочка*/
function f7() {
    var spisUlH = document.getElementById('spisUlH');
    var img23H = document.getElementById('img23H');
    var idfilt23Hospit = document.getElementById('idfilt23Hospit');
    idfilt23Hospit.style.display = 'block';
    spisUlH.style.display = 'block';

    if (spisUlH.style.display === 'block') {
        img23H.style.transform = 'rotate(180deg)';
    }}

// КЛИНИКА, отображение в инпут
var out23Hospit=document.getElementById('out23Hospit');
var liH23 = document.getElementsByClassName('liH23');
// console.log(ali1);
var r23 = "";

for(var t23 =0; t23<liH23.length; t23++){
    var r23 = liH23[t23];
    // console.log(r);

    r23.addEventListener('click', сonclusionH);
    function сonclusionH(){

        out23Hospit.innerHTML = this.innerHTML;
    }
}

/*КЛИНИКА, скрытие списка по клику пустого места*/
function filt23Hospit() {
    idfilt23Hospit.style.display = 'none';
    var spisUlH=document.getElementById('spisUlH');

    spisUlH.style.display= 'none';

    if (spisUlH.style.display==='none'){
        img23H.style.transform = 'rotate(0deg)';
    }}


// ДАТА
$( function() {
    $( "#datepicker" ).datepicker();
} );




/*ВРЕМЯ, выпадение списка+стрелочка*/
function f8() {
    var spisUlT = document.getElementById('spisUl23T');
    var img23T = document.getElementById('img23T');
    var idfilt23Time = document.getElementById('idfilt23Time');
    idfilt23Time.style.display = 'block';
    spisUlT.style.display = 'block';

    if (spisUlT.style.display === 'block') {
        img23T.style.transform = 'rotate(180deg)';
    }}

// ВРЕМЯ, отображение в инпут
var out23Time=document.getElementById('out23Time');
var liT23 = document.getElementsByClassName('liT23');
// console.log(ali1);
var r23T = "";

for(var t23T =0; t23T<liT23.length; t23T++){
    var r23T = liT23[t23T];
    // console.log(r);

    r23T.addEventListener('click', сonclusionT);
    function сonclusionT(){

        out23Time.innerHTML = this.innerHTML;
    }
}

/*ВРЕМЯ, скрытие списка по клику пустого места*/
function filt23Time() {
    idfilt23Time.style.display = 'none';
    var spisUl23T=document.getElementById('spisUl23T');

    spisUl23T.style.display= 'none';

    if (spisUl23T.style.display==='none'){
        img23T.style.transform = 'rotate(0deg)';
    }}





/*ТИП ПРИЕМА, выпадение списка+стрелочка*/
function f9() {
    var spisUlP = document.getElementById('spisUlP');
    var img23P = document.getElementById('img23P');
    var idfilt23priem = document.getElementById('idfilt23priem');
    idfilt23priem.style.display = 'block';
    spisUlP.style.display = 'block';

    if (spisUlP.style.display === 'block') {
        img23P.style.transform = 'rotate(180deg)';
    }}

// ТИП ПРИЕМА, отображение в инпут
var out23Priem=document.getElementById('out23Priem');
var liP23 = document.getElementsByClassName('liP23');
// console.log(ali1);
var r23P = "";

for(var t23P =0; t23P<liP23.length; t23P++){
    var r23P = liP23[t23P];
    // console.log(r);

    r23P.addEventListener('click', сonclusionP);
    function сonclusionP(){

        out23Priem.innerHTML = this.innerHTML;
    }
}

/*ТИП ПРИЕМА-, скрытие списка по клику пустого места*/
function filt23Priem() {
    idfilt23priem.style.display = 'none';
    var spisUlP=document.getElementById('spisUlP');

    spisUlP.style.display= 'none';

    if (spisUlP.style.display==='none'){
        img23P.style.transform = 'rotate(0deg)';
    }}



/*ФИО, выпадение списка+стрелочка*/
function f10() {
    var spisUlF = document.getElementById('spisUlF');
    var img23F = document.getElementById('img23F');
    var idfilt23FIO = document.getElementById('idfilt23FIO');
    idfilt23FIO.style.display = 'block';
    spisUlF.style.display = 'block';

    if (spisUlF.style.display === 'block') {
        img23F.style.transform = 'rotate(180deg)';
    }}

// ФИО, отображение в инпут
var out23FIO=document.getElementById('out23FIO');
var liF23 = document.getElementsByClassName('liF23');
// console.log(ali1);
var r23F = "";

for(var t23F =0; t23F<liF23.length; t23F++){
    var r23F = liF23[t23F];
    // console.log(r);

    r23F.addEventListener('click', сonclusionF);
    function сonclusionF(){

        out23FIO.innerHTML = this.innerHTML;
    }
}

/*ФИО, скрытие списка по клику пустого места*/
function filt23FIO() {
    idfilt23FIO.style.display = 'none';
    var spisUlF=document.getElementById('spisUlF');

    spisUlF.style.display= 'none';

    if (spisUlF.style.display==='none'){
        img23F.style.transform = 'rotate(0deg)';
    }}



    // СОТРИРОВКА. (ФОН FRAME 22/23/24)
/*СОРТИРОВКА, выпадение списка+стрелочка*/
function f11() {
    var spisUlSort = document.getElementById('spisUlSort');
    var imgSort = document.getElementById('imgSort');
    var idfilt23sorting = document.getElementById('idfilt23sorting');
    idfilt23sorting.style.display = 'block';
    spisUlSort.style.display = 'block';

    if (spisUlSort.style.display === 'block') {
        imgSort.style.transform = 'rotate(180deg)';
    }}

// СОРТИРОВКА, отображение в инпут
var outSort=document.getElementById('outSort');
var liSort23 = document.getElementsByClassName('liSort23');
// console.log(ali1);
var r23Sort = "";

for(var tSort23 =0; tSort23<liSort23.length; tSort23++){
    var r23Sort = liSort23[tSort23];
    // console.log(r);

    r23Sort.addEventListener('click', сonclusionSort);
    function сonclusionSort(){

        outSort.innerHTML = this.innerHTML;
    }
}

/*СОРТИРОВКА-, скрытие списка по клику пустого места*/
function filt23Sort() {
    idfilt23sorting.style.display = 'none';
    var spisUlSort=document.getElementById('spisUlSort');

    spisUlSort.style.display= 'none';

    if (spisUlSort.style.display==='none'){
        imgSort.style.transform = 'rotate(0deg)';
    }}



    // fRAME24

/*ПРЧИНА, выпадение списка+стрелочка*/
function f13() {
    var spisUl__Cause = document.getElementById('spisUl__Cause');
    var img24__Cause = document.getElementById('img24__Cause');
    var idfilt24Cause = document.getElementById('idfilt24Cause');
    idfilt24Cause.style.display = 'block';
    spisUl__Cause.style.display = 'block';

    if (spisUl__Cause.style.display === 'block') {
        img24__Cause.style.transform = 'rotate(180deg)';
    }}

// ПРЧИНА, отображение в инпут
var out24__Cause=document.getElementById('out24__Cause');
var liC24 = document.getElementsByClassName('liC24');
// console.log(ali1);
var r24__Cause = "";

for(var t24__Cause =0; t24__Cause<liC24.length; t24__Cause++){
    var r24__Cause = liC24[t24__Cause];
    // console.log(r);

    r24__Cause.addEventListener('click', сonclusion24__Cause);
    function сonclusion24__Cause(){

        out24__Cause.innerHTML = this.innerHTML;
    }
}

/*ПРЧИНА-, скрытие списка по клику пустого места*/
function filt24Cause() {
    idfilt24Cause.style.display = 'none';
    var spisUl__Cause=document.getElementById('spisUl__Cause');

    spisUl__Cause.style.display= 'none';

    if (spisUl__Cause.style.display==='none'){
        img24__Cause.style.transform = 'rotate(0deg)';
    }}

    // ГОРОД

/*ГОРОД, выпадение списка+стрелочка*/
function f14() {
    var spisUl24__Сity = document.getElementById('spisUl24__Сity');
    var img24__City = document.getElementById('img24__City');
    var idfilt24City = document.getElementById('idfilt24City');
    idfilt24City.style.display = 'block';
    spisUl24__Сity.style.display = 'block';

    if (spisUl24__Сity.style.display === 'block') {
        img24__City.style.transform = 'rotate(180deg)';
    }}

// ГОРОД, отображение в инпут
var out24City=document.getElementById('out24City');
var li__City24 = document.getElementsByClassName('li__City24');
var r24__City = "";

for(var i24__City=0; i24__City<li__City24.length; i24__City++){
    var r24__City = li__City24[i24__City];
    // console.log(z);

    r24__City.addEventListener('click', сonclusion24City);
    function сonclusion24City(){

        out24City.innerHTML = this.innerHTML;
    }
}


/*ГОРОД, скрытие списка по клику пустого места*/
function filt24City() {
    idfilt24City.style.display = 'none';
    var spisUl24__Сity=document.getElementById('spisUl24__Сity');

    spisUl24__Сity.style.display= 'none';

    if (spisUl24__Сity.style.display==='none'){
        img24__City.style.transform = 'rotate(0deg)';
    }}







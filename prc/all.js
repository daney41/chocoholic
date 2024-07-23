document.getElementById('title1').textContent='Hello world!';

function number(){
    console.log('Tim')
    console.log(323)
}

number();
number();

function math(number){
    var total = number;
    console.log(total)
}

math(10);



document.getElementById('countId').onclick = function(){
    var hamPrice = 120;
    var cokePrice = 600;
    var humNum = parseInt(document.getElementById('hamNumId').value)*hamPrice;
    var cokeNum = parseInt(document.getElementById('cokeNumId').value)*cokePrice;
    document.getElementById('totalId').textContent = hamNum + cokeNum;
};

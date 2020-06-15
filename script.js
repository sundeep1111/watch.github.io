 var changeimg = document.getElementById('mainwatch')
// var black = document.getElementById('black')
// var red = document.getElementById('red')
// var marun = document.getElementById('marun')
// var blue = document.getElementById('blue')
// var pink = document.getElementById('pink')
// var timebt = document.getElementById('timebt')
// var heartbt = document.getElementById('heartbt')

// black.addEventListener('click', function(){
//     changeimg.src = "/images/black.png"
// })
// red.addEventListener('click', function(){
//     changeimg.src = "/images/red.png"
// })
// marun.addEventListener('click', function(){
//     changeimg.src = "/images/marun.png"
// })
// blue.addEventListener('click', function(){
//     changeimg.src = "/images/red.png"
// })
// pink.addEventListener('click', function(){
//     changeimg.src = "/images/pink.png"
// })
var colorarry = ['black', 'red', 'marun', 'blue', 'pink']
var color = document.getElementsByClassName('color');

for(i=0; i<color.length; i++ ){
    let colours = colorarry[i];
    color[i].addEventListener('click', function(){
        changeimg.src = 'images/' + colours + ".png"  
    })
}
setInterval(function(){
    var h = new Date().getHours();
    var m  = new Date().getMinutes();
    var s = new Date().getSeconds();
    
    if (hour < 10) hour = '0' + hour;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;
    document.getElementById('hour').innerText = h + ' ' + ':';
    document.getElementById('min').innerText = m + ' ' + ':';
    document.getElementById('sec').innerText = s ;
}, 1000)

timebt.addEventListener('click',function(){
    document.getElementsByClassName('timewrap')[0].style.display='block';
    document.getElementsByClassName('hearticon')[0].style.display='none';
})
heartbt.addEventListener('click',function(){
    document.getElementsByClassName('timewrap')[0].style.display='none';
    document.getElementsByClassName('hearticon')[0].style.display='block';
})

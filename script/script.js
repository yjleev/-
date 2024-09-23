function slide(){
    let pos = 0
    setInterval(play,2000)
    function play(){
        pos=(pos+1)%3
        $('.slide ul')
        .animate({
            marginLeft:-100*pos+'%'
        },600)
    }
}

function layerToggle(){
    $('.layer').toggle()
}

$(document)
.on('ready', slide)
.on('click', '.notice li:eq(0), .layer__close', layerToggle)

const slider = document.querySelector('.slider');

setInterval(()=>{
    
},2000)
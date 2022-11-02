// header anmation
    function toggleBtn(event){
        $('header').toggleClass('active');
        $('.header-wrap').fadeToggle();
        $('body > div > header > div.header-toggle-btn > button').toggleClass('rotate');
        $('main').toggleClass('main-active');
    }

//  change mode
function changeMode(event, mode){
    console.log(mode);
    if(mode === 'NOTE'){
        $('#mode-main, #mode-projects').css({
            'display':'none'
        });
        $('#mode-note').css({
            'display':'flex'
        })
    }else if(mode === 'PROJECTS'){
        $('#mode-main, #mode-note').css({
            'display':'none'
        });
        $('#mode-projects').css({
            'display':'flex'
        })
    }
}

window.addEventListener('load', (e)=>{

    console.log('claer load')
    

    let a = document.querySelector('#mode-main').addEventListener('scroll', (e)=>{
        
    })

})
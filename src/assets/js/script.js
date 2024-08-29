var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 3000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true

}

/*MENU-HAMBURGUER*/
function clickMenu() {
    if (itens.style.display == 'block'){
     itens.style.display = 'none'
    } else{
     itens.style.display = 'block'
    }
 }



    window.addEventListener("scroll", function(){
     let header = document.querySelector('#containerUp')
    header.classList.toggle('rolagemUp',window.scrollY > 0)
})

/*UNIDADES JS*/
function verMais(){
    var maistxt=document.getElementById("lerMais");
    var btnMais=document.getElementById("btnlerMais");

    if(maistxt.style.display === "none") {
        maistxt.style.display="flex";
        btnMais.innerHTML="Leia menos";
    }
    else{
        maistxt.style.display="none";
        btnMais.innerHTML="Leia mais";
    }


}

/*ROLAGEM HEADER*/
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 0)
})


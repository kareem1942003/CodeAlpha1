
window.onscroll = function(){
    const textAbout = document.querySelector(".textAbout")
    const upButton = document.querySelector(".fa-circle-up")
    const cards = document.querySelector(".cards")
        if(window.scrollY >= 550){
            textAbout.style.opacity = "100"
            upButton.style.opacity = "100"
        }
        else{
            upButton.style.opacity = "0"
        }
         if(window.scrollY >= 1100){
            cards.style.opacity = "100"
        }
    }

    const dwon = ()=>{
    window.scrollTo(0,800)
}
    const up = ()=>{
    window.scrollTo(0,0)
}
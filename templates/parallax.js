const efectoParallax = () => {
    window.addEventListener('scroll',() => {
        let img = document.querySelector('.img-fluid')
        let nav = document.querySelector('.navbar')
        let scrall = window.scrollY
        img.style.transform = `translateY(${scrall/2}px)`
        if(scrall > 100){
            nav.classList.remove('bg-transparent')
            nav.classList.add('bg-primary')
        }else{
            nav.classList.add('bg-transparent')
            nav.classList.remove('bg-primary')
        }
        
    })
}

export { efectoParallax }
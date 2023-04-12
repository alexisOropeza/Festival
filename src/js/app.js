document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    crearGaleria();
    scrollNav();
    navegacionFija()
};

function navegacionFija(){
    const barra = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');
    const body = document.querySelector('body');

     window.addEventListener('scroll', function(){
        
        if(sobreFestival.getBoundingClientRect().top < 0 ){
            barra.classList.add('fija')
            barra.classList.add('body-scroll')
        }else{
            barra.classList.remove('fija')
            barra.classList.remove('body-scroll')
        }
     })
}

function scrollNav(){

    const enlaces = document.querySelectorAll('.navegacion-principal a');
    
    enlaces.forEach(en => {
        en.addEventListener('click', function(e){
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({behavior: "smooth"});

        });

    });
    
  
};
 
function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes')

    for(let i = 1; i<= 12; i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
        <picture>
            <source srcset="build/img/thumb/${i}.avif" type="image/avif">
            <source srcset="build/img/thumb/${i}.webp" type="image/webp">

            <img loading="lazy" width="200" height="300" src="img/thumb/${i}.jpg" alt="imagen galeria"> 
       </picture>
        `

        imagen.onclick = function() {
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }

}



function mostrarImagen(img){
    const imagena = document.createElement('picture');
    imagena.innerHTML = `
    <picture>
        <source srcset="build/img/grande/${img}.avif" type="image/avif">
        <source srcset="build/img/grande/${img}.webp" type="image/webp">

        <img loading="lazy" width="200" height="300" src="img/grande/${img}.jpg" alt="imagen galeria"> 
   </picture>
    `;
    
    //Crea el overlay con la imagen
    const overlay = document.createElement('DIV')
    overlay.appendChild(imagena);
    overlay.classList.add('overlay');
    overlay.onclick = function(){
        overlay.remove();
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
    }
    
    //Anade al html
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');

    //boton para cerrar el modal
    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('btn-cerrar');

    cerrarModal.onclick = function(){
        overlay.remove();
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
    }

    overlay.appendChild(cerrarModal);
}
 


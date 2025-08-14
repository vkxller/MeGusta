const botonesLike = document.querySelectorAll('.botonlike');

botonesLike.forEach((boton) => {   // Por cadaboton se le aagrega la espera del evento click
    boton.addEventListener("click", function () {  // Cada vsez que se le de click este , encuentra el post donde se ubica ek boton y prosigue,
        const post = boton.closest(".post");

        // Obtener todos los contadores del post actual
        const contador = post.querySelector(".contadorlikes");
        const contador2 = post.querySelector(".contadorlikes2");
        const contador3 = post.querySelector(".contadorlikes3"); 
        const contador4 = post.querySelector(".contadorlikes4");

        let contadores = [contador, contador2, contador3, contador4];

        // Incrementar cada contador individualmente´
        for (let i = 0; i < contadores.length; i++) {  // Por cada indice en el arry de contenedores
            if (contadores[i]) {                           // A cada indice lo psara a numero entero y este le sumara 1
                let likes = parseInt(contadores[i].textContent);
                contadores[i].textContent = likes + 1;
            }
        }

    });
});
const btn_menu = document.querySelector('#menu_btn');
const menu_lista = document.querySelector('#menu_lista');

if (btn_menu && menu_lista) {

    btn_menu.addEventListener('click', () => {
        const abierto = menu_lista.classList.toggle('menu_abierto');

        btn_menu.setAttribute('aria-expanded', String(abierto));
        btn_menu.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
        btn_menu.textContent = abierto ? '✕' : '☰';
    });

    const enlaces = document.querySelectorAll('.menu_links a');

    enlaces.forEach((enlace) => {
        enlace.addEventListener('click', () => {
            menu_lista.classList.remove('menu_abierto');

            btn_menu.setAttribute('aria-expanded', 'false');
            btn_menu.setAttribute('aria-label', 'Abrir menú');
            btn_menu.textContent = '☰';
        });
    });
}

const filtros = document.querySelectorAll('.btn_filtro');
const canciones = document.querySelectorAll('.tarjeta_music');
const contador = document.querySelector('#total_canciones');

filtros.forEach((boton) => {

    boton.addEventListener('click', () => {
        const emocion = boton.dataset.emocion;
        let total = 0;

        filtros.forEach((filtro) => {
            const activo = filtro === boton;

            filtro.classList.toggle('filtro_activo', activo);
            filtro.setAttribute('aria-pressed', String(activo));
        });

        canciones.forEach((cancion) => {
            const mostrar = emocion === 'todos' ||
                            cancion.dataset.estado === emocion;

            cancion.hidden = !mostrar;

            if (mostrar) {
                total++;
            }
        });

        if (contador) {
            contador.textContent = `Mostrando ${total} ${total === 1 ? 'canción' : 'canciones'}.`;
        }
    });
});



// Portadas locales de ONE DAY

const portadas = [
    "congratulations.jpg",
    "its_my_life.jpg",
    "livin_on_a_prayer.jpg",
    "eye_of_the_tiger.jpg",
    "lose_yourself.jpg",

    "righteous.jpg",
    "on_melancholy_hill.jpg",
    "dreams.jpg",
    "star_shopping.jpg",
    "505.jpg",

    "circles.jpg",
    "sunflower.jpg",
    "passionfruit.jpg",
    "redbone.jpg",
    "the_spins.jpg",

    "fein.jpg",
    "sicko_mode.jpg",
    "rapstar.jpg",
    "starboy.jpg",
    "highway_to_hell.jpg"
];


canciones.forEach((cancion, indice) => {

    const portada = cancion.querySelector('.music_portada');
    const titulo = cancion.querySelector('h3');

    if (!portada || !titulo || !portadas[indice]) {
        return;
    }

    const imagen = document.createElement('img');

    imagen.alt = `Portada de ${titulo.textContent}`;
    imagen.className = 'music_imagen';

    imagen.onload = () => {
        portada.replaceChildren(imagen);
    };

    imagen.onerror = () => {
        console.log(`No se pudo cargar: ${portadas[indice]}`);
    };

    imagen.src = `img/albumes/${portadas[indice]}`;
});


// 4. Descripciones y reproductores musicales

const experiencias = [

    // MOTIVACIÓN

    {
        descripcion: "Representa la satisfacción de alcanzar un sueño después de años de esfuerzo. Transmite orgullo, perseverancia y la emoción de demostrar que todo fue posible.",
        spotify: "3a1lNhkSLSkpJE4MSHpDu9"
    },

    {
        descripcion: "Es un recordatorio de que nuestra vida nos pertenece. Transmite libertad, determinación y valentía para tomar nuestras propias decisiones.",
        spotify: "0v1XpBHnsbkCn7iJ9Ucr1l"
    },

    {
        descripcion: "Habla de mantenerse firme durante las dificultades. Su energía transmite esperanza, unión y la fuerza necesaria para seguir adelante.",
        spotify: "0ee1DiZF94NSqqpG0XHUzH"
    },

    {
        descripcion: "Representa la disciplina y el espíritu de superación. Su ritmo transmite coraje, concentración y ganas de enfrentar cualquier desafío.",
        spotify: "2KH16WveTQWT6KOG9Rg6e2"
    },

    {
        descripcion: "Nos recuerda que las oportunidades pueden cambiar nuestra vida. Transmite urgencia, ambición y la decisión de luchar por nuestros sueños.",
        spotify: "2jvHb9SHJDi8Ugky7tUzUb"
    },

    // NOSTALGIA

    {
        descripcion: "Expresa una lucha interior entre el dolor y la búsqueda de tranquilidad. Su atmósfera transmite vulnerabilidad, melancolía y reflexión.",
        spotify: "5dOxHHMOFAbG3VH23t0xNm"
    },

    {
        descripcion: "Evoca la sensación de recordar a alguien especial desde la distancia. Su sonido transmite ternura, soledad y una nostalgia difícil de explicar.",
        spotify: "0q6LuUqGLUiCPP1cbdwFs3"
    },

    {
        descripcion: "Habla de los sentimientos que permanecen después de una relación. Transmite recuerdos, aceptación y la belleza de dejar que la vida siga.",
        spotify: "0L9EqOAJ2r2VPdsWvTK9Pf"
    },

    {
        descripcion: "Refleja un amor vulnerable, lleno de inseguridades y esperanza. Transmite intimidad, tristeza y recuerdos que parecen acompañarnos de madrugada.",
        spotify: "30bqVoKjX479ab90a8Pafp"
    },

    {
        descripcion: "Representa el deseo de volver a un lugar o a una persona. Su intensidad creciente transmite anhelo, ansiedad y emociones que nunca desaparecieron.",
        spotify: "58ge6dfP91o9oXMzq3XkIS"
    },

    // CALMA

    {
        descripcion: "Refleja la dificultad de abandonar un ciclo emocional. Su melodía suave transmite melancolía, serenidad y una sensación de aceptación.",
        spotify: "4LIqp2sqzvN91IVeSt9HDs"
    },

    {
        descripcion: "Representa una conexión especial que puede resistir las dificultades. Su ritmo cálido transmite cariño, optimismo y tranquilidad.",
        spotify: "0RiRZpuVRbi7oqRdSMwhQY"
    },

    {
        descripcion: "Evoca los momentos en los que necesitamos desconectarnos del ruido. Su atmósfera transmite relajación, introspección y una calma ligeramente nostálgica.",
        spotify: "5mCPDVBb16L4XQwDdbRUpz"
    },

    {
        descripcion: "Combina una atmósfera tranquila con sentimientos de incertidumbre. Transmite sensibilidad, misterio y la necesidad de proteger nuestros vínculos.",
        spotify: "3kxfsdsCpFgN412fpnW85Y"
    },

    {
        descripcion: "Nos transporta a los días despreocupados de la juventud. Transmite libertad, buenos recuerdos y la alegría de disfrutar el presente.",
        spotify: "51pshtuYkgUQnt5huMPbKL"
    },

    // EUFORIA

    {
        descripcion: "Representa una explosión de energía y adrenalina. Su ritmo repetitivo transmite intensidad, emoción y las ganas de vivir el momento sin límites.",
        spotify: "42VsgItocQwOQC3XWZ8JNA"
    },

    {
        descripcion: "Combina cambios de ritmo inesperados con una energía explosiva. Transmite sorpresa, adrenalina y la sensación de estar en un espectáculo.",
        spotify: "2xLMifQCjDGFmkHkpNLD9h"
    },

    {
        descripcion: "Refleja la confianza de alguien que ha superado grandes dificultades. Transmite seguridad, éxito y la satisfacción de llegar lejos.",
        spotify: "43PGPuHIlVOc04jrZVh9L6"
    },

    {
        descripcion: "Representa el éxito, la transformación y una nueva identidad. Su sonido transmite poder, confianza y una actitud desafiante.",
        spotify: "7MXVkk9YMctZqd1Srtv4MB"
    },

    {
        descripcion: "Es una celebración de la rebeldía y la libertad. Sus guitarras transmiten emoción, energía y ganas de disfrutar la vida sin miedo.",
        spotify: "2zYzyRzz6pRmhPzyfMEC8s"
    }

];


// 5. Elementos del reproductor

const ventana_musica = document.querySelector('#ventana_musica');
const cerrar_musica = document.querySelector('#cerrar_musica');
const spotify_reproductor = document.querySelector('#spotify_reproductor');
const titulo_reproductor = document.querySelector('#titulo_reproductor');
const artista_reproductor = document.querySelector('#artista_reproductor');


// 6. Agregar descripciones y botones a cada tarjeta

canciones.forEach((cancion, indice) => {

    const datos = experiencias[indice];

    if (!datos || !ventana_musica) {
        return;
    }

    const titulo = cancion.querySelector('h3');
    const artista = cancion.querySelector('.music_datos p');

    if (!titulo || !artista) {
        return;
    }

    const descripcion = document.createElement('p');
    descripcion.className = 'music_descripcion';
    descripcion.textContent = datos.descripcion;

    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'btn_escuchar';
    boton.textContent = '▶ Escuchar canción';

    boton.addEventListener('click', () => {

        titulo_reproductor.textContent = titulo.textContent;
        artista_reproductor.textContent = artista.textContent;

        spotify_reproductor.src =
            `https://open.spotify.com/embed/track/${datos.spotify}?utm_source=generator`;

        ventana_musica.showModal();
    });

    cancion.appendChild(descripcion);
    cancion.appendChild(boton);

});


// 7. Cerrar reproductor

if (ventana_musica && cerrar_musica) {

    cerrar_musica.addEventListener('click', () => {
        ventana_musica.close();
    });

    ventana_musica.addEventListener('close', () => {
        spotify_reproductor.removeAttribute('src');
    });

}


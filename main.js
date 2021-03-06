// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun post.Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data in formato americano, testo del post, immagine(non tutti i post devono avere una immagine), numero di likes.
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es.Unsplash(https://unsplash.it/300/300?image=<id>)
//     - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.


// array di oggetti
const post = [
    {
        name : 'Phil Mangione',
        profileImage : '15',
        date: '11-11-2020',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: '171',
        likes : 80
    },
    {
        name : 'Lucio Casillo',
        profileImage : '',
        date: '11-23-2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: '17',
        likes : 49
    },
    {
        name : 'Serena Musilli',
        profileImage : '3',
        date: '02-03-2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: '155',
        likes : 233
    },
    {
        name : 'Aurelio Russo',
        profileImage : '6',
        date: '07-15-2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: '19',
        likes : 71
    },
    {
        name : 'Giulio Manzi',
        profileImage : '153',
        date: '12-09-2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: '11',
        likes : 16
    },
];

// Funzione per creare template
function createTemplate (name, profileImage, date, text, image, likes) {
    const template = `
            <div class="post">
                <div class="post__header">
                    <div class="post-meta">
                        <div class="post-meta__icon">
                             <img class="profile-pic" src="https://unsplash.it/300/300?image=${profileImage}" alt="${iniziali(post[i].name)}">
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${name}</div>
                            <div class="post-meta__time">${date}</div>
                        </div>
                    </div>
                </div>
                <div class="post__text">${text}</div>
                <div class="post__image">
                    <img src="https://unsplash.it/600/300?image=${image}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#" data-postid="1">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                        </div>
                    </div>
                </div>
            </div>
        `;
    return template;
}

// Funzione per formattare la data in italiano
function dateIta (date) {
    const dateUsa = date;
    let m = dateUsa[0] + dateUsa[1] + dateUsa[2];
    let g = dateUsa[3] + dateUsa[4] + dateUsa[5];
    let a = dateUsa[6] + dateUsa[7] + dateUsa[8] + dateUsa[9];

    const dateIt = g + m + a;

    return dateIt;
}


// Funzione che separa nomi da cognomi e genera le iniziali
function iniziali (string) {
    const stringArray = string.split(' ');
    const name = stringArray[0];
    const surname = stringArray[1];
    const inizial = name[0].toUpperCase() + surname[0].toUpperCase();

    return inizial;
}


// Richiamo il container 
const container = document.getElementById('container');


// Popolo il container con gli oggetti dell'array
for (i = 0; i < post.length; i++) {

    // Gestione assenza immagine 
    let template = ``;
    if (post[i].profileImage == '') {

        template = createTemplate(post[i].name, iniziali(post[i].name), dateIta(post[i].date), post[i].text, post[i].image, post[i].likes);

    } else {

        template = createTemplate(post[i].name, post[i].profileImage, dateIta(post[i].date), post[i].text, post[i].image, post[i].likes);

    }

    
    // Inserisco il template nel DOM
    container.innerHTML += template;
    
}

// Aumentare il contatore dei like al click del bottone
const button = document.querySelectorAll('.likes__cta');
const label = document.querySelectorAll('.like-button__label');
const likesCount = document.querySelectorAll('.js-likes-counter');

    for (let i = 0; i < button.length; i++) {

        button[i].addEventListener('click', function () {
        
        label[i].style.color = 'green';
        let counter = parseInt(likesCount[i].innerHTML);
        counter += 1;
        console.log(counter);
        likesCount[i].innerHTML = counter;
        
        });
    }
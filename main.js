// esercizio di oggi: Social Posts
// nome repo: js-social-posts
// Ricreiamo un feed social aggiungendo al layout di base fornito (allegato sotto) il nostro codice javascript in cui:
// - Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es: https://picsum.photos/id/237/600/350
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura del codice.
// Di nuovo buon lavoro!

// 1.DB
// 2.loop 
// 3.Markup


const posts = 
[
{
	avatar:'https://pbs.twimg.com/profile_images/545353874941280256/FfRvxdqa_400x400.jpeg',
	userName:'Paolo',
	userSurName:  'Duzioni',
	postTime: 3,
	postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
	postImage:'https://unsplash.it/600/300?image=237',
	like:41
},
{
	avatar:'https://pbs.twimg.com/profile_images/1574806152/image_400x400.jpg',
	userName:'Silvio',
	userSurName:  'Berlusconi',
	postTime: 2,
	postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
	postImage:'https://unsplash.it/600/300?image=1062',
	like:6

},
{
	avatar:'https://i.ebayimg.com/images/g/0GQAAOSwrIlasZ7p/s-l300.jpg',
	userName:'Donald',
	userSurName:  'Trump',
	postTime: 1,
	postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
	postImage:'https://unsplash.it/600/300?image=200',
	like:4

},
{
	avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF2WZU1b0MpsZSVK_gLOMLnDNlNAo7Xb8DMor3f299ItBGIwrLQ5bbFQQ3N1DTjR6fUas&usqp=CAU',
	userName:'Angela',
	userSurName:  'Merkel',
	postTime: 7,
	postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
	postImage:'https://unsplash.it/600/300?image=169',
	like:8

},
{
	avatar:'https://bemorepanda.com/files/2020-08-12/images/267927.jpeg',
	userName:'Vladimir',
	userSurName:  'Pukin',
	postTime: 2,
	postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
	postImage:'https://unsplash.it/600/300?image=433',
	like:-2

},


]

const container = document.getElementById('container')

get (container)




function get (container) {
	for (let i = 0; i < posts.length; i++){
		let postData =  posts[i]
			
		container.innerHTML += 
		`
		<div class="post">
			<div class="post__header">
				<div class="post-meta">                    
					<div class="post-meta__icon">
							<img class="profile-pic" src="${postData.avatar}" alt="Phil Mangione">                    
					</div>
					<div class="post-meta__data">
							<div class="post-meta__author">${postData.userName} ${postData.userSurName}</div>
							<div class="post-meta__time">${postData.postTime} mesi fa </div>
					</div>                    
				</div>
			</div>
			<div class="post__text">${postData.postText}</div>
			<div class="post__image">
				<img src="${postData.postImage}" alt="">
			</div>
			<div class="post__footer">
				<div class="likes js-likes">
					<div class="likes__cta">
							<a class="like-button  js-like-button" href="#" data-postid="1">
								<i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
								<span class="like-button__label">Mi Piace</span>
							</a>
					<button class="btn"></button>
		
					</div>
					<div class="likes__counter">
							Piace a <b id="like-counter-1" class="js-likes-counter">${postData.like}</b> persone
					</div>
				</div> 
			</div>            
		</div>
		`
		
		}
}
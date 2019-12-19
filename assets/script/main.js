var cards = document.querySelector('.display');
var search = document.querySelector('.search');
var input = document.querySelector('.input');
var title = document.querySelector('title');
var subTitle =  document.querySelectorAll('.js_text');
var card2 = document.querySelector('.card2_container');
var js_logo = document.querySelector('.js_logo');
var section1 = document.querySelector('.add_section1');


// var display = (list) => {
//     subTitle.forEach(text => text.textContent = `r/${input.value}` );
//     title.textContent = input.value;
//     input.value = "";

//     list.forEach((item) => {
//     let div = document.createElement('div');
//     div.classList.add('wrapper');
//     let div1 = document.createElement('div');
//     div1.classList.add('card');
//     let div2 = document.createElement('div');
//     div2.classList.add('card_sub1');
//     let image = document.createElement('img');
//     image.classList.add('arrow');
//     image.src = './assets/media/arrow_up.png';
//     let para = document.createElement('p');
//     para.classList.add('innerText_arrow');
//     para.innerText = item.data.score
//     let image1 = document.createElement('img');
//     image1.classList.add('arrow');
//     image1.src = './assets/media/arrow_down.png';

//     let div3 = document.createElement('div');
//     div3.classList.add('card_sub2');
//     let h5 = document.createElement('h5');
//     h5.classList.add('author');
//     h5.innerText = `Posted by u/${item.data.author}`
//     let h4 = document.createElement('h4');
//     h4.classList.add('title');
//     h4.innerText = item.data.title
//     let span = document.createElement('span');
//     span.classList.add('link_flair_text');
//     span.innerText = item.data.link_flair_text
//     let para2 = document.createElement('p');
//     para2.classList.add('self_text');
//     para2.innerText = item.data.selftext
//     let anchor = document.createElement('a');
//     anchor.href = item.data.url
//     let image2 = document.createElement('img');
//     image2.classList.add('comments');
//     image2.src = "./assets/media/comments.jpg";
//     anchor.append(image2);
//     let para3 = document.createElement('p');
//     para3.classList.add('comments_text');
//     para3.innerText = `${item.data.num_comments} Comments`;
//     div2.append(image,para,image1);
//     div3.append(h5,h4,span,para2,anchor,para3);
//     div1.append(div2,div3);
//     div.append(div1);
//     cards.append(div)
//     });
// }


var display = (list) => {
    
    subTitle.forEach(text => text.textContent = `r/${input.value}` );
    title.textContent = input.value;
    input.value = "";
    cards.innerHTML = list.map((item) => {
           return (
           `<div class="wrapper">
            <div class="card">
                <div class = card_sub1>
                     <img class = 'arrow' src = './assets/media/arrow_up.png'>
                     <p class = 'innerText_arrow' >${item.data.score}</p>
                     <img class = 'arrow' src = './assets/media/arrow_down.png'>
                </div>
              <div class = card_sub2>
                <h5 class = 'author'>Posted by u/${item.data.author}</h5>
                <h4 class = 'title'>${item.data.title}</h4>
                <span class = 'link_flair_text'>${item.data.link_flair_text}</span>
                <p class = 'self_text'>${item.data.selftext}</p>
                <a href = ${item.data.url}>
                    <img class = 'comments' src="./assets/media/comments.jpg">
                </a>   
                <p class = 'comments_text'>${item.data.num_comments} Comments</p>
              </div>
            </div>
            </div>`
        )
  
    });  
  }



function myFetch (url) {
    
    return new Promise ((resolve,reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET',url);
    xhr.onload = () => resolve(JSON.parse(xhr.response))
    xhr.onError = () => reject(console.log('ERROR !'))
    xhr.send();

    })
};

function handleSearch() {
let url = `https://api.reddit.com/r/${input.value}`;
console.log(url);
myFetch(url)
.then(res => { 
    
    display(res.data.children); 
    card2.classList.remove('card2_container_display');
    js_logo.src = './assets/media/js.png';
    section1.style.opacity = '1';

})
.catch(rej => console.log(rej));
}

input.addEventListener('keydown', (event) => { 
    if (event.keyCode === 13) {
     handleSearch()
    }});


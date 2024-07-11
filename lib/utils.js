import { Comments } from "../components/Comment.js"
export function reload(array, place, component) {

    for (let item of array) {
        const product = component(item, array)
        place.append(product)
    }
}


export function openComments(item){
    const modal = document.querySelector('#myModal')
    const place_com = document.querySelector('.comment')
    const close = document.querySelector('.close')
    const comment_img = document.querySelector('.post-image-container img')
    comment_img.src = item.url
    modal.classList.add('show')
    close.onclick = () => {
        modal.classList.remove('show')
    }
    console.log(item);
    fetch('https://jsonplaceholder.typicode.com/comments?postId=' + item.id)
        .then(res => res.json())
        .then(comments => reload(comments, place_com, Comments))
}
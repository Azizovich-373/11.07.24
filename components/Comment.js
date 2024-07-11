export function Comments(item){
    const comment_p = document.createElement('p')
    const strong = document.createElement('strong')

    strong.innerHTML = `${item.email}:  `
    comment_p.innerHTML = item.name

    comment_p.prepend(strong)

    return comment_p
}
export function Stories(item) {
    
    const story = document.createElement('div')
    const profil_pic = document.createElement('dic')
    const username = document.createElement('h6')
    const img = document.createElement('img')

    story.classList.add('story')
    profil_pic.classList.add('profil-pic')
    username.classList.add('username')
    img.classList.add('img_profil')
    
    img.src = item.url
    username.innerHTML = 'username'

    story.append(profil_pic,username)
    profil_pic.append(img)

    return story
} 
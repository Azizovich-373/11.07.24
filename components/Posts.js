import { openComments } from "../lib/utils.js"

export function Posts(item) {
    const publication = document.createElement('div')
    const public_user = document.createElement('div')
    const pub_img = document.createElement('div')
    const using_emoji = document.createElement('div')
    const pub_name_box = document.createElement('div')
    const add_comment = document.createElement('div')
    const about_user = document.createElement('div')
    const user_logo = document.createElement('div')
    const user_name = document.createElement('div')
    const nickname = document.createElement('span')
    const city = document.createElement('span')
    const settings = document.createElement('img')
    const img_post = document.createElement('img')
    const emoji_left = document.createElement('div')
    const emoji_rigth = document.createElement('div')
    const like = document.createElement('img')
    const commit = document.createElement('img')
    const repost = document.createElement('img')
    const selected = document.createElement('img')
    const pub_name = document.createElement('h2')
    const pub_title = document.createElement('span')
    const add_text = document.createElement('div')
    const emoji = document.createElement('img')
    const inp_comment = document.createElement('input')
    const btn = document.createElement('button')

    publication.classList.add('publication')
    public_user.classList.add('public_user')
    pub_img.classList.add('pub_img')
    using_emoji.classList.add('using_emoji')
    pub_name_box.classList.add('pub_name_box')
    add_comment.classList.add('add_comment')
    about_user.classList.add('about_user')
    user_logo.classList.add('user_logo')
    user_name.classList.add('user_name')
    nickname.classList.add('nickname')
    city.classList.add('city')
    settings.classList.add('settings')
    img_post.classList.add('img_post')
    emoji_left.classList.add('emoji_left')
    emoji_rigth.classList.add('emoji_rigth')
    like.classList.add('like')
    commit.classList.add('commit')
    repost.classList.add('repost')
    selected.classList.add('selected')
    pub_name.classList.add('pub_name')
    pub_title.classList.add('pub_title')
    add_text.classList.add('add_text')
    emoji.classList.add('emoji')
    inp_comment.classList.add('inp_comment')
    btn.classList.add('btn')
    img_post.classList.add('img_post')

    nickname.innerHTML = 'nickname'
    city.innerHTML = 'City, Country'
    pub_name.innerHTML = 'nickname:'
    pub_title.innerHTML = item.title
    btn.innerHTML = 'Post'

    
    img_post.src = item.url
    settings.src = './svg/settings.svg'
    like.src = './svg/like.svg'
    commit.src = './svg/commit.svg'
    repost.src = './svg/repost.svg'
    selected.src = './svg/selected.svg'
    emoji.src = './svg/emoji.svg'

    publication.append(public_user,pub_img,using_emoji,pub_name_box,add_comment)
    public_user.append(about_user,settings)
    about_user.append(user_logo,user_name)
    user_name.append(nickname,city)
    pub_img.append(img_post)
    using_emoji.append(emoji_left,emoji_rigth)
    emoji_left.append(like,commit,repost)
    emoji_rigth.append(selected)
    pub_name_box.append(pub_name)
    pub_name.append(pub_title)
    add_comment.append(add_text,btn)
    add_text.append(emoji,inp_comment)

    commit.onclick = () => {
        openComments(item)
    }
    return publication
}


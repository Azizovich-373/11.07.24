export function Suggestion(item){
    const suggestion = document.createElement('div')
    const sugg_pic = document.createElement('div')
    const info_user = document.createElement('div')
    const username = document.createElement('h4')
    const link = document.createElement('a')
    const name = document.createElement('h5')
    const btn = document.createElement('button')

    suggestion.classList.add('suggestion')
    sugg_pic.classList.add('sugg-pic')
    info_user.classList.add('info_user')
    username.classList.add('username')
    name.classList.add('name')
    btn.classList.add('btn')
    link.classList.add('link')

    link.href = './pages/account.html?userId='+item.id
    username.innerHTML = item.username
    name.innerHTML = item.name
    btn.innerHTML = 'Follow'
    
    suggestion.append(sugg_pic,info_user,btn)

    info_user.append(link,name)
    link.append(username)

    return suggestion
}
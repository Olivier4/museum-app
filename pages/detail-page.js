function submitComment() {
    const inputField = document.getElementById('name')
    const name = inputField.value
    const messageField =document.getElementById('msg')
    const msg = messageField.value
   

    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    h3.innerHTML = `${name} said:`
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)

    const commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)

    inputField.value = null
    messageField.value = null

    if (doesNotPassAllValidations(name, msg)){
    
        return null
    }
}
function doesNotPassAllValidations(name, msg) {
    if (!name || !msg) {
      alert('You forgot to fill in your name or message!')
      return true;
    }
  
    if(msg.length > 280) {
      alert('Your comment is too long')
      return true
    }
  
    return false
  
  
}
  
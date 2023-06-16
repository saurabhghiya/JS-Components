let container = document.querySelector('.container');
let replyContainer = document.createElement('div');
replyContainer.className = 'comment-reply-container';
replyContainer.innerHTML = `
    <textarea type="text" placeholder="Write your comment"></textarea>
    <button class="btn-submit">Send</button>
`;
document.querySelector('.time').textContent = genDate();

function inputHandler(e){
    if(e.target.classList[0] == 'reply'){
        e.target.after(replyContainer);
    }
    else if(e.target.classList[0] == 'btn-submit'){
        let commentText = e.target.previousElementSibling.value;
        if(commentText != '') e.target.closest('.comment-card').after(createComment(commentText));
        e.target.previousElementSibling.value = '';
        e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    }
    else if(e.target.localName == 'i'){
        e.target.classList.toggle('like');
    }
}

function genDate(){
    let time = (new Date()).toLocaleTimeString().substring(0,5);
    return time;
}

function createComment(text){
    let newComment = document.createElement('div');
    newComment.className = 'comment-container';
    newComment.innerHTML = `
    <div class="dp"></div>
    <div class="comment-card">
        <h3>${text}</h3>
        <span class="time">${genDate()}</span>
        <i class="fa-solid fa-heart"></i>
        <span class="reply">Reply</span>
    </div> 
    `;
    return newComment;
}
container.addEventListener('click', inputHandler);
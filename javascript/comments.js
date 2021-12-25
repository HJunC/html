const commnetInput = document.getElementsByClassName('post')[0];
const submit = document.getElementsByClassName('submit')[0];

//  댓글 생성
function enterComment() {
    const [comments] = document.getElementsByClassName('comments');
    const newComment = document.createElement('li');
    const comment = '<b>dltjsgho</b>${commnetInput.value}<span class = "commentLikes"></span><span class = "deleted">x</span>';

    newComment.innerHTML = comment
    comments.appendChild(newComment);
    commnetInput.value='';
}


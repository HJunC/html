//1. 입력받으면 입력값 초기화
//2. 입력값 댓글로 들어가기
//3. 댓글 삭제, 수정기능
//4. 좋아요 투표기능
//5. 타임스탬프기능
//6. 무작위 아이디
//7.댓글 삭제기능
//8. 댓글 수정기능

const inputBar = document.querySelector("#comment-input");
const rootDiv = document.querySelector("#comments");
const btn = document.querySelector("#submit");
const mainCommentCount = document.querySelector('#count') //맨위 댓글 숫자 카운트

//타임스탬프 기능
function generateTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const wDate = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const time = year + '-' + month + '-' + wDate + ' ' + hour + ':' + min + ':' + sec;
    return time;
}

//유저이름 생성기
//유저이름은 8글자로 제한.
function generateUserName() {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var makeUsername = '';
    for (let i = 0; i < 4; i++) {
        let index = Math.floor(Math.random(10) * alphabet.length);
        makeUsername += alphabet[index];
    }
    for (let j = 0; j < 4; j++) {
        makeUsername += "*";
    }
    return makeUsername
}

function numberCount(event) {
    console.log(event.target);
    if (event.target === voteUp) {
        console.log("2");
        return voteUp.innerHTML++;
    } else if (event.target === voteDown) {
        return voteDown.innerHTML++;
    }
}

function deleteComments(event) {
    const btn = event.target;
    const list = btn.parentNode; //commentList
    rootDiv.removeChild(list);
    //메인댓글 카운트 줄임.
    if (mainCommentCount.innerHTML <= '0') {
        mainCommentCount.innerHTML = 0;
    } else {
        mainCommentCount.innerHTML--;
    }
}

//댓글보여주기
function showComment(comment) {
    const userName = document.createElement('div');
    const inputValue = document.createElement('span');
    const showTime = document.createElement('div');
    const voteDiv = document.createElement('div');
    const countSpan = document.createElement('div');
    const voteUp = document.createElement('button');
    const voteDown = document.createElement('button');
    const commentList = document.createElement('div');
    //삭제버튼
    const delBtn = document.createElement('button');
    delBtn.className = 'deleteComment';
    delBtn.innerHTML = '삭제';
    commentList.className = 'eachComment';
    userName.className = 'name';
    inputValue.className = 'inputValue';
    showTime.className = 'time';
    voteDiv.className = 'voteDiv';
    //유저네임 가져오기
    userName.innerHTML = generateUserName();
    userName.appendChild(delBtn);
    //입력값 넘기기
    inputValue.innerText = comment;
    //타임스템프찍기 
    showTime.innerHTML = generateTime();
    countSpan.innerHTML = 0;
    //투표창 만들기, css먼저 입혀야함. 
    voteUp.id = "voteUp";
    voteUp.innerHTML = '↑';
    voteDown.id = "voteDown";
    voteDown.innerHTML = '↓';
    voteDiv.appendChild(voteUp);
    voteDiv.appendChild(voteDown);
    //댓글뿌려주기 
    commentList.appendChild(userName);
    commentList.appendChild(inputValue);
    commentList.appendChild(showTime);
    commentList.appendChild(voteDiv);
    rootDiv.prepend(commentList);
    voteUp.addEventListener("click", numberCount);
    voteDown.addEventListener("click", numberCount);
    delBtn.addEventListener("click", deleteComments);
    console.dir(rootDiv);
}

function pressBtn() {
    const currentVal = inputBar.ariaValueMax;

    if (!currentVal.length) {
        alert('댓글을 입력해주세요!');
    } else {
        showComment(currentVal);
        mainCommentCount.innerHTML++;
        inputVar.value = '';
    }
}

btn.onclick = pressBtn;
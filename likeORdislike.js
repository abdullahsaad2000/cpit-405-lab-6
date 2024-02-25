const buttonLike = document.getElementById("button-like");
const buttonDislike = document.getElementById("button-dislike");

let countLike = 73;
let countDislike = 18;
buttonLike.innerText = "👍"+ countLike;
buttonDislike.innerText = "👎"+ countDislike;

function updateLike () {
  if (!voteCheck()){
countLike +=1;
buttonLike.innerText = "👍"+ countLike;
setLikeOrDislikeCookie();
  } else {
    alert("You are already voted !!");
  }
}
function updateDislike () {
  if (!voteCheck()){
  countDislike +=1;
buttonDislike.innerText = "👎"+ countDislike;
setLikeOrDislikeCookie();
} else {
  alert("You are already voted !!");
}
}
function setLikeOrDislikeCookie () {
  document.cookie = "voted=true; Max-Age=30";
}
function voteCheck (){
    if (document.cookie.split(';').some((item) => item.trim().startsWith('voted='))) {
      return true;
    }
    return false;
  }

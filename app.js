/* Start of modal code */
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

window.addEventListener("load", (event) => {
  modal.style.display = "block";
});
/* End of modal code */

let big_body = document.getElementById("body");
let bs = document.getElementById("bs-button");
let headTxt = document.getElementById("header-text");

let counters = 0;

function IncrementNum() {
  counters += 1;
  var countNum = (document.getElementById("counter1").innerHTML = counters);

  if (counters === 10) {
    document.body.style.backgroundColor = "green";
    headTxt.innerHTML = "cmonn legghggggo";
  } else if (counters === 50) {
    document.body.style.backgroundColor = "blue";
    headTxt.textContent = "keep going!!!!!!!";
  } else if (counters === 70) {
    document.body.style.backgroundColor = "red";
    headTxt.textContent = "almost there !!!!!!!!!";
  } else if (counters === 100) {
    document.body.style.backgroundColor = "red";
    headTxt.textContent = "!!!!!!!!!";

    //shhhhhh don't tell anyone lol
    window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }
}

bs.addEventListener("click", (e) => {
  IncrementNum();
});

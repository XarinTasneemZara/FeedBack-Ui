let emojies = document.querySelectorAll(".feedback-emoji");
let selectedFeedback = "";
let button = document.getElementById("btn");
let containerEl = document.getElementById("container");

emojies.forEach(function (emoji) {
  emoji.addEventListener("click", function (event) {
    removeClassList();
    let activeEmoji = event.target.classList.add("active");
    let activeEmojiWithParent = event.target.parentNode.classList.add("active");

    selectedFeedback = event.target.innerText || event.target.parentNode.innerText;
  });
});
function removeClassList() {
  emojies.forEach(function (e) {
    e.classList.remove("active");
  });
}

button.addEventListener("click", function () {
  if (selectedFeedback !== "") {
    containerEl.innerHTML=`<b>Thanks</b>
    <br>
    <b>Feedback:${selectedFeedback}</b>
    <p>We'll use your feedback to improve our service.</>`
  }
} )
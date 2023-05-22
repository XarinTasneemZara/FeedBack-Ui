//1. need to execute all the feedback emoji
let emojies = document.querySelectorAll(".feedback-emoji");
//10. create an emptey var for using it in the funtion.
let selectedFeedback = "";
//7. Now we need to creat something after clicking the button(till now we have craeted for afetr clicking the emojies.)

//8. Execute the button element
let button = document.getElementById("btn");
let containerEl = document.getElementById("container");

//2. As you can see we got 3 emojies and we have to add the event listener to each of this. 
emojies.forEach(function (emoji) {
  //3. After going throut each element we have to add an event listener to listen for the click
  emoji.addEventListener("click", function (event) {
    //6. Call the remove funtion before activing one.
    removeClassList();
    //4. After clicking there we need to active the hover (https://prnt.sc/u3_WmdpVidvx) to the emoji with it's parent element.
    let activeEmoji = event.target.classList.add("active");
    let activeEmojiWithParent = event.target.parentNode.classList.add("active");
//11. we call the empty var in the funtion. Then give the value for chainging the innerHTML after clicking the function.

//12. So now the empty var will get the clicked elements innertext
    selectedFeedback = event.target.innerText || event.target.parentNode.innerText;
  });
});
//5. After clicking the secound emoji the hover will stay for both emojies. So we have to remove the active class each time after cliking another emoji.
function removeClassList() {
  emojies.forEach(function (e) {
    e.classList.remove("active");
  });
}

//9. add an eventlistenr for listening the click.
button.addEventListener("click", function () {
    //13. we need to add if stetment if the selected feedback is empty or not. Of course after clicking them it won't be empty after clicking cuz it will get the inner text of the clicked element.
  if (selectedFeedback !== "") {
    containerEl.innerHTML=`<b>Thanks</b>
    <br>
    <b>Feedback:${selectedFeedback}</b>
    <p>We'll use your feedback to improve our service.</>`
  }
  //14.doller sign is a daynamic var with will take the selectedFeedback
} )
const colors = ["red", "blue", "green", "pink", "orange", "purple"]
let currentIndex = 0;


function changeBackgroundColor() {
    //getting body's background color and change it each time
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex++;
    if (currentIndex == 6)  {
        currentIndex = 0;
    }
 }

//calling changeBackgroundColor() every 2 seconds
setInterval(changeBackgroundColor, 2000);

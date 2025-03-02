document.getElementById('btn-one').addEventListener('click', function(){
    alert('Board Updated Successfully');
    this.disabled = true;
})

document.getElementById('btn-two').addEventListener('click', function(){
    alert('Board Updated Successfully');
    this.disabled = true;
})

document.getElementById('btn-three').addEventListener('click', function(){
    alert('Board Updated Successfully');
    this.disabled = true;
})

document.getElementById('btn-four').addEventListener('click', function(){
    alert('Board Updated Successfully');
    this.disabled = true;
})

document.getElementById('btn-five').addEventListener('click', function(){
    alert('Board Updated Successfully');
    this.disabled = true;
})

document.getElementById('btn-six').addEventListener('click', function(){
    alert('Board Updated Successfully');
    this.disabled = true;
})


const completeButton = document.querySelectorAll(".completeButton");
let clickedButtons = new Set(); 

completeButton.forEach(button => {
  button.addEventListener('click', () => {
    clickedButtons.add(button.id);

    if (clickedButtons.size === completeButton.length) {
      alert('Congrats! You have completed all the current task');
    }
  });
});


const button = document.querySelectorAll('.completeButton');
const checkBox = document.getElementById('checkBox');
let box = 6; 
button.forEach(button =>{
    button.addEventListener('click', function(){
        this.disabled = true;
        box--;
        checkBox.textContent = box;
        if (box === 0){
            document.getElementById(checkBox).checked = false;
        }
    })
})


const buttons = document.querySelectorAll('.completeButton');
const checkBoxAnother = document.getElementById('checkBoxAnother');
let front = 23; 
button.forEach(buttons =>{
    buttons.addEventListener('click', function(){
        this.disabled = true;
        front++;
        checkBoxAnother.textContent = front;
        if (front === 0){
            document.getElementById(checkBoxAnother).checked = false;
        }
    })
})


const today = new Date();
const options = { weekday: 'long' };
const dayString = today.toLocaleString(undefined, options);
document.getElementById('day').textContent = dayString;

const todays = new Date();
const dateString = todays.toLocaleDateString();
document.getElementById('date').textContent = dateString;




document.getElementById('anotherPage').addEventListener('click', function(){
    window.location.href="./main.html";
})



const btnOne = document.getElementById('btn-one');
const text1 = document.getElementById('oneButton');
btnOne.addEventListener('click', function(){
    text1.textContent = "You Have Completed The Task Fix Mobile Button Issue at"
    const now = new Date ();
    const timeString = now.toLocaleTimeString();
    document.getElementById('time-one').textContent = timeString;
    
});
const btnTwo = document.getElementById('btn-two');
const text2 = document.getElementById('twoButton');
btnTwo.addEventListener('click', function(){
    text2.textContent = "You Have Completed The Task Add Dark Mobile at"
    const now = new Date ();
    const timeString = now.toLocaleTimeString();
    document.getElementById('time-two').textContent = timeString;
    
});
const btnThree = document.getElementById('btn-three');
const text3 = document.getElementById('threeButton');
btnThree.addEventListener('click', function(){
    text3.textContent = "You Have Completed The Task Optimize Home page at"
    const now = new Date ();
    const timeString = now.toLocaleTimeString();
    document.getElementById('time-three').textContent = timeString;
    
});
const btnFour = document.getElementById('btn-four');
const text4 = document.getElementById('fourButton');
btnFour.addEventListener('click', function(){
    text4.textContent = "You Have Completed The Task Add new emoji 🤲 at"
    const now = new Date ();
    const timeString = now.toLocaleTimeString();
    document.getElementById('time-four').textContent = timeString;
    
});
const btnFive = document.getElementById('btn-five');
const text5 = document.getElementById('fiveButton');
btnFive.addEventListener('click', function(){
    text5.textContent = "You Have Completed The Task Integrate OpenAI API at"
    const now = new Date ();
    const timeString = now.toLocaleTimeString();
    document.getElementById('time-five').textContent = timeString;
    
});
const btnSix = document.getElementById('btn-six');
const text6 = document.getElementById('sixButton');
btnSix.addEventListener('click', function(){
    text6.textContent = "You Have Completed The Task Improve Job searching at"
    const now = new Date ();
    const timeString = now.toLocaleTimeString();
    document.getElementById('time-six').textContent = timeString;
    
});


document.getElementById('clearBtn').addEventListener('click', function(){
    document.getElementById("oneButton").style.display ="none";
    document.getElementById("time-one").style.display ="none";
    document.getElementById("twoButton").style.display ="none";
    document.getElementById("time-two").style.display ="none";
    document.getElementById("threeButton").style.display ="none";
    document.getElementById("time-three").style.display ="none";
    document.getElementById("fourButton").style.display ="none";
    document.getElementById("time-four").style.display ="none";
    document.getElementById("fiveButton").style.display ="none";
    document.getElementById("time-five").style.display ="none";
    document.getElementById("sixButton").style.display ="none";
    document.getElementById("time-six").style.display ="none";
})


let colors = ['skyblue', 'pink', 'lightgreen', 'tomato', 'white',];
let i = 0;

function changeColor() {
  document.getElementById('btnColor').style.backgroundColor = colors[i];
  i = (i + 1) % colors.length;
}

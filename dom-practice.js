/*eslint-env browser*/

//STEP 1
function step1() {
    alert('Step 1 - I have been clicked');
}

//STEP 2
function myFunction() {
    document.getElementById("btnStep2")
        alert('Step 2 - I have been clicked');
}

//STEP 3
document.getElementById('btnStep3').addEventListener('click', function(){
    document.getElementById('btn3');
    alert('Step 3 - I have been clicked');
});

//STEP 4
let btn4 = document.querySelector('btn4');
function step4() {
    alert('Step 4 - I have been clicked');
};
myButton.addEventListener('click', clicked);

//STEP 5

//STEP 6
const redirect = document.getElementById("redirect");

redirect.addEventListener('click', e => {
    e.preventDefault();
    alert('You clicked on a link');
});
//STEP 7
const userInput = document.getElementById('text');
const btn7 = document.getElementById('step7');

btn7.addEventListener('click', e => {
    btn7.disabled = true;
    alert(userInput.value);    
});
//STEP 8
document.getElementById('btnStep8').addEventListener("click", e => {
    window.open('newpage.html', 'New Page', "width=300px; height=300px;")

});

//STEP 9
const start = document.getElementById('startStep9');
const stop = document.getElementById('stopStep9'); 

start.addEventListener ('click', e => {
    const timer = setInterval(() => {
        console.log('Learning JavaScript is fun!');
    stop.addEventListener('click', e => {
        const stopTimer = clearInterval(timer);
        });
    }, 2000);
});
//STEP 10
let items = (id => {
    return document.getElementById(id);
});

items('step10').addEventListener('click', () => {
    let pick = items('list').value;
    alert(pick);
});

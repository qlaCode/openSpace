///////////////////////////////////////////////////////////////////////
///////// DOM Selections //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
const btnOk = document.getElementById("btn-ok");
const iptPw = document.getElementById("input-pw");
const btnLaunch = document.getElementById("btn-launch");
//const pass = "1";
const rocket = document.getElementsByClassName("rocket")[0];
const pass = "TrustNo1";
let checkSection = Array.from(document.querySelector(".check-buttons").childNodes);
let leverSection = Array.from(document.querySelector(".levers").childNodes);


///////////////////////////////////////////////////////////////////////
///////// Disable Input at start //////////////////////////////////////
///////////////////////////////////////////////////////////////////////
function disableInputs(){
    checkSection.forEach(item => item.disabled = true);
    leverSection.forEach(item => item.disabled = true);
    btnLaunch.disabled = true;
}
disableInputs()

///////////////////////////////////////////////////////////////////////
///////// Adjust editability when pass is correct /////////////////////
///////////////////////////////////////////////////////////////////////
btnOk.addEventListener("click", () => {
    if(iptPw.value === pass){
        checkSection.forEach(item => item.disabled = false);
        leverSection.forEach(item => item.disabled = false);
        iptPw.disabled = true;
        btnOk.disabled = true;
    }
});

///////////////////////////////////////////////////////////////////////
///////// loop through each checkbox, return true if all true /////////
///////////////////////////////////////////////////////////////////////

checkSection.forEach(item =>
    item.addEventListener("change", () => checkChecks(item.checked))
)

let i = 0;
let j = false;
function checkChecks(item){
    if(item === true){
        //console.log(item.checked)
        i = i+1
    if(i === 6){
        j = true;
    }
    console.log(i);
    console.log(j);
}}
checkChecks();

///////////////////////////////////////////////////////////////////////
///////// loop through each lever, return true if all 100 /////////////
///////////////////////////////////////////////////////////////////////
leverSection.forEach(item =>
    item.addEventListener("change", () => checkLevers(item.value))
)

let k = 0;
let l = false;

function checkLevers(item){
    if(item == 100){
        console.log(item)
        k = k+1
    if(k === 5){
        l = true;
        }
    console.log(k);
    console.log(l);
}}
checkLevers();

///////////////////////////////////////////////////////////////////////
///////// monitor page for changes and unlock launch //////////////////
///////////////////////////////////////////////////////////////////////
document.addEventListener("change", unlockLaunch)
function unlockLaunch(){
    if(j && l){
        console.log("!!! LAUNCH OK !!!!");
        btnLaunch.disabled = false;
    }else{
    console.log("LAUNCH COMING")
    }
}

///////////////////////////////////////////////////////////////////////
///////// Move the rocket /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
btnLaunch.addEventListener("click", moveRocket)
function moveRocket(){
    console.log("ROCKET MOVING")

    rocket.animate([
        // keyframes
        { transform: 'translate(200px, -1000px) scale(0.3)' },
    ], {
        // timing options
        duration: 2000,
        iterations: 1
    });
}

function testPass14() {
    let inputs = document.querySelectorAll('input');
    for (let item of inputs) {
        item.onchange = function () {
            console.log('HAhA pass the test No14');
        }
    }
}
testPass14();


// probablement faut il convertir les node list en htmlcollection et donc utiliser getElemntsByClassNames

//.querySelectorAll() doesn't return a HTMLCollection but a NodeList, good with forEach
//getElementsByClassName return an HTMLCollection

/// loop through each lever, return true if all at value max
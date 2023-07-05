//callback functions intro

// const add=function( a,b,disp){

// }

const displayCompletion = () => {
    console.log("finished operation");
};

let add = (callback) => {
    let x = 2; y = 3;
    console.log(x + y);
    callback();
}

let sub = (callback) => {
    let x = 2; y = 3;
    console.log(x - y);
    callback();
}

add(displayCompletion);
sub(displayCompletion);

let name;

const wish = () => {
    console.log(`Hello ${name}`);
}

const getName = () => {
    setTimeout(() => {
        name = "GUVI";
        document.getElementById("home").innerHTML = "Happy Independence day!!!";
    }, 10000);
};
function startCounter(seconds) {
    let timer = seconds;
    const runTimer = 
        setInterval(() => {
            document.getElementById("home").innerHTML = timer;
            timer--;
            if (timer < 0) {
                clearInterval(runTimer);
            }
        }, 1000);

    
}

getName();
wish();
startCounter(5);
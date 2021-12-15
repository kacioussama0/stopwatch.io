let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');

let miliseconds = 0;

let second = 0;

let minute = 0;

let hour = 0;


let setminutes;

let setsecond;

let setmseconds;

let sethour;


start.addEventListener('click', () => {

    setmseconds = setInterval(() => {
        let milisecond = document.querySelector(".mseconds");
        miliseconds++;
        if (miliseconds >= 100)
            miliseconds = 0;

        milisecond.innerHTML = (miliseconds < 10) ? `:${miliseconds}` : `:${miliseconds}`
    }, 10)



    setsecond = setInterval(() => {
        let seconds = document.querySelector(".seconds");
        second++;
        if (second >= 60)
            second = 0;

        seconds.innerHTML = (second < 10) ? `0${second}` : `${second}`
    }, 1000)


    setminutes = setInterval(() => {
        let minutes = document.querySelector(".minutes");
        if (minute == 60)
            minute = 0;
        minute++;
        minutes.innerHTML = (minute < 10) ? `0${minute}:` : `${minute}:`
    }, 60000)

    sethour = setInterval(() => {
        let hours = document.querySelector(".hour");
        if (hour >= 60)
            hour = 0;
        hour++;
        hours.innerHTML = (hour < 10) ? `0${hour}:` : `${hour}:`
    }, 3600000)

}, )


stop.onclick = () => {
    clearInterval(setmseconds);
    clearInterval(setsecond)
    clearInterval(setminutes);
    clearInterval(sethour);
}

reset.onclick = () => {
    clearInterval(setmseconds);
    clearInterval(setsecond)
    clearInterval(setminutes);
    clearInterval(sethour);
    let milisecond = document.querySelector(".mseconds");
    let seconds = document.querySelector(".seconds");
    let minutes = document.querySelector(".minutes");
    let hour = document.querySelector(".hour");
    milisecond.innerHTML = `:00`;
    seconds.innerHTML = `:00`;
    minutes.innerHTML = `:00`;
    hour.innerHTML = `00`;
    miliseconds = 0;
    second = 0;
    minute = 0;
    hour = 0;
}



let color = document.querySelector('div.color');

color.addEventListener('click', (event) => {
    if (event.target.classList[1].substr(4) != "light") {
        document.body.classList = `bg-${event.target.classList[1].substr(4)} text-light`;
    } else {
        document.body.className = `bg-${event.target.classList[1].substr(4)} text-dark`;


    }

})
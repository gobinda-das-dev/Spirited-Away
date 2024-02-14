const musicBtn = document.querySelector('.sound');
let tl = gsap.timeline({ paused: true });

tl.to(".border", {
    scale: 2.5,
    opacity: 0,
    duration: 1.5,
    stagger: .5,
    repeat: -1
})

tl.play();

let audio = new Audio();
audio.src = 'https://dogstudio.co/app/themes/portfolio-2018/static/assets/audios/ambience.mp3';
audio.play();
audio.loop = true;

let count = 1;
musicBtn.onclick = () => {
    if(count) {
        tl.progress(1).pause();
        audio.pause();
        count--;
    } else {
        tl.restart();
        audio.play();
        count++;
    }
}
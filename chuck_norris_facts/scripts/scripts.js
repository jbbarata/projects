const frases = [
    "Chuck Norris threw a grenade and killed 50 people, then it exploded.",
    "Chuck Norris can kill two stones with one bird.",
    "Chuck Norris went to a feminist rally and came back with his shirt ironed and holding a sandwich.",
    "Chuck Norris doesn't dial the wrong number, you pick up the wrong phone.",
    "Chuck Norris can kill your imaginary friends.",
    "Chuck Norris can hear sign language.",
    "Chuck Norris knows Victoria's secret.",
    "Chuck Norris counted to infinity. Twice.",
    "Chuck Norris beat the sun in a staring contest.",
    "Chuck Norris can divide by 0.",
    "Outer space exists because it's afraid to be on the same planet with Chuck Norris.",
    "When Chuck Norris falls in water, Chuck Norris doesn't get wet. Water gets Chuck Norris.",
    "There is no theory of evolution. Just a list of creatures Chuck Norris has allowed to live.",
    "When Chuck Norris does a push up, he isn't lifting himself up, he's pushing the Earth down.",
    "Chuck Norris doesn’t read books. He stares them down until he gets the information he wants.",
    "Time waits for no man. Unless that man is Chuck Norris.",
    "Chuck Norris’ tears cure cancer. Too bad he has never cried.",
    "The dinosaurs looked at Chuck Norris the wrong way once. You know what happened to them.",
    "On the 7th day, God rested … Chuck Norris took over."
];

const btn = document.querySelector('.btn');
const fact= document.querySelector('.fact');
const img = document.querySelector('img');
btn.addEventListener('click', getChuckFact);

function getChuckFact(){
    const min = 0;
    const max = frases.length;
    const num = Math.floor(Math.random() * (max - min) + min);
    const frase = frases[num];
    console.log(max, num);
    fact.innerHTML = frase;
    img.classList.add('shake-it');
}

const animated = document.querySelector('img');
animated.addEventListener('animationend', () => {
    console.log('Animation ended');
    img.classList.remove('shake-it');
});
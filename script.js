const trigger = document.querySelector('main button.get_advice');
const dice = document.querySelector('main button.get_advice img');

const advice_id = document.querySelector('main p.advice_id');
const advice_text = document.querySelector('main p.quote');

trigger.onclick = (ev)=>{
    ev.stopPropagation();
    getAdvice();
    dice.classList.add('round');
    setTimeout(()=>{dice.classList.remove('round')},1000);
};

const getAdvice = ()=>{
    let url = 'https://api.adviceslip.com/advice';
    fetch(url)
    .then(resp=>resp.json())
    .then(res=>{
        console.log(res.slip);
        advice_id.innerHTML = `ADVICE #${res.slip.id}`;
        advice_text.innerHTML = `"${res.slip.advice}"`;
    })
    .catch(err=>console.log('error',err));
};
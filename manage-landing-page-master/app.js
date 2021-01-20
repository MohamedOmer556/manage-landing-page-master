const btns = document.querySelectorAll('.manual-btn');
const container = document.querySelector('.testimonials-container');
const test = document.querySelector('.test-3');
const btn1 = document.querySelector('.manual-1');
const btn2 = document.querySelector('.manual-2');
const btn3 = document.querySelector('.manual-3');
const btn4 = document.querySelector('.manual-4');

btns.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
            container.style.animation = 'none';
        if (!e.target.classList.contains('active')){
           const name = e.target.name;
           switch(name){
               case 'manual-1':
                container.style.transform = 'translateX(0%)';
                console.log(container);
                btn1.classList.add('active');
                btn2.classList.remove('active');
                btn3.classList.remove('active');
                btn4.classList.remove('active');
                break;
               case 'manual-2':
                container.style.transform = 'translateX(20%)';
                console.log(container);
                btn1.classList.remove('active');
                btn2.classList.add('active');
                btn3.classList.remove('active');
                btn4.classList.remove('active');
                break;
               case 'manual-3':
                container.style.transform = 'translateX(40%)';
                console.log(container);
                btn1.classList.remove('active');
                btn2.classList.remove('active');
                btn3.classList.add('active');
                btn4.classList.remove('active');
                break;
               case 'manual-4':
                container.style.transform = 'translateX(60%)';
                console.log(container);
                btn1.classList.remove('active');
                btn2.classList.remove('active');
                btn3.classList.remove('active');
                btn4.classList.add('active');
                break;
           }
           
        }
    });

});

    
const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.burger-close');
const nav = document.querySelector('.nav-bar');
const hero = document.querySelector('.hero');
const about = document.querySelector('.about');

//open
burger.addEventListener('click', ()=>{
burger.style.display = 'none';
burgerClose.style.display = 'block';
nav.classList.add('active');
document.body.classList.add('hide');
hero.classList.add('hide');
about.classList.add('hide');

});

//close
burgerClose.addEventListener('click', ()=>{
burger.style.display = 'block';
burgerClose.style.display = 'noe';
nav.classList.remove('active');
document.body.classList.remove('hide');
hero.classList.remove('hide');
about.classList.remove('hide');
});



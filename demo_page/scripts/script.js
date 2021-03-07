const btns = document.querySelectorAll('.faq');
        console.log(btns);

        for (botao of btns) {
            botao.addEventListener('click', function (outravariavel){
                outravariavel.target.parentNode.classList.toggle('active');
            });
        }
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function activeBtn(){
    for (let i =0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click',  function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += 'active-btn';

            const btnId = this.dataset.id
            
            sections.forEach((section) => {
                section.classList.remove('active')
                if(section.id === btnId){
                    section.classList.add('active')
                }


            })
            

           
        })
    }
}


activeBtn()

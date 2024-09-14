const toggleButton = document.getElementById('button') as HTMLElement
const skill = document.getElementById('skills') as HTMLElement

toggleButton.addEventListener('click', ()=> {
    if(skill.style.display === 'none' ){
        skill.style.display = 'block'
    }
    else {
        skill.style.display = 'none'
    }
});
const form = document.getElementById('resume') as HTMLFormElement
const resumeGenerate = document.getElementById('resume-generate') as HTMLDivElement

form.addEventListener('submit', (event:Event) => {
    event.preventDefault()

    const nameInput = (document.getElementById('name') as HTMLInputElement).value
    const emailInput = (document.getElementById('email') as HTMLInputElement).value
    const phoneInput = (document.getElementById('phone') as HTMLInputElement).value
    const educationInput = (document.getElementById('education') as HTMLInputElement).value
    const experienceInput = (document.getElementById('experience') as HTMLInputElement).value
    const skillsInput = (document.getElementById('skills') as HTMLInputElement).value

    const resume = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${nameInput}</span></p>
    <p><b>Email:</b><span contenteditable="true">${emailInput}</span></p>
    <p><b>Phone:</b><span contenteditable="true">${phoneInput}</span></p>
    
    <h3>Education:</h3>
    <p contenteditable="true">${educationInput}</p>

    <h3>Experience:</h3>
    <p contenteditable="true">${experienceInput}</p>

    <h3>Skills:</h3>
    <p contenteditable="true">${skillsInput}</p>
    `;

    if(resumeGenerate){
        resumeGenerate.innerHTML = resume
    }
    else{
        console.log('The resume required field is missing.')
    }
});
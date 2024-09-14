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
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${nameInput}</p>
    <p><b>Email:</b>${emailInput}</p>
    <p><b>Phone:</b>${phoneInput}</p>
    
    <h3>Education:</h3>
    <p>${educationInput}</p>

    <h3>Experience:</h3>
    <p>${experienceInput}</p>

    <h3>Skills:</h3>
    <p>${skillsInput}</p>
    `;

    if(resumeGenerate){
        resumeGenerate.innerHTML = resume
    }
    else{
        console.log('The resume required field is missing.')
    }
});
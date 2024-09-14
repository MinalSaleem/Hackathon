const form = document.getElementById('resume') as HTMLFormElement;
const resumeGenerate = document.getElementById('resume-generate') as HTMLDivElement;
const shareableLinkDiv = document.getElementById('shareable-link-div') as HTMLDivElement;
const shareableLink = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadpdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

form.addEventListener('submit', (event:Event) => 
    {
        event.preventDefault()

        const usernameInput = (document.getElementById('username') as HTMLInputElement).value;
        const nameInput = (document.getElementById('name') as HTMLInputElement).value;
        const emailInput = (document.getElementById('email') as HTMLInputElement).value;
        const phoneInput = (document.getElementById('phone') as HTMLInputElement).value;
        const educationInput = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experienceInput = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skillsInput = (document.getElementById('skills') as HTMLTextAreaElement).value;

        const resumeInput = {
            nameInput,
            emailInput,
            phoneInput,
            educationInput,
            experienceInput,
            skillsInput,
        }
        localStorage.setItem(usernameInput, JSON.stringify(resumeInput));

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

        resumeGenerate.innerHTML = resume

        const shareableUrl = `${window.location.origin}?usernameInput=${encodeURIComponent(usernameInput)}`;

        shareableLinkDiv.style.display = 'block';
        shareableLink.href = shareableUrl;
        shareableLink.textContent = shareableUrl;
    }
);

downloadpdfButton.addEventListener('click', () => {
    window.print();
})

window.addEventListener('DOMContentLoaded', () => {
    const url = new URLSearchParams(window.location.search);
    const usernameInput = url.get('usernameInput');

    if(usernameInput){
        const savedResume = localStorage.getItem(usernameInput);

        if(savedResume){
            const resumeData = JSON.parse(savedResume);
            (document.getElementById('username') as HTMLInputElement).value = usernameInput;
            (document.getElementById('name') as HTMLInputElement).value = resumeData.nameInput;
            (document.getElementById('email') as HTMLInputElement).value = resumeData.emailInput;
            (document.getElementById('phone') as HTMLInputElement).value = resumeData.phoneInput;
            (document.getElementById('education') as HTMLTextAreaElement).value = resumeData.educationInput;
            (document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experienceInput;
            (document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skillsInput;
        };
    };
});
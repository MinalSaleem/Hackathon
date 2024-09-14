var form = document.getElementById('resume');
var resumeGenerate = document.getElementById('resume-generate');
var shareableLinkDiv = document.getElementById('shareable-link-div');
var shareableLink = document.getElementById('shareable-link');
var downloadpdfButton = document.getElementById('download-pdf');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var usernameInput = document.getElementById('username').value;
    var nameInput = document.getElementById('name').value;
    var emailInput = document.getElementById('email').value;
    var phoneInput = document.getElementById('phone').value;
    var educationInput = document.getElementById('education').value;
    var experienceInput = document.getElementById('experience').value;
    var skillsInput = document.getElementById('skills').value;
    var resumeInput = {
        nameInput: nameInput,
        emailInput: emailInput,
        phoneInput: phoneInput,
        educationInput: educationInput,
        experienceInput: experienceInput,
        skillsInput: skillsInput,
    };
    localStorage.setItem(usernameInput, JSON.stringify(resumeInput));
    var resume = "\n        <h2><b>Editable Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b><span contenteditable=\"true\">".concat(nameInput, "</span></p>\n        <p><b>Email:</b><span contenteditable=\"true\">").concat(emailInput, "</span></p>\n        <p><b>Phone:</b><span contenteditable=\"true\">").concat(phoneInput, "</span></p>\n        \n        <h3>Education:</h3>\n        <p contenteditable=\"true\">").concat(educationInput, "</p>\n\n        <h3>Experience:</h3>\n        <p contenteditable=\"true\">").concat(experienceInput, "</p>\n\n        <h3>Skills:</h3>\n        <p contenteditable=\"true\">").concat(skillsInput, "</p>\n        ");
    resumeGenerate.innerHTML = resume;
    var shareableUrl = "".concat(window.location.origin, "?usernameInput=").concat(encodeURIComponent(usernameInput));
    shareableLinkDiv.style.display = 'block';
    shareableLink.href = shareableUrl;
    shareableLink.textContent = shareableUrl;
});
downloadpdfButton.addEventListener('click', function () {
    window.print();
});
window.addEventListener('DOMContentLoaded', function () {
    var url = new URLSearchParams(window.location.search);
    var usernameInput = url.get('usernameInput');
    if (usernameInput) {
        var savedResume = localStorage.getItem(usernameInput);
        if (savedResume) {
            var resumeData = JSON.parse(savedResume);
            document.getElementById('username').value = usernameInput;
            document.getElementById('name').value = resumeData.nameInput;
            document.getElementById('email').value = resumeData.emailInput;
            document.getElementById('phone').value = resumeData.phoneInput;
            document.getElementById('education').value = resumeData.educationInput;
            document.getElementById('experience').value = resumeData.experienceInput;
            document.getElementById('skills').value = resumeData.skillsInput;
        }
        ;
    }
    ;
});

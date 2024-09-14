var form = document.getElementById('resume');
var resumeGenerate = document.getElementById('resume-generate');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameInput = document.getElementById('name').value;
    var emailInput = document.getElementById('email').value;
    var phoneInput = document.getElementById('phone').value;
    var educationInput = document.getElementById('education').value;
    var experienceInput = document.getElementById('experience').value;
    var skillsInput = document.getElementById('skills').value;
    var resume = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(nameInput, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(emailInput, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\">").concat(phoneInput, "</span></p>\n    \n    <h3>Education:</h3>\n    <p contenteditable=\"true\">").concat(educationInput, "</p>\n\n    <h3>Experience:</h3>\n    <p contenteditable=\"true\">").concat(experienceInput, "</p>\n\n    <h3>Skills:</h3>\n    <p contenteditable=\"true\">").concat(skillsInput, "</p>\n    ");
    if (resumeGenerate) {
        resumeGenerate.innerHTML = resume;
    }
    else {
        console.log('The resume required field is missing.');
    }
});

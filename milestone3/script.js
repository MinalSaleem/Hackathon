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
    var resume = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(nameInput, "</p>\n    <p><b>Email:</b>").concat(emailInput, "</p>\n    <p><b>Phone:</b>").concat(phoneInput, "</p>\n    \n    <h3>Education:</h3>\n    <p>").concat(educationInput, "</p>\n\n    <h3>Experience:</h3>\n    <p>").concat(experienceInput, "</p>\n\n    <h3>Skills:</h3>\n    <p>").concat(skillsInput, "</p>\n    ");
    if (resumeGenerate) {
        resumeGenerate.innerHTML = resume;
    }
    else {
        console.log('The resume required field is missing.');
    }
});

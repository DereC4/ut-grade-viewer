const submitButton = document.getElementById('subBut');
submitButton.addEventListener("click", parseName);
function parseName() {
    let className = '';
    let classNum = '';
    let department = '';
    className = document.getElementById('courseName').value;
    classNum = document.getElementById('courseNum').value;
    department = document.getElementById('courseField').value;
    if(department.length > 3) {
        alert("Invalid Department");
        return;
    } 
    if(className == '' && classNum == '' && department == '') {
        alert("At least fill out the form...");
        return;
    }
    if(className == '' || classNum == '' || department == '') {
        alert("Missing something?");
        return;
    }
    console.log(department, classNum, className);
    PapaParse(department, classNum, className);
}

function PapaParse(department, num, name) {
    let classData = '';
    fetch('/data/2022 Fall.json')
    .then(res => res.json())
    .then(data => {
      obj = data;
     })
    .then(() => {
      console.log(obj);
     });
   
}
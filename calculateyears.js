// // Age Calculator; Approximate answer

function ageInYears() {
    var birthYear = prompt('What year were you born?');
    var ageInYearss = (2021 - birthYear) ;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInYearss + ' years old.')
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1); 
}
function reset () {
    document.getElementById('ageInYears').remove();
}

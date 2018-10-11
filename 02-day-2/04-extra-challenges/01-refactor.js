
const applicants = [
  { 
    name: 'Jane', 
    age: 21, 
    academy: 'CODE', 
    score: 12, 
    dutchOrEu: true, 
  }, { 
    name: 'Marian', 
    age: 12, 
    academy: 'CODE', 
    score: 30, 
    dutchOrEu: true, 
  }, { 
    name: 'George', 
    age: 43, 
    academy: 'DESIGN', 
    score: 12, 
    dutchOrEu: false, 
  }
];

let applicantsCodeAcademy = [];
let applicantDesignAcademy = [];

function welcomeMessage(applicant) {
  console.log(`Welcome ${applicant.name} to the ${applicant.academy} Academy`);
  displayVisaWarning(applicant.dutchOrEu);
}

function displayVisaWarning(dutchOrEU) {
  if (dutchOrEU) return null;
  return 'Do you have the right visa?';
}

function scoreTooLow(score, minScore) {
  return score < minScore;
}

function addStudentToAcademy(applicant, minScore){
  if (scoreTooLow(applicant.score, minScore)) return 'Sorry, your score is too low';
  applicantsCodeAcademy.push();
  return welcomeMessage(applicant);
}


function addApplicantsToAcademy(applicants) {
  applicants.forEach(function(applicant){
    if (applicant.age < 18) return 'Sorry, you are too young';

    if (applicant.academy === 'CODE') return addStudentToAcademy(applicant, 37);
    if (applicant.academy === 'DESIGN') return addStudentToAcademy(applicant, 12);

    return 'Sorry, something went wrong';
  })
}


console.log(addApplicantsToAcademy(applicants));

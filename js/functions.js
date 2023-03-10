

 // Array of Title for Skill Pages 
let skillTitlesArray = ["3D PRINTING", "SOLDERING", "PROGRAMMING", 
                        "GRAPHIC DESIGN", "PHOTO/VIDEO EDITING", "3D MODELING", 
                        "TIME MANAGEMENT", "LANGUAGES", "MARKETING", 
                        "REMOTE MEETING\nTROUBLESHOOT"];

// ppl labels that will be populated on the Skill Pages       
let spacesArray = ["p0_space", "p1_space", "p2_space",
                     "p3_space", "p4_space", "p5_space",
                     "p6_space", "p7_space", "p8_space",
                     "p9_space"];


let statusArray = ["p0_status", "p1_status", "p2_status",
                     "p3_status", "p4_status", "p5_status",
                     "p6_status", "p7_status", "p8_status",
                     "p9_status"];                 

// Person Object                
function Person(first, last, org, print3d, solder, prog, graph, photo, model3d, time, lang, market, remote, stat) {
    this.status = stat;
  
    // personal info
    this.firstName = first;
    this.lastName = last;
    this.orgName = org;
    // contact info
    this.email = "none";
    this.phoneNumber = "none";
    this.socialMedia = "none";
    // skills info
    this.printing3D = print3d;  // 1
    this.soldering = solder;    // 2
    this.programing = prog;     // 3
    this.graphicDesign = graph; // 4
    this.photoVideo = photo;    // 5
    this.modeling3D = model3d;  // 6
    this.timeManagement = time; // 7
    this.languages = lang;      // 8
    this.marketing = market;    // 9
    this.remoteMeet = remote;   // 10 
    // skills descriptions
    this.printing3D_descr =       "empty"; // #1
    this.soldering_descr =        "empty"; // #2
    this.programing_descr =       "empty"; // #3
    this.graphicDesign_descr =    "empty"; // #4
    this.photoVideo_descr =       "empty"; // #5
    this.modeling3D_descr =       "empty"; // #6
    this.timeManagement_descr =   "empty"; // #7
    this.languages_descr =        "empty"; // #8
    this.marketing_descr =        "empty"; // #9
    this.remoteMeet_descr =       "empty"; // #10


    // methods to write skill descriptions
    this.addDescription = function (skillNum, description) {
        if (skillNum == 1){
          this.printing3D_descr =   description; // #1
        } else if (skillNum == 2){
          this.soldering_descr =    description; // #2
        } else if (skillNum == 3){
          this.programing_descr =   description; // #3
        } else if (skillNum == 4){
          this.graphicDesign_descr = description; // #4
        } else if (skillNum == 5){
          this.photoVideo_descr =   description; // #5
        } else if (skillNum == 6){
          this.modeling3D_descr =   description; // #6
        } else if (skillNum == 7){
          this.timeManagement_descr = description; // #7
        } else if (skillNum == 8){
          this.languages_descr =    description; // #8
        } else if (skillNum == 9){
          this.marketing_descr =    description; // #9
        } else if (skillNum == 10){
          this.remoteMeet_descr =    description; // #10
        }
    }
    
    // methods to write contact info
    this.addEmail = function (input) { this.email = input;}
    this.addPhone = function (input) { this.phoneNumber = input; }
    this.addSocial = function (input) { this.socialMedia = input; }
}

// 9 People Object to create mock data! 
let person0 = new Person("Kenny", "Ackerman",   "Survey Corps",         0, 0, 1, 1, 1, 0, 1, 1, 1, 1,1);
let person1 = new Person("Adriana", "Olvera",   "NVIDIA Industries",    1, 0, 1, 1, 1, 0, 0, 1, 1, 0,0);
let person2 = new Person("Mira", "Sweis",       "Microsoft",            1, 0, 0, 1, 1, 1, 0, 1, 1, 0,1);
let person3 = new Person("Jazmin", "Santoyo",   "GE Navigation",        1, 1, 0, 1, 1, 1, 0, 0, 1, 0,0);
let person4 = new Person("Alejandro", "Perez",  "Analog Devices Inc.",  1, 1, 0, 0, 1, 1, 1, 0, 1, 1,1);
let person5 = new Person("Labiba", "Hussien",   "FitBit Corporation",   1, 1, 1, 0, 1, 1, 1, 0, 0, 1,0);
let person6 = new Person("Erwin", "Smith",      "Bay Computer Asso.",   1, 1, 1, 0, 0, 1, 1, 1, 0, 1,1);
let person7 = new Person("Mike", "Zacharias",   "OnShape Inc.",         0, 1, 1, 1, 0, 1, 1, 1, 0, 1,0);
let person8 = new Person("Viktor", "Nikiforov", "Ekotrope Laboratory",  0, 1, 1, 1, 0, 0, 1, 1, 1, 1,1);
let peopleArray = [person0, person1, person2, person3, person4, person5, person6, person7, person8];


// MOVING THROUGH PAGES /////////////////////////////////////////////////////////////////////////////    
// From Home --> Skill Menu
function start(){
  window.location.replace('Pages/skills_menu.html');
}
// From Skill Menu --> Skill Page
function setSkill_moveSkillPage (skillNum){
  sessionStorage.setItem("Skill_Title", skillTitlesArray[skillNum]);
  sessionStorage.setItem("Skill_Num", skillNum);
  window.location.replace('skill_page.html');
}
// From Skill Menu --> Home
function backToWelcome(){
  window.location.replace('../index.html');
}
// From Skill Page --> Skill Menu
function backToSkillsMenu(){
  window.location.replace('skills_menu.html');
}

function movePersonPage(personNum){
  sessionStorage.setItem("Person_Num",personNum);
  window.location.replace('person_page.html');
}
////////////////////////////////////////////////////////////////////////////////////////////////////


function updateSkillPage () {

  console.log("Skill Selected: " + sessionStorage.getItem("Skill_Title"));

  title_obj = document.getElementById("pageTitle"); // get title object using its ID
  title_obj.innerText = sessionStorage.getItem("Skill_Title");
  setPeopleList();
}

function setPeopleList(){
  
  skillNum = sessionStorage.getItem("Skill_Num");

  var space = 0;

  console.log("CHECKING FOR SKILL: " + skillTitlesArray[skillNum]);

  for(var i = 0; i < peopleArray.length; i++){ // go through the people in the array
    
    console.log( i + "# "  + peopleArray[i].firstName + "has Skill? -> " + checkSkill(peopleArray[i],skillNum));

    if (checkSkill(peopleArray[i],skillNum) == "YES"){
      space_obj = document.getElementById(spacesArray[space]);
      space_obj.innerText = peopleArray[i].firstName + " " + peopleArray[i].lastName;
      // STYLE
      space_obj.style.color = 'white';
      space_obj.style.background = 'rgb(0, 1, 88)'
      space_obj.style.width = '200px';
      space_obj.style.fontSize = '20px'


      space_obj2 = document.getElementById(statusArray[space]);
      // STYLE
      space_obj2.style.color = 'white';
      space_obj2.style.width = '100px';
      space_obj2.style.fontSize = '20px'

      if (peopleArray[i].status == 1){
        space_obj2.style.background = 'rgb(40, 141, 0)'
        space_obj2.innerText = "IN";
      } else {
        space_obj2.style.background = 'rgb(208, 0, 0)'
        space_obj2.innerText = "OUT";
      }

      space = space + 1;
    }

  }

  for (var j = space; j < spacesArray.length-1; j++){
    space_obj = document.getElementById(spacesArray[j]);
    space_obj.style.background = "rgb(237, 249, 255)";
    space_obj.style.borderWidth = '0px'
    space_obj.innerText = " "
    space_obj.style.fontSize = '0px'

    space_obj2 = document.getElementById(statusArray[j]);
    space_obj2.style.background = "rgb(237, 249, 255)";
    space_obj2.style.borderWidth = '0px'
    space_obj2.innerText = " "
    space_obj2.style.fontSize = '0px'
  }
}

function checkSkill (person, skillNum){
  
  hasSkill = "NO";

  if (skillNum == 0 && person.printing3D == 1) {hasSkill = "YES"}
  if (skillNum == 1 && person.soldering == 1) {hasSkill = "YES"}
  if (skillNum == 2 && person.programing == 1) {hasSkill = "YES"}
  if (skillNum == 3 && person.graphicDesign == 1) {hasSkill = "YES"}
  if (skillNum == 4 && person.photoVideo == 1) {hasSkill = "YES"}
  if (skillNum == 5 && person.modeling3D == 1) {hasSkill = "YES"}
  if (skillNum == 6 && person.timeManagement == 1) {hasSkill = "YES"}
  if (skillNum == 7 && person.languages == 1) {hasSkill = "YES"}
  if (skillNum == 8 && person.marketing == 1) {hasSkill = "YES"}
  if (skillNum == 9 && person.remoteMeet == 1) {hasSkill = "YES"}
  
  return hasSkill;
}







/*function populateExpertsList(skillNum) {
  
  let listIndex = 0;
  
  for (var i = 0; i < peopleArray.length; i++){ // iterating through peopleArray
    
    var skillCheck = 0;                         // person doesn't have skill
    
    if (skillNum == 1){
      peopleArray[i].printing3D
    }
  }
}

*/
// firebase analytics 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Import the functions you need from the SDKs you need
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC_jgj9zfAr5KIVQXlKPXby5Od2BOaTnGM",
//   authDomain: "rpi-mlx90614-821e6.firebaseapp.com",
//   databaseURL: "https://rpi-mlx90614-821e6-default-rtdb.firebaseio.com",
//   projectId: "rpi-mlx90614-821e6",
//   storageBucket: "rpi-mlx90614-821e6.appspot.com",
//   messagingSenderId: "213693056033",
//   appId: "1:213693056033:web:cca76584faaa68919b0f60",
//   measurementId: "G-Q5NXQZZXN4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// //import{getDatabase, ref, child, onValue, get} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";

// const db = getDatabase();


// function GetDataRealTime(){

//}

 // Array of Title for Skill Pages 
let skillTitlesArray = ["3D PRINTING", "SOLDERING", "PROGRAMMING", "GRAPHIC DESIGN", 
                        "PHOTO/VIDEO EDITING", "3D MODELING", "TIME MANAGEMENT", "LANGUAGES",
                        "MARKETING", "REMOTE MEETINGS"];

// ppl labels that will be populated on the Skill Pages       
let spacesArray = ["p0_space", "p1_space", "p2_space", "p3_space", "p4_space", "p5_space",
                   "p6_space", "p7_space", "p8_space", "p9_space"];


let statusArray = ["p0_status", "p1_status", "p2_status", "p3_status", "p4_status", "p5_status",
                   "p6_status", "p7_status", "p8_status","p9_status"];                 

// Person Object                
function Person(first, last, org, print3d, solder, prog, graph, photo, model3d, time, 
                lang, market, remote, stat) {
    
    // connectory status
    this.status = stat;
    // personal info
    this.firstName = first;
    this.lastName = last;
    this.picture = "../images/empty.jpeg";
    this.orgName = org;
    // contact info
    this.contact1_string = "none";
    this.contact2_string = "none";
    this.contact1_info = "none";
    this.contact2_info = "none";
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
    this.printing3D_descr = "description for 3D printing skills goes here _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _";     
    this.soldering_descr = "description for soldering skills goes here _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _";    
    this.programing_descr = "description for programming skills goes here _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _";      
    this.graphicDesign_descr = "description for graphic design skills goes here _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _";      
    this.photoVideo_descr = "description for photo and video skills goes here _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _";      
    this.modeling3D_descr = "description for 3D modeling skills goes here _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _";      
    this.timeManagement_descr = "description for time management skills goes here _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _";      
    this.languages_descr = "description for languages skills goes here _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _";      
    this.marketing_descr = "description for marketing skills goes here _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _";      
    this.remoteMeet_descr = "description for remote meeting skills goes here _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _";            
    
    // methods to write skill descriptions
    this.addDescription = function (skillNum, description) {
        if (skillNum == 1){ this.printing3D_descr = description;} // #1 
        else if (skillNum == 2){ this.soldering_descr = description;} // #2
        else if (skillNum == 3){ this.programing_descr = description;} // #3
        else if (skillNum == 4){ this.graphicDesign_descr = description;} // #4
        else if (skillNum == 5){ this.photoVideo_descr = description;} // #5
        else if (skillNum == 6){ this.modeling3D_descr = description;} // #6
        else if (skillNum == 7){ this.timeManagement_descr = description;} // #7
        else if (skillNum == 8){ this.languages_descr = description;} // #8
        else if (skillNum == 9){ this.marketing_descr = description;} // #9
        else if (skillNum == 10){ this.remoteMeet_descr = description;} // #10
    }
 
    // methods to write contact info
    this.addcontact1 = function (input_string, input_info) { 
      this.contact1_string = input_string; 
      this.contact1_info = input_info;
    }

    this.addcontact2 = function (input_string, input_info) { 
      this.contact2_string = input_string; 
      this.contact2_info = input_info;
    }

    this.addPicture = function (input){ this.picture = input;}

    this.getSkill = function(skillNum){
      if (skillNum == 1){ return this.printing3D_descr; }// #1
      else if (skillNum == 2){ return this.soldering_descr; }// #2
      else if (skillNum == 3){ return this.programing_descr; }// #3
      else if (skillNum == 4){ return this.graphicDesign_descr; }// #4
      else if (skillNum == 5){ return this.photoVideo_descr; }// #5
      else if (skillNum == 6){ return this.modeling3D_descr; }// #6
      else if (skillNum == 7){ return this.timeManagement_descr; }// #7
      else if (skillNum == 8){ return this.languages_descr; }// #8
      else if (skillNum == 9){ return this.marketing_descr; }// #9
      else if (skillNum == 10){ return this.remoteMeet_descr; }// #10
    }
}

// 9 People Objects to create mock data! 
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

// Adding profile pictures to each people
person0.addPicture("../images/kenny.PNG");
person1.addPicture("../images/adriana.PNG");
person2.addPicture("../images/mira.PNG");
person3.addPicture("../images/jazmin.PNG");
person4.addPicture("../images/alejandro.PNG");
person5.addPicture("../images/labiba.PNG");
person6.addPicture("../images/erwin.PNG");
person7.addPicture("../images/mike.PNG");
person8.addPicture("../images/viktor.PNG");

// Adding contact info for people
person0.addcontact1("INSTAGRAM","@kenny_acker"); person0.addcontact2("EMAIL", "kennyackerman@gmail.com");
person1.addcontact1("INSTAGRAM", "@adriana_olv15"); person1.addcontact2("DISCORD", "AdrianaOC#1108");
person2.addcontact1("LINKEDIN","www.linkedin.com/in/mira-06"); person2.addcontact2("DISCORD", "MiraSW#1234");
person3.addcontact1("LINKEDIN","www.linkedin.com/in/Jazmin-SH08"); person3.addcontact2("INSTAGRAM", "@jaz_santoyo11");
person4.addcontact1("EMAIL", "ale_perez@yahoo.com"); person4.addcontact2("DISCORD", "Alejandro06#5432");
person5.addcontact1("PHONE", "(847) 223-3451"); person5.addcontact2("EMAIL", "labiba_hussien@hotmail.com");
person6.addcontact1("WEBSITE", "surverycorps.org"); person6.addcontact2("PHONE", "(340) 535 - 7556");
person7.addcontact1("LINKEDIN", "www.linkedin.com/in/Mike-Zacharias"); person7.addcontact2("PHONE", "(228) 112 - 3455");
person8.addcontact1("DISCORD", "ViktorYuri#3333"); person8.addcontact2("WEBSITE", "YuriOnIce.com");



// MOVING FORWARD THRU PAGES ///////////////////////////////////////////////////////////////////////    

// From Home --> Skill Menu
function start(){
  window.location.replace('Pages/skills_menu.html');
}
// From Skill Menu --> Skill Page
function setSkill_moveSkillPage (skillNum){
  sessionStorage.setItem("Skill_Title", skillTitlesArray[skillNum]);
  sessionStorage.setItem("Skill_Num", skillNum);
  window.location.replace('skill_page.html'); // page change
}
// From Skill Page --> Person's Page
function movePersonPage(tagName){
  element = document.getElementById(tagName);
  let name = element.innerText;
  sessionStorage.setItem("Person_Name",name);
  window.location.replace('person_page.html'); // page change
}
// MOVING BACK THRU PAGES ///////////////////////////////////////////////////////////////////////    

// From Person's Page --> Skill Page
function backToSkillsPage(){
  window.location.replace('skill_page.html'); // page change
}
// From Skill Page --> Skill Menu
function backToSkillsMenu(){
  window.location.replace('skills_menu.html'); // page change
}
// From Skill Menu --> Home
function backToWelcome(){
  window.location.replace('../index.html'); // page change
}
///////////////////////////////////////////////////////////////////////////////////////////////////


function updateSkillPage () {
  // log to check right skill
  console.log("Skill Selected: " + sessionStorage.getItem("Skill_Title"));
  // update skill title
  title_obj = document.getElementById("pageTitle"); // get title object using its ID
  title_obj.innerText = sessionStorage.getItem("Skill_Title");
  // update people list
  setPeopleList();
}

function setPeopleList(){
  
  skillNum = sessionStorage.getItem("Skill_Num");

  var space = 0;

  console.log("CHECKING FOR SKILL: " + skillTitlesArray[skillNum]);

  for(var i = 0; i < peopleArray.length; i++){ // go through the people in the array
    
    console.log( i + "# "  + peopleArray[i].firstName + " has Skill? -> " + checkSkill(peopleArray[i],skillNum));

    if (checkSkill(peopleArray[i],skillNum) == "YES"){
      space_obj = document.getElementById(spacesArray[space]);
      space_obj.innerText = peopleArray[i].firstName + " " + peopleArray[i].lastName;
      // STYLE
      space_obj.style.color = 'white';
      space_obj.style.background = 'rgb(0, 1, 88)';
      space_obj.style.width = '55vw';
      space_obj.style.height = '5vw';
      space_obj.style.fontSize = '3vw'
      space_obj.style.borderStyle = 'solid'; 
      space_obj.style.borderColor = 'rgb(0, 1, 88)';

      // Connectory Status Tag Set Up //////////////////////////////////////////////
      space_obj2 = document.getElementById(statusArray[space]);
      
      // Making Letters White
      space_obj2.style.color = 'white';
      space_obj2.style.width = '25vw';
      space_obj2.style.fontSize = '3vw'
      space_obj2.style.height = '5vw';

      // Displaying Connectory Status (Red / Green)
      if (peopleArray[i].status == 1){
        space_obj2.style.background = 'rgb(40, 141, 0)';
        space_obj2.innerText = "IN";
        space_obj2.style.borderStyle = 'solid'; 
        space_obj2.style.borderColor = 'rgb(40, 141, 0)';
      } else {
        space_obj2.style.background = 'rgb(208, 0, 0)';
        space_obj2.innerText = "OUT";
        space_obj2.style.borderStyle = 'solid'; 
        space_obj2.style.borderColor = 'rgb(208, 0, 0)';
      }
      // Move to next person ///////////////////////////////////////////////////////
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

// Function to check if a person has a specific skill
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





function loadProfile(){
 
  // get the name of the person we selected
  text = sessionStorage.getItem("Person_Name");
  console.log( "Saved Name:" + text)
  
  // find the person's object
  if (sessionStorage.getItem("Person_Name") == "Kenny Ackerman"){ personPicked = person0; console.log("showing 0") }
  if (sessionStorage.getItem("Person_Name") == "Adriana Olvera"){ personPicked = person1; console.log("showing 1") }
  if (sessionStorage.getItem("Person_Name") == "Mira Sweis"){ personPicked = person2; console.log("showing 2") }
  if (sessionStorage.getItem("Person_Name") == "Jazmin Santoyo"){ personPicked = person3; console.log("showing 3") }
  if (sessionStorage.getItem("Person_Name") == "Alejandro Perez"){ personPicked = person4; console.log("showing 4") }
  if (sessionStorage.getItem("Person_Name") == "Labiba Hussien"){ personPicked = person5; console.log("showing 5") }
  if (sessionStorage.getItem("Person_Name") == "Erwin Smith"){ personPicked = person6; console.log("showing 6")}
  if (sessionStorage.getItem("Person_Name") == "Mike Zacharias"){ personPicked = person7; console.log("showing 7") }
  if (sessionStorage.getItem("Person_Name") == "Viktor Nikiforov"){ personPicked = person8; console.log("showing 8") }

  // load their profile pic
  pic_obj = document.getElementById("profile_pic");
  console.log(personPicked.picture);
  pic_obj.src = personPicked.picture;

  skillNum = sessionStorage.getItem("Skill_Num");
  skillInt = parseInt(skillNum) + 1;


  //console.log(personPicked.getSkill(skillInt));

  // load their name
  element = document.getElementById("person_name");
  element.innerText = text;

  // load skill headline
  element = document.getElementById("descrip_headline");

  //console.log("skill num = " + skillNum);
  element.innerText = "EXPERIENCE IN " + skillTitlesArray[skillNum];

  // load skill description
  //element = document.getElementById("descrip_content");
  //element.innerText = personPicked.getSkill(skillInt);

  // load status connect_status
  space_obj2 = document.getElementById("connect_status");
  // Displaying Connectory Status (Red / Green)
  if (personPicked.status == 1){
    space_obj2.style.background = 'rgb(40, 141, 0)';
    space_obj2.innerText = "IN THE CONNECTORY";
    space_obj2.style.borderColor = 'rgb(40, 141, 0)';
  } else {
    space_obj2.style.background = 'rgb(208, 0, 0)';
    space_obj2.innerText = "NOT IN THE CONNECTORY";
    space_obj2.style.borderColor = 'rgb(208, 0, 0)';
  }

  // load their contact1
  element = document.getElementById("contact1_st");
  element.innerText = personPicked.contact1_string;
  element = document.getElementById("contact1");
  element.innerText = personPicked.contact1_info;

  // load their contact2
  element = document.getElementById("contact2_st");
  element.innerText = personPicked.contact2_string;
  element = document.getElementById("contact2");
  element.innerText = personPicked.contact2_info;
}


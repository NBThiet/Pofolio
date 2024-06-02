var tab_child_1 = document.querySelector(".tab_child_1");
var tab_child_2 = document.querySelector(".tab_child_2");
var tab_child_3 = document.querySelector(".tab_child_3");

var screen1 = document.querySelector(".screen1");
var screen2 = document.querySelector(".screen2");
var screen3 = document.querySelector(".mainScreen3");

var menuBtnHome = document.querySelector(".menuBtn1")
var menuBtnPrj = document.querySelector(".menuBtn2")
var menuBtnSkill = document.querySelector(".menuBtn3")


var ProjectScreen = document.querySelector(".containerProjects")
var HomeScreen = document.querySelector(".containerInf")
var SkillScreen = document.querySelector(".containerMainSkill")

var btnMenu = document.querySelector(".fa-bars");
var MenuMB = document.querySelector(".MenuMB");

var btnEmail = document.querySelector(".fa-address-card");
var EmailMB = document.querySelector(".EmailMB");
var emailContact = document.querySelector(".email")
var popover = document.querySelector(".popover")

//popover 
var checkDisplay = true
emailContact.onclick = () =>{
  if(checkDisplay){
    popover.style.display = "block"
    checkDisplay = false
  }else{
    popover.style.display = "none"
    checkDisplay = true
  }
}
// menu
menuBtnHome.onclick = () =>{
  
  menuBtnPrj.style.color = "rgb(131, 131, 147)"
  menuBtnHome.style.color = '#5adeff'
  menuBtnSkill.style.color = 'rgb(131, 131, 147)'
  ProjectScreen.style.display = "none"
  HomeScreen.style.display = "block"
SkillScreen.style.display = "none"
}
menuBtnPrj.onclick = () =>{
  
  menuBtnPrj.style.color = "#5adeff"
  menuBtnHome.style.color = 'rgb(131, 131, 147)'
  menuBtnSkill.style.color = 'rgb(131, 131, 147)'
  ProjectScreen.style.display = "block"
  HomeScreen.style.display = "none"
SkillScreen.style.display = "none"
}
menuBtnSkill.onclick = () =>{
  
  menuBtnPrj.style.color = 'rgb(131, 131, 147)'
  menuBtnHome.style.color = 'rgb(131, 131, 147)'
  menuBtnSkill.style.color = "#5adeff"
  ProjectScreen.style.display = "none"
  HomeScreen.style.display = "none"
SkillScreen.style.display = "block"
}
// menu tab  
tab_child_1.onclick = () => {
  tab_child_1.style.backgroundColor = "rgb(27, 29, 46)";
  tab_child_1.style.borderBottom = "3px solid rgb(18, 112, 235)";
  screen2.style.display = "none";
  screen3.style.display = "none";

  screen1.style.display = "block";
  tab_child_2.style.backgroundColor = "rgb(21, 23, 40)";
  tab_child_2.style.borderBottom = "none";
  tab_child_3.style.backgroundColor = "rgb(21, 23, 40)";
  tab_child_3.style.borderBottom = "none";
};

tab_child_2.onclick = () => {
  tab_child_2.style.backgroundColor = "rgb(27, 29, 46)";
  tab_child_2.style.borderBottom = "3px solid rgb(18, 112, 235)";
  screen1.style.display = "none";
  screen3.style.display = "none";
  screen2.style.display = "block";
  tab_child_1.style.backgroundColor = "rgb(21, 23, 40)";
  tab_child_1.style.borderBottom = "none";
  tab_child_3.style.backgroundColor = "rgb(21, 23, 40)";
  tab_child_3.style.borderBottom = "none";
};

tab_child_3.onclick = () => {
  tab_child_3.style.backgroundColor = "rgb(27, 29, 46)";
  tab_child_3.style.borderBottom = "3px solid rgb(18, 112, 235)";
  // tab_child_3.style.justifyContent = "space-between";
  screen2.style.display = "none";
  screen1.style.display = "none";
  screen3.style.display = "block";
  tab_child_2.style.backgroundColor = "rgb(21, 23, 40)";
  tab_child_2.style.borderBottom = "none";
  tab_child_1.style.backgroundColor = "rgb(21, 23, 40)";
  tab_child_1.style.borderBottom = "none";
};

// mobile screen 
(function hello() {
  const x = 5;
  const leftPaw = document.getElementById("leftPaw").classList;
  const rightPaw = document.getElementById("rightPaw").classList;
  const paws = document.getElementById("paws").classList;
  const circles = document.getElementById("circles").classList;
  const rpaws = document.getElementById("rpaws").classList;
  const rcircles = document.getElementById("rcircles").classList;
  const retweet = document.getElementById("retweet").classList;
  const heart = document.getElementById("heart").classList;
  leftPaw.toggle("leftPaw");
  rightPaw.toggle("rightPaw");
  paws.toggle("paws");
  circles.toggle("circles");
  rpaws.toggle("paws");
  rcircles.toggle("circles");
  leftPaw.toggle("leftPaw2");
  rightPaw.toggle("rightPaw2");
  retweet.toggle("green");
  heart.toggle("red");
  // change number for speed
  setTimeout(hello, x*20);
})();

// btn mobile
// btnMenu.onclick = () => {
//   MenuMB.style.display = "block";
// };

// MenuMB.onclick = () => {
//   MenuMB.style.display = "none";
// };

// certificate 
const certificates = document.querySelectorAll(".certificate_child_1");

certificates.forEach(certificate => {
  const imgCerti = certificate.querySelector(".imgCerti");
  const zoomCerti = certificate.querySelector(".zoomCerti");

  imgCerti.addEventListener("click", () => {
    zoomCerti.style.display = "block";
  });

  zoomCerti.addEventListener("click", () => {
    zoomCerti.style.display = "none";
  });
});


// slider projects
// Select elements before using them
var projects = document.querySelectorAll(".project");

projects.forEach(project => {
  var btnArrow = project.querySelectorAll(".btnArrow i");
  var boxImgPrjChilds = project.querySelector(".boxImgPrjChilds");
  var widthOneImg = project.querySelector(".imgPrjChilds").offsetWidth;

  // let sumClick = true
  btnArrow.forEach((btn) =>{
    btn.addEventListener("click",()=>{
    // console.log(widthOneImg)
      // boxImgPrjChilds.scrollLeft += btn.id === "right" ? -widthOneImg : widthOneImg
    
    boxImgPrjChilds.scrollLeft += btn.id === "left"? -266  : 266 
  
      
    })
  })
});



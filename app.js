// vars //
let body = document.body;
let header = document.createElement('div');

// navbar section vars
let navBarItemList = ["Home", "About", "Courses", "Scale Up", "Contact", "עברית"];
let navBar = document.createElement('nav');
let navContainer = document.createElement('div');
let imgLogo = document.createElement('img');
let collapseBtn = document.createElement('button');
let collapseBtnImg = document.createElement('i');
let menuSection = document.createElement('div');
let menuList = document.createElement('ul');
let mainBody = document.createElement('main');

//top page section vars
let bigText = document.createElement('h1');
let smallText = document.createElement('h5');
let browesBtn = document.createElement('button');

//about section vars
let aboutSection = document.createElement('section');
let aboutRightSide = document.createElement('div');
let aboutRightSideTitle = document.createElement('h2');
let aboutRightSideText = document.createElement('h6');
let aboutLeftSide = document.createElement('div');
let aboutLeftSideImg = document.createElement('img');

//courses section vars
let coursesSection = document.createElement('section');
let coursesSectionTitle = document.createElement('h2');
let fullstackMorningCard = document.createElement('div');
let fullstackEveningCard = document.createElement('div');
let dataAnalysisSQLCard = document.createElement('div');
let morningCardImg = document.createElement('img');
let morningCardTitle = document.createElement('h4');
let morningCardText = document.createElement('h6');
let morningCardBtn = document.createElement('button');
let eveningCardImg = document.createElement('img');
let eveningCardTitle = document.createElement('h4');
let eveningCardText = document.createElement('h6');
let eveningCardBtn = document.createElement('button');
let dataCardImg = document.createElement('img');
let dataCardTitle = document.createElement('h4');
let dataCardText = document.createElement('h6');
let dataCardBtn = document.createElement('button');

//copanies section vars
let companiesSection = document.createElement('section');
let companiesSectionTitle = document.createElement ('h1');
let companiesImgSection = document.createElement ('div');

let companiesImgList = [
    "https://www.simonetixpro.com/wp-content/uploads/2021/08/Group-174.png",
    "https://www.simonetixpro.com/wp-content/uploads/2021/08/Group-173.png",
    "https://www.simonetixpro.com/wp-content/uploads/2021/08/Group-172.png",
    "https://www.simonetixpro.com/wp-content/uploads/2021/08/Group-171.png",
    "https://www.simonetixpro.com/wp-content/uploads/2021/08/Group-163.png",
    "https://www.simonetixpro.com/wp-content/uploads/2021/08/Group-167.png",
    "https://www.simonetixpro.com/wp-content/uploads/2021/08/Group-166.png",
    "https://www.simonetixpro.com/wp-content/uploads/2021/08/Group-164.png",
    "https://www.simonetixpro.com/wp-content/uploads/2021/08/Group-162.png",
    "https://www.simonetixpro.com/wp-content/uploads/2021/08/Group-161.png",
    "https://www.simonetixpro.com/wp-content/uploads/2021/08/Tufin.png",
    "https://www.simonetixpro.com/wp-content/uploads/2021/08/Group-168.png"
]


//enviroment section vars
let environmentSection = document.createElement('section');
let environmentRightSide = document.createElement('div');
let environmentRightSideImg = document.createElement('img');
let environmentLeftSide = document.createElement('div');
let environmentLeftSideTitle = document.createElement('h2');
let environmentLeftSideInfo = document.createElement('div');
let environmentInfoTitle = document.createElement('h3');
let environmentInfoText = document.createElement('h5');
let environmentMoreInfo_placement = document.createElement('div');
let environmentMoreInfo_specialization = document.createElement('div');
let environmentMoreInfo_supportingCommunity = document.createElement('div');
let placmentTitle = document.createElement('h3');
let specializationTitle = document.createElement('h3');
let supportingTitle = document.createElement('h3');
let plusIconPlacment = document.createElement('span');
let plusIconSpecialzion = document.createElement('i');
let plusIconSupporting = document.createElement('i');


//why section vars
let whySection = document.createElement('section');
let whyTitleSection = document.createElement('div');
let whyTitle = document.createElement('h2');

let whyImgList = ["https://www.simonetixpro.com/wp-content/uploads/2021/08/Icon-1.png", 
"https://www.simonetixpro.com/wp-content/uploads/2021/08/Icon-2.png", 
"https://www.simonetixpro.com/wp-content/uploads/2021/08/Icon-3.png", 
"https://www.simonetixpro.com/wp-content/uploads/2021/08/Icon-4.png"];

let whyItemsTitle = ["Transform Your Career", 
"We Trained Students Globally", 
"Learn by Creating", 
"Career With Simonetix Pro"];

let whyItemsText = ["Whether you need to get a job in tech or launch your own business, Simonetix Pro will help you achieve your goals.", 
"Join a global network of +1000 graduates and professionals around the world.",
"Learn by working on amazing projects using the tools and workflows you'll encounter in a real work environment.",
"Our graduates get hired in less than 4 months through our +200 international network of hiring partners."];



//footer section vars
let footerSection = document.createElement('footer');
let linkSection = document.createElement('div');
let contactSection = document.createElement('div');
let simontixInfoSection = document.createElement('div');
let linksTitle = document.createElement('h3');
let contactTitle = document.createElement('h3');
let simontixInfoImg = document.createElement('img');
let linksList = document.createElement('ul');
let aboutLink = document.createElement('li');
let coursesLink = document.createElement('li');
let scaleUpLink = document.createElement('li');
let contactLink = document.createElement('li');
let contactList = document.createElement('ul');
let locationCity = document.createElement('li');
let locationInfo = document.createElement('li');
let numberInfo = document.createElement('li');
let emailInfo = document.createElement('li');
let simontixInfoList = document.createElement('ul');
let firstText = document.createElement('li');
let secText = document.createElement('li');
let thirdText = document.createElement('li');
let socialIcons = document.createElement('div');
let facebookIcon = document.createElement('i')
let instagramIcon = document.createElement('i')
let linkedinIcon = document.createElement('i')
let copyRights = document.createElement('h5');
































// === Top part === //
//  nav bar  //
(function createNavBar(){
header.classList.add("page");
body.appendChild(header);

header.style.backgroundImage = "url('https://www.simonetixpro.com/wp-content/uploads/2021/07/pexels-soumil-kumar-735911-scaled.jpg')";
header.style.backgroundRepeat = "no-repeat";
header.style.backgroundSize = "cover";

// === navbar === //
    
header.appendChild(navBar);
navBar.classList.add("navbar", "navbar-expand-lg", "navbar-light", "bg-transparent", "d-flex", "justify-content-between", "col-12");

// nav container //
navContainer.classList.add("navContainer", "d-flex", "col-12" ,"justify-content-between", "px-5");
navBar.appendChild(navContainer);

// == menu == //
// logo //
imgLogo.classList.add("simontixLogo", "col-3", "pt-3");
imgLogo.src = 'https://www.simonetixpro.com/wp-content/uploads/2021/07/Logo.png';
navContainer.appendChild(imgLogo);

//collapse button//
collapseBtn.classList.add("navbar-toggler", "text-muted");
navContainer.appendChild(collapseBtn);

collapseBtnImg.classList.add("fas", "fa-bars", "text-white");
collapseBtn.appendChild(collapseBtnImg);


// text menu //
menuSection.classList.add("collapse", "navbar-collapse", "align-items-center", "col-6", "justify-content-end", "px-5");
navContainer.appendChild(menuSection);

menuList.classList.add("navbar-nav");
menuSection.appendChild(menuList);

//menu items//

for (i = 0; i < navBarItemList.length; i++) {

    if(i != 4){
    let menuItem = document.createElement("li");
    menuItem.classList.add("nav-item", "mx-2");
    menuList.appendChild(menuItem);

    let itemText = document.createElement('a');
    itemText.classList.add("nav-link", "text-white");
    menuItem.appendChild(itemText);
    itemText.textContent = navBarItemList[i];
    }

    else{
    let menuItem = document.createElement("button");
    menuItem.classList.add("nav-item", "btn", "btn-light", "rounded", "btn-md", "text-center");
    menuList.appendChild(menuItem);
    menuItem.textContent = navBarItemList[i];
    }
}
})() //why only the first functio can use iife????
//  END navbar  //

//  header  //
function createheader(){
mainBody.classList.add("main", "d-flex", "align-items-center", "justify-content-center", "row", "mt-5");
header.appendChild(mainBody);

// main text //
bigText.classList.add("text-center", "col-10", "mb-4","mt-5", "text-white", "bigText");
mainBody.appendChild(bigText);
bigText.textContent = "CREATING TALENTS FOR THE TECH INDUSTRY";

// small text //
smallText.classList.add("text-center", "col-12", "mb-4","mt-2", "text-white", "smallText");
mainBody.appendChild(smallText);
smallText.textContent = "Come learn from the professionals involved in the field.";

//button//
browesBtn.classList.add("btn", "btn-primary", "col-2", "rounded", "btn-lg", "py-3", "my-5");
mainBody.appendChild(browesBtn);
browesBtn.textContent = "Browes Courses";
}
//  END header  //
// === END Top part === //


// === About section === //
function createAboutSection(){
aboutSection.classList.add("aboutSection","d-flex", "justify-content-center", "row", "p-5");
body.appendChild(aboutSection);

// About left side //
aboutRightSide.classList.add("d-flex", "row", "col-12","col-xl-6", "p-5");
aboutSection.appendChild(aboutRightSide);

aboutRightSideTitle.classList.add("text-start", "aboutTitle");
aboutRightSide.appendChild(aboutRightSideTitle);
aboutRightSideTitle.textContent = "About Simonetix pro";

aboutRightSideText.classList.add("text-start", "aboutText");
aboutRightSide.appendChild(aboutRightSideText);
aboutRightSideText.textContent = "Simonetix Pro was built on the mission of creating trainings that actually matters. Omer Yahalom and Simonetix LTD forces to tackle the one biggest issue of the hi-tech scene which is hiring high quality tech candidates. We offer advanced training in areas like Fullstack Development, Front-End Development, UI/UX Design, Cyber Resilience and more. Simonetix Pro is dedicated on building and training qualified tech talents. We source our highly talented students from around the world. Each of our programs merges ideas with actions, and academics with the market, to ensure that the theory is skillfully backed by practicality.";


// About right side //
aboutLeftSide.classList.add("d-flex","col-12","col-xl-6", "p-5", "justify-content-center");
aboutSection.appendChild(aboutLeftSide);

aboutLeftSideImg.classList.add("img-fluid", "aboutImg")
aboutLeftSideImg.src = "https://www.simonetixpro.com/wp-content/uploads/2021/08/Group-152.png";
aboutLeftSide.appendChild(aboutLeftSideImg);
}
// === END About section === //


// === Courses Section === //
function createCoursesScection(){

coursesSection.classList.add("d-flex", "row", "justify-content-center");
body.appendChild(coursesSection);


coursesSectionTitle.classList.add("coursesSectionTitle","text-center", "col-12", "mb-5");
coursesSection.appendChild(coursesSectionTitle);
coursesSectionTitle.textContent = "Our Courses";

// Courses cards //


//Fullstack moring //
fullstackMorningCard.classList.add("d-flex", "row","col-10", "col-lg-4", "justify-content-center", "align-items-center", "mb-5");
coursesSection.appendChild(fullstackMorningCard);

fullstackMorningCard.appendChild(morningCardImg);
fullstackMorningCard.appendChild(morningCardTitle);
fullstackMorningCard.appendChild(morningCardText);
fullstackMorningCard.appendChild(morningCardBtn);

morningCardImg.src = "https://www.simonetixpro.com/wp-content/uploads/2021/08/pexels-djordje-petrovic-2102416-1.jpg"
morningCardTitle.textContent = "Fullstack Bootcamp – Morning (Hybrid)";
morningCardText.textContent = "Become a full-stack web developer. Our JavaScript-driven curriculum immerses you in the latest web technologies such as Node.js and React.  we’ll provide you with tools of becoming a fullstack developer.";
morningCardBtn.textContent = "View Details";

morningCardImg.classList.add("img-fluid", "p-2", "imgBorder");
morningCardTitle.classList.add("text-center", "p-2");
morningCardText.classList.add("text-center", "p-2");
morningCardBtn.classList.add("btn-primary", "rounded", "col-4", "btn-lg", "py-3");

//Fullstack evening //
fullstackEveningCard.classList.add("d-flex", "row","col-10", "col-lg-4", "justify-content-center", "align-items-center", "mb-5");
coursesSection.appendChild(fullstackEveningCard);

fullstackEveningCard.appendChild(eveningCardImg);
fullstackEveningCard.appendChild(eveningCardTitle);
fullstackEveningCard.appendChild(eveningCardText);
fullstackEveningCard.appendChild(eveningCardBtn);

eveningCardImg.src ="https://www.simonetixpro.com/wp-content/uploads/2021/08/ferenc-almasi-L8KQIPCODV8-unsplash-2.jpg";
eveningCardTitle.textContent = "Fullstack Bootcamp – Evening (Hybrid)";
eveningCardText.textContent = "Become a full-stack web developer. Our JavaScript-driven curriculum immerses you in the latest web technologies such as Node.js and React.  we’ll provide you with tools of becoming a fullstack developer.";
eveningCardBtn.textContent = "View Details";

eveningCardImg.classList.add("img-fluid", "p-2", "imgBorder");
eveningCardTitle.classList.add("text-center", "p-2");
eveningCardText.classList.add("text-center", "p-2");
eveningCardBtn.classList.add("btn-primary", "rounded", "col-4", "btn-lg", "py-3");

//SQL//
dataAnalysisSQLCard.classList.add("d-flex", "row","col-10", "col-lg-4", "justify-content-center", "align-items-center", "mb-5");
coursesSection.appendChild(dataAnalysisSQLCard);

dataAnalysisSQLCard.appendChild(dataCardImg);
dataAnalysisSQLCard.appendChild(dataCardTitle);
dataAnalysisSQLCard.appendChild(dataCardText);
dataAnalysisSQLCard.appendChild(dataCardBtn);

dataCardImg.src = "https://www.simonetixpro.com/wp-content/uploads/2021/07/Courses-For-Companies-Course.png";
dataCardTitle.textContent = "SQL Data Analysis – Evening (Hybrid)";
dataCardText.textContent = "Become an In-demand SQL Data expert by creating complex databases and building reports through real-world projects. You’ll learn in-demand skills that will have you job-ready in less than 6 months.";
dataCardBtn.textContent = "View Details";

dataCardImg.classList.add("img-fluid", "p-2", "imgBorder");
dataCardTitle.classList.add("text-center", "p-2");
dataCardText.classList.add("text-center", "p-2");
dataCardBtn.classList.add("btn-primary", "rounded", "col-4", "btn-lg", "py-3");
// END Courses cards //
}
// === End Courses Section === //

// === Companies Section === //
function createCompaniesSection(){
companiesSection.classList.add("mt-5", "d-flex", "row", "justify-content-center");
body.appendChild(companiesSection);


companiesSectionTitle.classList.add("text-center", "companiesSectionTitle", "col-8");
companiesSection.appendChild(companiesSectionTitle);
companiesSectionTitle.textContent = "Our students working and helping to enhance these companies";


companiesImgSection.classList.add("d-flex", "justify-content-center", "row", "p-5");
companiesSection.appendChild(companiesImgSection);

for (i=0; i<companiesImgList.length; i++){
    let companieImg = document.createElement('img');
    companieImg.classList.add("col-6", "col-lg-3", "p-4");
    companiesImgSection.appendChild(companieImg);
    companieImg.src = companiesImgList[i];
    companieImg.style.cssText = "max-width: 400px;";
}

}
// === END Companies Section === //


// === Environment Section === //
function createEnvironmentSection(){

environmentSection.classList.add("environmentSection","d-flex", "justify-content-center", "p-5", "row");
body.appendChild(environmentSection);


// Environment right side //

environmentRightSide.classList.add("d-flex","col-12","col-xl-6", "p-5", "justify-content-center");
environmentSection.appendChild(environmentRightSide);

environmentRightSideImg.classList.add("img-fluid", "aboutImg")
environmentRightSideImg.src = "https://www.simonetixpro.com/wp-content/uploads/2021/08/Group-156.png";
environmentRightSide.appendChild(environmentRightSideImg);

// Environment left side //
environmentLeftSide.classList.add("d-flex", "row", "col-12","col-xl-6", "p-5");
environmentSection.appendChild(environmentLeftSide);

environmentLeftSideTitle.classList.add("text-end", "environmentTitle", "p-2");
environmentLeftSide.appendChild(environmentLeftSideTitle);

environmentLeftSideTitle.textContent = "Professional and Supportive Learning Environment";
environmentLeftSideInfo.classList.add("environmentInfo");
environmentLeftSide.appendChild(environmentLeftSideInfo);


environmentMoreInfo_placement.classList.add("d-flex", "row", "justify-content-between")
environmentMoreInfo_specialization.classList.add("d-flex", "row", "justify-content-between")
environmentMoreInfo_supportingCommunity.classList.add("d-flex", "row", "justify-content-between")

environmentLeftSideInfo.appendChild(environmentInfoTitle);
environmentLeftSideInfo.appendChild(environmentInfoText);
environmentLeftSideInfo.appendChild(environmentMoreInfo_placement);
environmentLeftSideInfo.appendChild(environmentMoreInfo_specialization);
environmentLeftSideInfo.appendChild(environmentMoreInfo_supportingCommunity);

environmentInfoTitle.textContent = "Vocational training";
environmentInfoText.textContent = "We are first and foremost professionals, our courses are in line with trends and trends in the market and will give students the ability and professional experience to integrate into the leading companies ";

environmentInfoTitle.classList.add("environmentInfoTitle")
environmentInfoText.classList.add("text-muted", "environmentInfoText", "py-1", "mb-4")




environmentMoreInfo_placement.appendChild(placmentTitle);
environmentMoreInfo_specialization.appendChild(specializationTitle);
environmentMoreInfo_supportingCommunity.appendChild(supportingTitle);

placmentTitle.classList.add("col-6", "p-1");
specializationTitle.classList.add("col-6", "p-1");
supportingTitle.classList.add("col-6", "p-1");

placmentTitle.textContent = "Placement";
specializationTitle.textContent = "Specialization";
supportingTitle.textContent = "Supporting Community";



environmentMoreInfo_placement.appendChild(plusIconPlacment);
environmentMoreInfo_specialization.appendChild(plusIconSpecialzion);
environmentMoreInfo_supportingCommunity.appendChild(plusIconSupporting);

plusIconPlacment.classList.add("bi", "bi-plus-circle-fill", "col-2", "text-center", "py-3");
plusIconSpecialzion.classList.add("bi", "bi-plus-circle-fill", "col-2", "text-center", "py-3");
plusIconSupporting.classList.add("bi", "bi-plus-circle-fill", "col-2", "text-center", "py-3");
}
// === END Environment Section === //


// === Why Section === //
function createWhySection(){

whySection.classList.add("whySection", "d-flex", "row", "justify-content-evenly");
body.appendChild(whySection);
whySection.style.backgroundColor = "#F3F3F3";

whyTitleSection.classList.add("col-12", "d-flex", "justify-content-center", "my-5");
whySection.appendChild(whyTitleSection);

whyTitle.classList.add("text-center", "whyTitle", "col-6");
whyTitle.textContent = "Why you Should Study at Simonetix Pro?";
whyTitleSection.appendChild(whyTitle);

for (i=0; i<4; i++){
    let whyItem = document.createElement('div');
    whyItem.classList.add("col-10", "col-lg-6", "d-flex", "justify-content-evenly", "mb-5", "gx-5");
    whySection.appendChild(whyItem);

    let whyItemIcon = document.createElement('img');
    whyItemIcon.classList.add("col-1");
    whyItemIcon.style.cssText = "height: 50px; width: auto;";
    whyItemIcon.src = whyImgList[i];

    let whyItemDescription = document.createElement('div');
    whyItemDescription.classList.add("col-10", "d-flex", "row", "mb-4");
    whySection.appendChild(whyItemDescription);

    let whyItemTitle = document.createElement('h2');
    whyItemTitle.classList.add("px-2");
    whyItemTitle.style.cssText = "font-weight:700; color:#0400A1";
    whyItemTitle.textContent = whyItemsTitle[i];
    whyItemDescription.appendChild(whyItemTitle);

    let whyItemText = document.createElement('h5');
    whyItemTitle.classList.add("px-2");
    whyItemText.style.cssText = "font-weight:400";
    whyItemText.textContent = whyItemsText[i];
    whyItemDescription.appendChild(whyItemText);

    whyItem.appendChild(whyItemIcon);
    whyItem.appendChild(whyItemDescription);

}
}
// === END Why Section === //


// === footer Secttion === //
function createFooter(){

footerSection.classList.add("d-flex", "justify-content-center", "mt-5", "row");
body.appendChild(footerSection);




linkSection.classList.add("col-3", "d-flex", "justify-content-start", "row");
contactSection.classList.add("col-3", "d-flex", "justify-content-start", "row");
simontixInfoSection.classList.add("col-3", "d-flex", "justify-content-start", "row");

footerSection.appendChild(linkSection);
footerSection.appendChild(contactSection);
footerSection.appendChild(simontixInfoSection);


linksTitle.classList.add("text-start", "col-12");
contactTitle.classList.add("text-start", "col-12");

linkSection.appendChild(linksTitle);
contactSection.appendChild(contactTitle);
simontixInfoSection.appendChild(simontixInfoImg);

linksTitle.textContent = "Usefull Links";
linksTitle.style.cssText = "max-height: 50px";
contactTitle.textContent = "Contact";
contactTitle.style.cssText = "max-height: 50px";
simontixInfoImg.src = 'https://www.simonetixpro.com/wp-content/uploads/2021/07/Logo-Blue-1.png';
simontixInfoImg.style.cssText = "max-height: 50px; max-width: 250px;";


linksList.classList.add("col-12");
linkSection.appendChild(linksList);
linksList.style.listStyle = "none";


aboutLink.classList.add("p-2");
linksList.appendChild(aboutLink);
aboutLink.textContent = "About";


coursesLink.classList.add("p-2");
linksList.appendChild(coursesLink);
coursesLink.textContent = "Courses";


scaleUpLink.classList.add("p-2");
linksList.appendChild(scaleUpLink);
scaleUpLink.textContent = "Scale Up";


contactLink.classList.add("p-2");
linksList.appendChild(contactLink);
contactLink.textContent = "Contact";




contactList.classList.add("col-12");
contactSection.appendChild(contactList);
contactList.style.listStyle = "none";


locationCity.classList.add("p-2");
contactList.appendChild(locationCity);
locationCity.textContent = "About";


locationInfo.classList.add("p-2");
contactList.appendChild(locationInfo);
locationInfo.textContent = "Simonetix LTD, Elimelekh St 3";


numberInfo.classList.add("p-2");
contactList.appendChild(numberInfo);
numberInfo.textContent = "073-036-708-921";


emailInfo.classList.add("p-2");
contactList.appendChild(emailInfo);
emailInfo.textContent = "contact@simonetixpro.com";


simontixInfoList.classList.add("col-12", "mt-5");
simontixInfoSection.appendChild(simontixInfoList);
simontixInfoList.style.listStyle = "none";


firstText.classList.add("p-2" , "text-muted");
simontixInfoList.appendChild(firstText);
firstText.textContent = "We offer advanced training in many areas like Fullstack Development, Front-End Development, UI/UX Design, Cyber Resilience, and more.";


secText.classList.add("p-2" , "text-muted");
simontixInfoList.appendChild(secText);
secText.textContent = "Simonetix Pro is dedicated to building and training qualified tech talents.";


thirdText.classList.add("p-2" , "text-muted");
simontixInfoList.appendChild(thirdText);
thirdText.textContent = "We source our highly talented students from around the world. Each of our programs merges ideas with actions, and academics with the market, to ensure that the theory is skillfully backed by practicality.";


socialIcons.classList.add("d-flex", "row");
simontixInfoSection.appendChild(socialIcons);


facebookIcon.classList.add("bi", "bi-facebook", "col-2", "text-muted");
socialIcons.appendChild(facebookIcon);


instagramIcon.classList.add("bi", "bi-instagram", "col-2", "text-muted");
socialIcons.appendChild(instagramIcon);


linkedinIcon.classList.add("bi", "bi-linkedin", "col-2", "text-muted");
socialIcons.appendChild(linkedinIcon);



copyRights.classList.add("col-12", "p-5");
footerSection.appendChild(copyRights);
copyRights.textContent = "© Copyright 2021 Simonetix LTD";
}
// === End footer Secttion === //





//function calling

createheader();
createAboutSection();
createCoursesScection();
createCompaniesSection()
createEnvironmentSection();
createWhySection();
createFooter();

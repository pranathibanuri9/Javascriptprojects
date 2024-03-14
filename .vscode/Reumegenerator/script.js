

const addNewWorkexperiance = () => {
  console.log("adding new field by clicking");
  let newNode = document.createElement("textarea");
  newNode.classList.add('form-control');
  newNode.classList.add("experiance");
  newNode.classList.add("mt-2");
  newNode.setAttribute('rows',3)
  newNode.setAttribute("placeholder","Enter here");
  let workexperiance = document.getElementById("workexperiance");

  let weaddbtn = document.getElementById("weaddbtn");

  workexperiance.insertBefore(newNode,weaddbtn);



};

const addacademicquaalification=()=>{
    let mynode=document.createElement("textarea")
    mynode.classList.add('form-control');
    mynode.classList.add("qualification");
    mynode.classList.add("mt-2");
    mynode.setAttribute('rows',3);
    mynode.setAttribute("placeholder","Enter here");
    let qualification = document.getElementById("qualification");
    let qualibtn = document.getElementById("acqaddbtn");
    qualification.insertBefore(mynode,qualibtn);
};

// generating cv function

const generateCV=()=>{
    // console.log("generating cv")
    let namefield=document.getElementById("name").value;
    let namet1=document.getElementById('nameT')
    namet1.innerHTML=namefield;
    let nameT2 = document.getElementById("nameT2");
    nameT2.innerHTML=namefield;
    // contact
    let contact = document.getElementById("contact").value;
    document.getElementById("contactT").innerHTML=contact;
    // address
    let adress = document.getElementById("Address").value;
    document.getElementById("addressT").innerHTML=adress;
    // contacts
    let facet = document.getElementById("face").value;
    document.getElementById("faceT").innerHTML=facet;
    let linked = document.getElementById("linked").value;
    document.getElementById("gitT").innerHTML = linked;
    let youtube = document.getElementById("youtube").value;
    document.getElementById("linkT").innerHTML = youtube;
    // objective
    let objective = document.getElementById("objective").value;
    document.getElementById("objectiveT").innerHTML = objective;
    // work experiance

    let experiance = document.getElementsByClassName("experiance");
    let stri=''
    for(let expo of experiance){
        stri=stri+`<li> ${expo.value}</li>`
       
    }
     document.getElementById("experianceT").innerHTML=stri;

    //  adding academic qualification

    let qualification = document.getElementsByClassName("qualification");
    let so="";
    for(let qa of qualification){
        so=so+`<li>${qa.value}</li>`
    }
    document.getElementById("acadamicqualificationT").innerHTML=so;


    // code for setting Image
    let file = document.getElementById("imgField").files[0];
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    // set the image to template
   reader.onloadend=function(){
    document.getElementById("imgtemp").src = reader.result;
   }

   document.getElementById("resume-form").style.display='none';
   document.getElementById("cv-template").style.display='block';

}
const printCV = () => {
  window.print();
};
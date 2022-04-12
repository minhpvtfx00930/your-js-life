// upload avt
const defaultBtn = document.querySelector("#default-btn");
const customBtn = document.querySelector("#custom-btn");
const img = document.querySelector("#avt");

function defaultBtnActive() {
  defaultBtn.click();
}

defaultBtn.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const result = reader.result;
      img.src = result;
    }
    reader.readAsDataURL(file);
  }
});
//-------------------------------------------------
document.getElementById('submitBtn').addEventListener('click', () => {
  // disable this button to prevent multiple clicks
  document.getElementById('submitBtn').disabled = true;
  submitJSONform()
});

// Input range My Skills
const selectorValue = document.getElementById("selectorValue");
const slider = document.getElementById("inputRange");

try {
    selectorValue.innerHTML = slider.value + "%";
    slider.oninput = function () {
        selectorValue.innerHTML = slider.value + "%";
    }
} catch (error) {
    console.error(error);
}
//Services
function add_box() {
    let services_box = document.getElementsByClassName('what-i-do-item')[0];
    
    // let input_tags = document.getElementsByClassName('what-i-do-item').length + 1;
    let parent_box = services_box.parentNode;
    let newField = services_box.cloneNode(true);
    newField.setAttribute('id', Math.random() * 100);

    parent_box.append(newField); 
    console.log(newField.getAttribute('id'));
}

function remove_box() {
    
    let array = document.getElementsByClassName('borderWhatIDo')   
    let services_box = document.getElementsByClassName('what-i-do-item')[0]    
    let remove_button = document.getElementsByClassName('button-education-item');
    if(array.length > 1){
        services_box.remove(array);
    }
    else{
        // alert("Are you sure you want to delete this section?")
        confirm("Are you sure you want to delete this section?");
        // function confirmDelete(){
            if(confirm("Are you sure you want to delete this section?") == true){      
                services_box.remove(array);
            }else{
                
            }
        
        // }
    }

    // let array = document.getElementsByClassName('borderWhatIDo')
    // var getId = document.getElementById(this);

    
    // let services_box = document.getElementsByClassName('what-i-do-item')[0]
    // console.log(this);
    // for (let index = 0; index < array.length; index++) {
    //     if(array.length > 1 && document.getElementsByClassName('borderWhatIDo')[index].getAttribute('id') === getId){
    //         document.getElementsByClassName('borderWhatIDo')[index].remove();
    //     }
        
    // }
   
        
        
}
//confirm-delete
// function confirmDelete(){
//     confirm("Bấm vào nút OK để tiếp tục");
// }


//MyEducation
function add_box_education() {
    let mySkill_box = document.getElementsByClassName('boxMyEducation')[0];
    let parent_box = mySkill_box.parentNode;
    let newField = mySkill_box.cloneNode(true);
    parent_box.append(newField); 
}

function remove_box_education() {
    let array = document.getElementsByClassName('borderEducation')
    let mySkill_box = document.getElementsByClassName('boxMyEducation')[0]  
    if(array.length > 1){
        mySkill_box.remove(array);
    }     
           
        
}
//MyExperience
function add_box_experience() {
    let mySkill_box = document.getElementsByClassName('boxMyExperience')[0];
    let parent_box = mySkill_box.parentNode;
    let newField = mySkill_box.cloneNode(true);  
    parent_box.append(newField); 
}

function remove_box_experience() {
    let array = document.getElementsByClassName('borderExperience')
    let mySkill_box = document.getElementsByClassName('boxMyExperience')[0]    
    if(array.length > 1){
        mySkill_box.remove(array);
    }
        
}
//MySkills
function add_box_skills() {
    let mySkill_box = document.getElementsByClassName('boxMySkills')[0];
    let parent_box = mySkill_box.parentNode;
    let newField = mySkill_box.cloneNode(true);
    parent_box.append(newField); 
}

function remove_box_skills() {
    let array = document.getElementsByClassName('my-skill-item')
    let mySkill_box = document.getElementsByClassName('boxMySkills')[0]  
    if(array.length > 1){
        mySkill_box.remove(array);
    }  
        
}

function getAllInputData(){
    //Intro
    let phone = document.querySelectorAll('input[name="phone"]')[0].value;
    let avatar = document.getElementById('avt').src;
    let job = document.querySelectorAll('input[name="job"]')[0].value;
    let jobTextarea = document.querySelectorAll('textarea[name="job-textarea"]')[0].value;
    //About Me
    let address = document.querySelectorAll('input[name="address"]')[0].value;
    let nickname = document.querySelectorAll('input[name="nickname"]')[0].value;
    let introduction = document.querySelectorAll('textarea[name="introduction"]')[0].value;
    let workingTime = document.querySelectorAll('input[name="workingtime"]')[0].value;
    //Years of Experience
    let nameYearOfExperience = document.querySelectorAll('input[name="name"]')[0].value;
    let gmail = document.querySelectorAll('input[name="gmail"]')[0].value;
    let dateOfBirth = document.querySelectorAll('input[name="dateofbirth"]')[0].value;
    let addressYearOfExperience = document.getElementsByClassName('aboutMeInput')['address'].value;
    let facebook = document.getElementsByClassName('aboutMeInput')['facebook'].value;
    let github = document.getElementsByClassName('aboutMeInput')['github'].value;
    let linkedin = document.getElementsByClassName('aboutMeInput')['linkedin'].value;
    //Service(How I can help your next project)
    let services = [...document.getElementsByClassName('borderWhatIDo')].map(e => [...e.getElementsByClassName('input-group')].map(e => e.children[0].value)).map(e => {
        return {
            title: e[0],
            description: e[1]
        }
    })

    //MyEducation
    let myEducation = [...document.getElementsByClassName('boxMyEducation')].map(e => [...e.getElementsByClassName('form-group')].map(e => e.children[0].value)).map(e => {
        return {
            title: e[0],
            time: e[1],
            content: e[2]
        }
    })
    //MyExperience
    let myExperience = [...document.getElementsByClassName('boxMyExperience')].map(e => [...e.getElementsByClassName('form-group')].map(e => e.children[0].value)).map(e => {
        return {
            title: e[0],
            time: e[1],
            content: e[2]
        }
    })
    //MySkills
    let myKills = [...document.getElementsByClassName('boxMySkills')].map(e => [...e.getElementsByClassName('form-skill')].map(e => e.children[0].value)).map(e => {
        return {
            skill: e[0],
            value : e[1]
        }
    })
    return {
        phone: phone,
        // avt: avt,
        job: job,
        texterea: jobTextarea,
        address: address,
        nickname: nickname,
        introduction: introduction,
        workingtime: workingTime,
        name: nameYearOfExperience, 
        gmail: gmail,
        date_of_birth: dateOfBirth,       
        address_year_of_experience: addressYearOfExperience,
        facebook: facebook,
        github: github, 
        linkedin: linkedin,
        services: services,                 
        education: myEducation,
        experience: myExperience, 
        skills: myKills,
    }
}

function submitJSONform(){
  let data = getAllInputData();
  let json = JSON.stringify(data);
  fetch('/create-portfolio', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: json
  }).then(res => res.json())
      .then(id => {
        console.log(id);
        submitFileAndIdAndRedirect(id);
      }).catch(err => console.log(err));
}

function submitFileAndIdAndRedirect(id) {
  let formData = new FormData();
  formData.append('file', document.querySelectorAll('input[name="file"]')[0].files[0]);
  formData.append('id', id);
  fetch('/create-portfolio/file', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      // if success, redirect to portfolio/:id
      if (res.status === 'success') {
        window.location.href = `/success?id=${id}`;
      }
    })
}



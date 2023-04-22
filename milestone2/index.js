
// dark mode button
let themeBtn = document.getElementById("theme-btn");                                                                                                                                                           

const darkMode = () => {
    document.body.classList.toggle("dark-mode"); 
    
}
themeBtn.addEventListener("click", darkMode);

// forms manipulation
// ----------------
// add names to the right side to show who created a form

// let nickname = document.getElementById("name");
// let town = document.getElementById("town");
// let email = document.getElementById("email");
let submitBtn = document.getElementById("submit-btn");
let divRight = document.querySelector(".right-side-submission");
let countPeople = 3; //people initially submit a form
let modal = document.getElementById("thanks-modal");
let modalContent = document.getElementById("thanks-modal-content"); 
let modalBtn = document.getElementById("thanks-modal-btn");
let scaleFactor = 1;
let modalImage = document.getElementById("thanks-modal-image");

const addSubmitions = (person) => {
    let newParagraph = document.createElement("P");
    newParagraph.innerText = `🖊️ ${person.name} from ${person.town} made a change today!`;
    divRight.appendChild(newParagraph);

    //counting people
    countPeople += 1;
    document.getElementById("counter").innerText = "🖊️ " + countPeople + " people made a change today!";
}


// modal 
const toggleModal = (person) => {
    modal.style.display = "flex";
    modalContent.textContent = `Thank you so much ${person.name}! ${person.town} represent!`;
    setTimeout(() => {
        modal.style.display = "none";
        clearInterval(intervalId);
    }, 4000)

    // scale modal
    let intervalId = setInterval(scaleImage, 500)
}

// scale the modal image within the modal 
const scaleImage = () => {
    if(scaleFactor === 1) {
        scaleFactor = 0.8;
    }else {
        scaleFactor = 1;
    }
    // "Is the scale factor 1? if so, set it to 0.8. If not, set it to 1."
    // scaleFactor = scaleFactor === 1 ? 0.8 : 1

    modalImage.style.transform = `scale(${scaleFactor})`;
}
 // modal button
 const  modalButton = () => {
    modalBtn.style.display = 'none';
 }
 modalBtn.addEventListener('click', modalButton);

// validate function that will be called when the submit 
// button is clicked. It will chane the boxes in red when
// the user does not add any name.

const validateForm = (event) => {
    let containsErrors = false;
    var userInput = document.getElementById("myForm").elements;
    //  Loop through all inputs
    for(let i = 0; i < userInput.length; i++) {
        if(userInput[i].value.length < 2) {
            containsErrors = true;
            userInput[i].classList.add('error');
        }
        else {
            userInput[i].classList.remove('error');
        }    
    }

    //  create a person object
    person = {
        mh1: userInput[0].value,
        mh1: userInput[1].value,
        mh1: userInput[2].value,
        ph1: userInput[3].value,
        ph2: userInput[4].value,
        ph3: userInput[5].value,
        ee1: userInput[6].value,
        ee2: userInput[7].value,
        ee3: userInput[8].value,
        name: userInput[9].value,
        town: userInput[10].value,
        email: userInput[11].value
    }

    // validate the email address with the .com at the end
    // if(!email.value.include('.com')){
    //     containsErrors = true;
    //     email.classList.add('error');
    // }
    // else {
    //     email.classList.remove('error');
    // }
  
    // Validate the value of each input
    // Call addSignature() and clear fields if no errors

    if(containsErrors == false){
        addSubmitions(person);
        toggleModal(person);
        for(var i = 0; i < userInput.length - 1; i++){
            userInput[i].value = "";
            containsErrors = false;
        }
    }   
    
    event.preventDefault();

}
submitBtn.addEventListener("click", validateForm);



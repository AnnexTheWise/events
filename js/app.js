/**
 * 
 * ES6
 * 
 * var
 * 
 * let
 * const
 * 
 * functions
 * 
 * Declarative function
 * function functionName {
 * do stuff
 * }
 * 
 * Arrow function
 * const funcName =()+> {
 * do stuff
 * }
 */

const foo =()=> console.log("say hello");

foo();

const submitBtn = document.getElementById("submitBtn");

let data = {};

const subscribeUser =()=> {
    const terms = document.getElementById("terms");

    console.log(terms.checked);

        const fName = document.getElementById("fName").value;
        const lName = document.getElementById("lName").value;
        const email = document.getElementById("email").value;
        const dob = document.getElementById("dob").value;
        const year = dob.slice(0, 4);
        // yyyy-mm-dd
        const month =  dob.slice(5, 7);
        const day = dob.slice(8);
        // const year = document
        // .getElementById("dob")
        // .value
        // .slice(0, 4);
        const planType = document.getElementById("input[name=planType]:checked").value;
        
        data.firstName = fName;
        data.lastName = lName;
        data.email = email;
        data.month = month;
        data.year = year;
        data.date = date;
        data.planType = planType;
    
        console.log(planType);
}

const alertUser =()=> alert("Please agree to our terms and conditions");

submitBtn.addEventListener("click", ()=> {
    e.preventDefault();

    const terms = document.getElementById("terms");

    terms.checked ? subscribeUser() : alertUser();
}
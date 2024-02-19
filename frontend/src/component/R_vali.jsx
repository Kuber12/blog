/**
 * The function `R_vali` is a JavaScript React function that validates registration data, including
 * username, name, password, email, address, and gender.
 * @returns The function `R_vali` returns an object `Rerrors` which contains any validation errors
 * encountered during the registration process.
 */
const R_vali=(registrationData)=>{
    let Rerrors={};

    //username
    if(!registrationData.username.trim()){
        Rerrors.username='Username is Required.';
    }
    else if(!/^[a-zA-z0-9_]+$/.test(registrationData.username)){
        Rerrors.username ='Username must not contain any spectial symbols.';
    }
    else if(registrationData.username.length <5 || registrationData.username.length >15){
        Rerrors.username='Username must be between 5-15 character.';
    }

    //name
    if(!registrationData.name.trim()){
        Rerrors.name='Fullname is Required.';
    }
    else if(!/^[A-Za-z\s]+$/.test(registrationData.name)){
        Rerrors.name='Name cannot contain number or any special symbols.';
    }
    else if(registrationData.name.length >15){
        Rerrors.name ='Length must not exceed more then 15.';
    }

    //password
    if(!registrationData.password.trim()){
        Rerrors.password='Password is Required.';
    }
    else if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{8,30}$/.test(registrationData.password)){
        Rerrors.password='at least one uppercase, one symbol, and one digit, Limit:8-30.';
    }
    
    //dob
   

    //email
    if(!registrationData.email.trim()){
        Rerrors.email='Email is Required.';
    }
    else if(!/^[^\s@]+@[a-z\s@]+\.[a-z]{3}$/.test(registrationData.email)) {
        Rerrors.email = 'Invalid Email Address.'
    }

    //address
     if(!registrationData.address){
        Rerrors.address='Address is Required.';
    }
    else if(!/^[A-Za-z]+$/.test(registrationData.address)) {
        Rerrors.address = 'Address can contain letter only.';
    }

    //gender
    // if(registrationData.gender===''){
    //     Rerrors.gender ='Please Select Gender';
    // }

    const isGenderValid=()=>{
        var radios=  document.getElementsByName("gender");
        var isValid =false;
        var i=0;
        while(!isValid && i<radios.length){
            if(radios[i].checked)
            isValid=true;
            i++;
        }
        return isValid;
    };

    if(!isGenderValid()){
        Rerrors.gender ='Please select Gender.';
    }

    return Rerrors;
}
export default R_vali;
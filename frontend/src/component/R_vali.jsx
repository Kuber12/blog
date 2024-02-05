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
    else if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{8,15}$/.test(registrationData.password)){
        Rerrors.password='Must contain at least one uppercase letter, one symbol, and one digit.';
    }
    //email
    if(!registrationData.email.trim()){
        Rerrors.email='Email is Required.';
    }
    else if(!/^[^\s@]+@[a-z\s@]+\.[a-z]{3}$/.test(registrationData.email)) {
        Rerrors.email = 'Invalid Email Address.'
    }

    //  //address
    //  if(!registrationData.address.trim()){
    //     Rerrors.address='Address is Required.';
    // }
    // else if(!/^[A-Za-z]+$/.test(registrationData.address)) {
    //     Rerrors.address = 'Address can contain letter only.';
    // }

    return Rerrors;
}
export default R_vali;
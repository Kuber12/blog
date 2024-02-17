const edit_userVali=(editData)=>{
    let Eerrors={};

    //username
    if(!editData.username.trim()){
        Eerrors.username='Username is Required.';
    }
    else if(!/^[a-zA-z0-9_]+$/.test(editData.username)){
        Eerrors.username ='Username must not contain any spectial symbols.';
    }
    else if(editData.username.length <5 || editData.username.length >15){
        Eerrors.username='Username must be between 5-15 character.';
    }

    //name
    if(!editData.name.trim()){
        Eerrors.name='Fullname is Required.';
    }
    else if(!/^[A-Za-z\s]+$/.test(editData.name)){
        Eerrors.name='Name cannot contain number or any special symbols.';
    }
    else if(editData.name.length >15){
        Eerrors.name ='Length must not exceed more then 15.';
    }

    //email
    if(!editData.email.trim()){
        Eerrors.email='Email is Required.';
    }
    else if(!/^[^\s@]+@[a-z\s@]+\.[a-z]{3}$/.test(editData.email)) {
        Eerrors.email = 'Invalid Email Address.'
    }

    //address
     if(!editData.address){
        Eerrors.address='Address is Required.';
    }
    else if(!/^[A-Za-z]+$/.test(editData.address)) {
        Eerrors.address = 'Address can contain letter only.';
    }



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
        Eerrors.gender ='Please select Gender.';
    }

    return Eerrors;
}
export default edit_userVali;
const Lvali=(values)=>{
    let errors={};

    if(!values.username.trim()){
        errors.username='Username is Required.';
    }
    if(!values.password.trim()){
        errors.password='Password is Required.';
    }
   
    return errors;
}
export default Lvali;
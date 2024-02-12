/**
 * The function `Lvali` is a JavaScript React function that validates a form by checking if the
 * username and password fields are empty.
 * @returns The function `Lvali` returns an object `errors` which contains any validation errors found
 * in the `values` object.
 */
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
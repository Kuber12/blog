import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Regi_vali=(R_vali)=>{

    const navigation = useNavigate();
    
    const [registrationData, setRegistrationData] = useState({
        username: "",
        name: "",
        password: "",
        dob: "",
        email: "",
      });

      const [Rerrors, setRerrors] = useState({});

      const handleRChange = e=>{
        const { name, value } = e.target;
          setRegistrationData({
          ...registrationData, [name]:value
          });
      };
      const handleRSubmit = (e) => {
        e.preventDefault();
        const errors = R_vali(registrationData);
        setRerrors(errors);
        if (Object.keys(errors).length === 0) {
          axios
          .post("http://localhost:5000/api/user/register", registrationData)
          .then((res) => {
            console.log(res.data.message);
            toast.success("Registration Successful");
            setTimeout(() => {
              navigation("/");
            }, 3000);
          })
          .catch((err) => {
            if(err.response){
              setRerrors("Enter all valid Data");
            }else{
                setRerrors("Error during Registration, Please try again!");
            }
          });
         }}

      return { handleRChange,handleRSubmit, registrationData, Rerrors }
    
}
export default Regi_vali;
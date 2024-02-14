import { useState } from "react";
import axios from "axios";
function fetch(){
    const baseUrl = "";
    async function fetchData(endpoint){
        const url = `${baseUrl}${endpoint}`
        const response= await axios.get();
        const data = response.data; 
    }
}
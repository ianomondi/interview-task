import { useState } from "react";
import { GET_INSPECTION_CATEGORIES } from "../../utls/constants";
import { get } from "../ApiHelper";

export function ChecklistService(){
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = localStorage.getItem("bearerToken");

    const fetchCategories = async (pageSize,pageNumber,search) => {
        
        try{
            const response = await get(GET_INSPECTION_CATEGORIES(pageSize,pageNumber,search),token);
            
            var result = response["data"];
            setIsLoading(false);
            setCategories(result);
            
            
        } catch (err){  
            setError('Error fetching data');
        }
        finally{
            setIsLoading(false);
        }
    };

    
    return {categories, isLoading,error,fetchCategories};
};
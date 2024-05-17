import { useState } from "react";
import { CREATE_REQUEST, GET_REQUESTS } from "../../utls/constants";
import { get, post } from "../ApiHelper";

export function RequestService (){
    const [requests, setRequests] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = localStorage.getItem("bearerToken");
    const fetchRequest = async (pageSize,pageNumber,status,search) => {
        try{
            const response = await get(GET_REQUESTS(pageSize,pageNumber,status,search),token);
            var result = response['data'];
            setRequests(result);
            setIsLoading(false);
            
        } catch (err){  
            setError('Error fetching data');
        }
        finally{
            setIsLoading(false);
        }
        
    };

    const postRequest = async (data)=>{
        try{
        const response = await post(CREATE_REQUEST,token,data);
            var result = response['data'];
            setRequests(result);
            setIsLoading(false);
            
        }
        catch (err){  
            setError('Error fetching data');
        }
        finally{
            setIsLoading(false);
        }
    }
    return {requests, isLoading,error,fetchRequest,postRequest};
}
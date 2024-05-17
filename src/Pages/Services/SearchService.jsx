import { useState } from "react";
import { GET_INSPECTION_CATEGORIES } from "../utls/constants"

export function FilterSearches(){
const [isLoading, setIsLoading] = useState(true);
const [inspectionData, setInspectionData] = useState([]);
const token = localStorage.getItem("bearerToken");
var result = [];
    const filteCategory = (category) => {
        const search = category;
        
        try{
            fetch(
                GET_INSPECTION_CATEGORIES(10,1,search),
                {
                    method: "GET",
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                        Authorization: "Bearer " + token,
                    },
                }
            )
                .then((res) => res.json())
                .then((data) => {
                     result = data["data"];
                    setIsLoading(false);
                    setInspectionData(result);
                });
        }catch(e){
            console.log(e);
        } 
        
    }
    return {filteCategory,inspectionData , isLoading};
};

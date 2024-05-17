import { useState } from "react";
import * as constants from "../../utls/constants";
import { useNavigate } from "react-router-dom";
import { setUserSession } from "../../utls/sessionVariables";

export function LoginService() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const fetchData = async (username, password) => {
    try {
      setLoading(true);
      const response = await fetch(constants.BASE_URL + "Auth", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userName: username,
          password: password,
          accountName: "",
        }),
      });
      if (!response.ok) {
        throw new Error("Wrong Username or Password");
      }
      const newData = await response.json();
      setError(null);
      setUserSession(
        newData.bearerToken,
        newData.userAccouns,
        newData.claims,
        newData.user,
        newData.company
      );
      navigate("/work-orders/add-work-order");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { fetchData, error, loading };
}

import { useState } from "react";
import { GET_ASSETS_BY_LOCATION, GET_SIMPLE_LOCATION_LIST } from "../../utls/constants";
import { get } from "../ApiHelper";

export function SharedEndpoints() {
  const token = localStorage.getItem("bearerToken");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [assets, setAssets] = useState([]);
  const fetchAssets = async (locationId) => {
    try {
      const response = await get(GET_ASSETS_BY_LOCATION(locationId), token);
      var result = response;
      setAssets(result);
      setIsLoading(false);
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  const [locations, setLocations] = useState([]);
  const fetchLocations = async () => {
    try {
      const response = await get(GET_SIMPLE_LOCATION_LIST, token);
      var result = response;
      setLocations(result);
      setIsLoading(false);
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchAssets, assets, fetchLocations, locations, isLoading, error };
}

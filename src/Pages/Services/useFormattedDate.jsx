import { useState, useEffect } from "react";

const useFormattedDate = (dateString) => {
  const [formattedDate, setFormattedDate] = useState(null);
  useEffect(() => {
    const date = new Date(dateString);
    setFormattedDate(date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }));
  }, [dateString]);
  return formattedDate;
}

export default useFormattedDate;
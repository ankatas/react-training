import axios from "axios";
import { useEffect, useState } from "react";

function useHttpRequest<ResponseType>(url: string) {
  const [data, setData] = useState<ResponseType[]>([]);

  useEffect(() => {
    axios.get<ResponseType[]>(url).then((response) => {
      setData(response.data);
    });
  }, [url]); // If `url` changes, a new request is made with the new URL

  return data;
}

export default useHttpRequest;

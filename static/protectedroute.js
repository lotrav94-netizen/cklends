import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    API.get("/dashboard").then((res) => {
      setMessage(res.data.message);
    }).catch(() => {
      setMessage("Access denied");
    });
  }, []);

  return <h2>{message}</h2>;
}

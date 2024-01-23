import { useContext, useEffect, useState } from "react";
import Usercontext from "../contexts/Usercontext";
import axios from "axios";

export function getwallet() {
  const { token } = useContext(Usercontext);
  const [wallet, setWallet] = useState(undefined);

  const config = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/wallet`, config)
      .then((res) => setWallet(res.data))
      .catch((error) => alert(error.response.data));
  }, []);

  return wallet
}

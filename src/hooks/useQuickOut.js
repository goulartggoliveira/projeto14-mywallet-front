import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Usercontext from "../contexts/Usercontext"

export function useQuickOut() {
  const { token, profileName } = useContext(Usercontext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !profileName) navigate("/");
  }, []);
}

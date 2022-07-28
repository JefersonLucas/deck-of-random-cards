import { useContext } from "react";
import { UsernameContext, Username } from "../context/Username";

function useUsername(): Username {
  return useContext(UsernameContext);
}

export default useUsername;

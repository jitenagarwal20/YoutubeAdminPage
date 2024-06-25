import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";


function useTheme(){
    return useContext(ThemeContext);
}

export default useTheme;
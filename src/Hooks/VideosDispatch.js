import { useContext } from "react";
import VideosDispatchContext from "../Context/VideosDispatchContext";


function useVideosDispatch(){
    return useContext(VideosDispatchContext);
}

export default useVideosDispatch;
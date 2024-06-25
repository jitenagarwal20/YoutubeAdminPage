import useVideosDispatch from '../Hooks/VideosDispatch';
import './AddVideo.css';
import { useEffect, useRef, useState, } from 'react';

const intialVideoState = {
    title:'',
    views:'',
    channel: 'Coder Dost',
    time:'',
    verified:true,
}
function AddVideo({videoToEdit}){
    const [video,setVideo] = useState(intialVideoState)
    const dispatch = useVideosDispatch();
    const inputRef = useRef();

    function handleSubmit(e){
        e.preventDefault();
        if(videoToEdit){
            dispatch({type:'Update',payload:video})
        }
        else{
            dispatch({type:'Add',payload:video})
        }
        setVideo(intialVideoState)
    }
    function handleChange(e){
        setVideo({...video,
            [e.target.name] : e.target.value,
        })
    }

    useEffect(()=>{
        if(videoToEdit){
            setVideo(videoToEdit)
        }
        inputRef.current.focus();
    },[videoToEdit])

    return(
        <form>
        <input ref={inputRef} type="text" name="title" placeholder='title' onChange={handleChange} value={video.title}></input>
        <input type="text" name="views" placeholder='views' onChange={handleChange} value={video.views}></input>
        <input type="text" name="time" placeholder='time' onChange={handleChange}  value={video.time}></input>
        <button onClick={handleSubmit}>{videoToEdit? 'Edit' : 'Add'} video</button>
        </form>
    )
}
export default AddVideo;
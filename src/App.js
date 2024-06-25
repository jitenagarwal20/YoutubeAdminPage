import './App.css';
import videoDB from './data/data';
import AddVideo from './Components/AddVideo';
import { useReducer, useState,useCallback } from 'react';
import VideoList from './Components/VideoList';
import ThemeContext from './Context/ThemeContext';
import VideosContext from './Context/VideosContext';
import VideosDispatchContext from './Context/VideosDispatchContext';

function App() {

  const [videoToEdit,setvideoToEdit] = useState(null)
  const [mode,setMode] =useState('darkMode');

  function videoReducer(videos,action){
    switch(action.type){

      case 'Add':
        return [...videos,
        {...action.payload,id:videos.length+1}
      ];

      case 'Delete':
        return videos.filter(video=>video.id !== action.payload)
    
      case 'Update':
        const ind=videos.findIndex(v=>v.id === action.payload.id)
        const newVideos= [...videos]
        newVideos.splice(ind,1,action.payload)
        setvideoToEdit(null)
        return newVideos

      default:
        return videos;
    }
  }
  const [videos,dispatch] = useReducer(videoReducer,videoDB);

  const editVideo = useCallback(function editVideo(id){
    console.log(id);
    setvideoToEdit(videos.find(video=>video.id===id));
  },[videos])

  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
      <VideosDispatchContext.Provider value={dispatch}>
        <div className={`App ${mode}`}>
        <button onClick={()=>setMode(mode==='darkMode'? 'lightMode':'darkMode')}>{mode==='darkMode'? 'Switch to LightMode':'Switch to DarkMode'}</button>
        <AddVideo videoToEdit={videoToEdit}></AddVideo>
        <VideoList onEdit={editVideo}></VideoList>
        </div>
      </VideosDispatchContext.Provider>
    </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}
export default App;
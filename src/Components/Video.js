import useTheme from '../Hooks/Theme';
import useVideosDispatch from '../Hooks/VideosDispatch';
import './Video.css'
import { memo } from 'react';

const Video = memo(function Video({id,title,channel,views,time,verified=false,onEdit,children}) {
  const theme = useTheme()
  const dispatch = useVideosDispatch(); 
  return (
    <>
      <div className={`container ${theme}`}>
        <button className='close' onClick={()=>dispatch({type:'Delete',payload:id})}>⛔</button>
        <button className='edit' onClick={()=>onEdit(id)}>✎</button>
        <div className="pic">
            <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
        </div>  
        <div className="title"> {title} </div>
        <div className="channel"> {channel} {verified && '✅'}</div> 
        <div className="views"> 
            {views}  views <span>.</span> {time} 
        </div>
        <div>
          {children}
        </div>
      </div>
    </>
  );
})

export default Video;

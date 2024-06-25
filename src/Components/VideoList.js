import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../Hooks/Videos";
import { useCallback, useMemo } from "react";


function VideoList({onEdit}){
    const videos=useVideos();
    
    const play = useCallback(()=>console.log('Playing..'));
    const pause = useCallback(()=>console.log('Pause..'));
    const memoButton = useMemo(()=> (
        <PlayButton onPlay={play} onPause={pause}>Play</PlayButton>
    ),[play,pause]);

    return(
        <>
        {
            videos.map((video) => <Video
            key={video.id}
            id={video.id}
            title={video.title}
            time={video.time}
            channel={video.channel}
            views={video.views}
            verified={video.verified}
            onEdit={onEdit}
            >
            {memoButton}
            
            </Video>)
        }
        </>
    )
}

export default VideoList;
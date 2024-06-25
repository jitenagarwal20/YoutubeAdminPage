import useTheme from '../Hooks/Theme';
import './PlayButton.css'
import { useState,memo} from 'react';

const PlayButton = memo(function PlayButton({message,children,onPlay,onPause}){
    const theme = useTheme();
    const [playing,setPlaying]=useState(false);
    function handleClick(e){
        e.stopPropagation() // stops bubbling event from child to parent
        if(playing) onPause();
        else onPlay();
        setPlaying(!playing)
    }
    return(
        <button className={theme} onClick={handleClick}> {children} : {playing? '⏸️':'▶️'}</button>
    )
})

export default PlayButton;
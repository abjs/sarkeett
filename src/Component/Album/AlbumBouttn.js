import React from 'react'
import './AlbumBouttn.css'
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom';
import UploadForm from '../../Page/Album/UploadForm'
export default function StoryBox({bgImage}) {
  const history = useHistory

    return (
        <div className="StoryBox" style={{backgroundImage:`url(${bgImage})`}} >
        <UploadForm/>
        <div onClick={() => { history.push("/home") }} className="Album__Home__icon">
        <HomeIcon style={{ fontSize:60 }}/>
        </div> 
        </div>
        
    )
}

import React from 'react';
import './Title.css'
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom';
import UploadForm from './UploadForm';
const Title = () => {
  const history = useHistory
  ();
  return (
    <div className="Album__title__app">
     
      <h2 className="Album__title__left">Albam Uplode Page</h2>


      <div className="Album__title__midd">
          <UploadForm/>
      </div>

      <div onClick={() => { history.push("/home") }} className="Album__Home__icon">
        <HomeIcon style={{ fontSize:60 }}/>
      </div> 
      
    </div>
  )
}

export default Title;
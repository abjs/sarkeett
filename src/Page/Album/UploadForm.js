import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
// import PhotoIcon from '@material-ui/icons/Photo';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './UploadForm.css'
const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [fileName, setfileName] = useState("")
  const [error, setError] = useState(null);
  // const types = ['image/png','image/jpeg'];
  const types = ["image/png", "image/jpeg", "image/gif", "image/webp"];
  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setfileName(selected.name);
      
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };
  console.log(file)
  return (
    <form  className="UploadForm__app">
      <label className="UploadForm__lebel">
        <input type="file" className="UplodeForom__input" onChange={handleChange} />
        <div className="UploadForm__input__icon">
        <CloudUploadIcon  style={{ fontSize:50 }} />
        </div>
      </label>
      <div className="output">
      
      {/* { file && <img file={file} /> } */}
      { file && <ProgressBar file={file} setFile={setFile} /> }
      { error && <div className="UploadForm__error">{ error }</div>}
      { file && <div className="UploadForm__filename">{ fileName }</div> }
      </div>
    </form>
  );
}

export default UploadForm;
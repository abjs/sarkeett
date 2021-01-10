import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import PhotoIcon from '@material-ui/icons/Photo';
import './UploadForm.css'
const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  // const types = ['image/png','image/jpeg'];
  const types = ["image/png", "image/jpeg", "image/gif", "image/webp"];
  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };
  return (
    <form  className="UploadForm__app">
      <label className="UploadForm__lebel">
        <input type="file" className="UplodeForom__input" onChange={handleChange} />
        <div className="UploadForm__input__icon">
        <PhotoIcon  style={{ fontSize:50 }} />
        </div>
      </label>
      <div className="output">
      { file && <ProgressBar file={file} setFile={setFile} /> }
        { error && <div className="UploadForm__error">{ error }</div>}
        { file && <div className="UploadForm__filename">{ file.name }</div> }
      </div>
    </form>
  );
}

export default UploadForm;
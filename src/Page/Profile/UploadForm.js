import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { PhotoCamera } from "@material-ui/icons";
import './UploadForm.css'
const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

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
    <form className="Uplode__form">
      <label className="Uplode__lebel">
        <input className="Uplode__input" type="file" onChange={handleChange} />
        <PhotoCamera/>
      </label>
      <div className="output">
        { error && console.log(error)}
        { file && console.log( file.name) }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
  );
}

export default UploadForm;
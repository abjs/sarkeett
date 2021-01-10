import React, { useState } from 'react';
import { PhotoCamera } from "@material-ui/icons";
import ProgressBar  from './ProgressBar'
import './update__pic.css'
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
  if(file)
  console.log(file)
  return (
    <form>
      <label className="profile__use__form">
        <input type="file" onChange={handleChange} />
        <PhotoCamera />
      </label>
      { file && <ProgressBar file={file} setFile={setFile} /> }
      {/* {console.log(file)} */}
      {/* <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div> */}
    </form>
  );
}

export default UploadForm;
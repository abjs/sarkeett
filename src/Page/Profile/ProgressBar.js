import React, { useEffect } from 'react';
import useStorage from './useStorage';
import { motion } from 'framer-motion';
// import './ProgressBar.css'
const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);
  console.log(progress,url)

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
   <>
  </>
  );
} 

export default ProgressBar;
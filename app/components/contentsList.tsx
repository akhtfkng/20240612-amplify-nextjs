// 'use client';

// import React, { useState, useEffect } from 'react';
import ListProps from '../lib/s3';

const FileList = () => {
  // const [files, setFiles] = useState<any[]>([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function fetchFiles() {
  //     try {
  //       const files:any = await listFiles();
  //       setFiles(files);
  //     } catch (error:any) {
  //       console.error('Error fetching files:', error);
  //       setError(error.message);
  //     }
  //   }

  //   fetchFiles();
  // }, []);

  return (
    <div>
      <h1>File List</h1>
      <ListProps />
    </div>
  );
};

export default FileList;

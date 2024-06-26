'use client';

import React, { useState, useEffect } from 'react';
import { listFiles } from '../lib/s3';

const FileList = () => {
  const [files, setFiles] = useState<any[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFiles() {
      try {
        const files:any = await listFiles();
        setFiles(files);
      } catch (error:any) {
        console.error('Error fetching files:', error);
        setError(error.message);
      }
    }

    fetchFiles();
  }, []);

  return (
    <div>
      <h1>File List</h1>
      {error && <p>Error fetching files: {error}</p>}
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            {file.path} - Last modified: {new Date(file.lastModified).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;

import React from 'react';
import FileIcon from './FileIcon';




function getFileName(file){
  return [
    <FileIcon file={file} key={0}/>,
    <div className="file-name" key={1}>{file.name}</div>
  ];
}


export default getFileName;

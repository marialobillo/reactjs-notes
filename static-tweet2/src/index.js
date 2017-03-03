import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let FileList = React.createClass({
  propTypes: {
    files: React.PropTypes.array
  },
  render(){
    let files = this.props.files;
    return (
      <table className="file-list">
        <tbody>
          {files.map(file => (

            <FileListItem key={file.id} file={file}/>
          ))}
        </tbody>
      </table>
    );
  }
});

let FileListItem = React.createClass({
  propTypes: {
    file: React.PropTypes.object.isRequired
  },
  render(){
    var {file} = this.props;
    return (
      <tr className="file-lits-item">
        <FileIcon file={file} key={0}/>
        {getFileName(file)}
      </tr>
    );
  }
});

function FileIcon({file}){
  let icon = 'fa-file-text-o';
  if(file.type === 'folder'){
    icon = 'fa-folder';
  }

  return (
    <td className="file-icon">
      <i className={`fa ${icon}`}/>
    </td>
  );
}

FileIcon.propTypes = {
    file: React.PropTypes.object.isRequired
};

function getFileName(file){
  return [
    <td className="file-name" key={1}>{file.name}</td>

  ];
}

const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: 'Initial Commit'
    }
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: 'Initial Commit'
    }
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: 'Added a readme'
    }
  },
];


ReactDOM.render(
  <FileList files={testFiles}/>,
  document.getElementById('root')
);

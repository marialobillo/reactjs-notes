import React from 'react';


let FileList = React.createClass({
  propTypes: {
    files: React.PropTypes.array
  },
  render(){
    let files = this.props.files;
    return (
      <div className="file-list">
        <div>
          {files.map(file =>
            <FileListItem key={file.id} file={file}/>
          )}
        </div>
      </div>
    );
  }
});

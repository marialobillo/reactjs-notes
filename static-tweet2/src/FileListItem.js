import React from 'react';
import CommitMessage from './CommitMessage';
import getFileName from './getFileName';
import Time from './time';

let FileListItem = React.createClass({
  propTypes: {
    file: React.PropTypes.object.isRequired
  },
  render(){
    var {file} = this.props;
    return (
      <div className="file-list-item">
      {getFileName(file)}
      <CommitMessage commit={file.latestCommit} />
      <div className="age">
        <Time time={file.updated_at} />
      </div>
    </div>
    );
  }
});

export default FileListItem;

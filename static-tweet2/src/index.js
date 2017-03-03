import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
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
            <tr className="file-list-item" key={file.id}>
              <td className="file-name">{file.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
});


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

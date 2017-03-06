import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var List = React.createClass({
  propTypes: {
   tasks: React.PropTypes.array
 },
  render(){
    let tasks = this.props.tasks;
    return (
      <div className="content">
        <h3>Phone Features</h3>
        {tasks.map(task =>
           <p className="item" key={task.id}>{task.title} </p>
         )}
         <p className="texto">Add a card...</p>
      </div>
    );
  }
});

var testTask = [
  {
    id: 0,
    title: 'Subwoofer',

  },
  {
    id: 1,
    title: 'Non-porous',
  },{
    id: 2,
    title: 'Wings',
  },{
    id:3,
    title: 'Beveled Bezel'

  }
];

ReactDOM.render(
  <List tasks={testTask}/>,
  document.getElementById('root')
);

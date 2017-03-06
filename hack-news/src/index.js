import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


var testItems = [
  {
    id: 0,
    title: 'Mathematics for Computer Science',
    points: '531',
    author: 'Iainon',
    updated_at: '2016-07-11 21:24:00',
    comments: '9'
},
{
  id: 1,
  title: 'Mathematics for Computer Science',
  points: '531',
  author: 'Iainon',
  updated_at: '2016-07-11 21:24:00',
  comments: '9'
},{
  id: 2,
  title: 'Mathematics for Computer Science',
  points: '531',
  author: 'Iainon',
  updated_at: '2016-07-11 21:24:00',
  comments: '9'
},{
  id: 3,
  title: 'Mathematics for Computer Science',
  points: '531',
  author: 'Iainon',
  updated_at: '2016-07-11 21:24:00',
  comments: '9'
},
{
  id: 4,
  title: 'Mathematics for Computer Science',
  points: '531',
  author: 'Iainon',
  updated_at: '2016-07-11 21:24:00',
  comments: '9'
},{
  id: 5,
  title: 'Mathematics for Computer Science',
  points: '531',
  author: 'Iainon',
  updated_at: '2016-07-11 21:24:00',
  comments: '9'
},{
  id: 6,
  title: 'Mathematics for Computer Science',
  points: '531',
  author: 'Iainon',
  updated_at: '2016-07-11 21:24:00',
  comments: '9'
},{
  id: 7,
  title: 'Mathematics for Computer Science',
  points: '531',
  author: 'Iainon',
  updated_at: '2016-07-11 21:24:00',
  comments: '9'
},{
  id: 8,
  title: 'Mathematics for Computer Science',
  points: '531',
  author: 'Iainon',
  updated_at: '2016-07-11 21:24:00',
  comments: '9'
},{
  id: 9,
  title: 'Mathematics for Computer Science',
  points: '531',
  author: 'Iainon',
  updated_at: '2016-07-11 21:24:00',
  comments: '9'
}
];

var News = React.createClass({
  propTypes: {
    items: React.PropTypes.array
  },
  render(){
    let items = this.props.items;
    return (
      <div>
        <div>
          {items.map(item =>
            <div key={item.id} className="item">
              <div className="identifier">
                {item.id}
              </div>
              <div className="title">
                {item.title}
              </div>
              <div className="info">
                <span>{item.points} points</span>
                <span> by {item.author}</span> |
                <span> {item.comments} comments</span>


              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <News items={testItems}/>,
  document.getElementById('root')
);

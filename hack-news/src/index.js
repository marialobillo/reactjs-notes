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

var TopMenu = React.createClass({
  render(){
    return (
      <div className="top-menu">
        <span><a href="">new</a></span>
        <span><a href=""> |  comments</a></span>
        <span><a href=""> |  show</a></span>
        <span><a href=""> |  ask</a></span>
        <span><a href=""> |  jobs</a></span>
        <span><a href=""> |  submit</a></span>
        <span className="login"><a href="">login</a></span>

      </div>
    );
  }
});

var ItemList = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired
  },
  render(){
    var {item} = this.props;
    return (

      <div key={item.id} className="item">
        <div className="identifier">
          {item.id}.
        </div>
        <div className="item-title">
          {item.title}
        </div>
        <div className="info">
          <span>{item.points} points</span>
          <span> by {item.author}</span> |
          <span> {item.comments} comments</span>


        </div>
      </div>
    );
  }
});
var News = React.createClass({
  propTypes: {
    items: React.PropTypes.array
  },
  render(){
    let items = this.props.items;
    return (
      <div className="content">
        <div className="bar-menu">
          <span className="title"><strong>Hacker News</strong></span>
          <TopMenu />
        </div>
        <div className="ListItem">
          {items.map(item =>
            <ItemList item={item} />
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

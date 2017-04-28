var Body = React.createClass({
  getInitialState(){
    return { items: []}
  },
  handleSubmit(item){
    console.log(item);
  },
  componentDidMount(){
    console.log('Component mounted.');
    $.getJSON('/api/v1/items.json', (response) => { this.setState({items: response}) });
  },
  render(){
    return (
      <div>
        <NewItem handleSubmit={this.handleSubmit} />
        <AllItems items={this.state.items} />
      </div>
    )
  }
});

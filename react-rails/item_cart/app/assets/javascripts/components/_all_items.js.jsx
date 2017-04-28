var AllItems = React.createClass({
  handleDelete(id){
    this.props.handleDelete(id);
  },
  handleEdit(){

  },
  onUpdate(item){
    this.props.onUpdate(item);
  },
  render(){
    var items = this.props.items.map((item) => {
      return (
        <div key={item.id}>
          <Item item={item}
                handleDelete={this.handleDelete.bind(item.id)}
                handleUpdate={this.onUpdate} />
        </div>
      )
    });
    return (
      <div>
        {items}
      </div>
    )
  }
});

// TODO

class GroceryListItem extends React.Component {

  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.items}</li>
    );

  }

}
var GroceryList = (props) => (
  <ul>
    {props.GroceryList.map(item =>
      <GroceryListItem items={item} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList GroceryList={['Steak', 'Butter', 'Garlic']}/>
  </div>
);

var onListItemClick = (event) => {
  console.log('I got clicked');
};

ReactDOM.render(<App />, document.getElementById("app"));

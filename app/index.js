var React = require('react');
var ReactDOM = require('react-dom');

var TextDisplay = React.createClass({
  render: function() {
    var newColor = this.props.color;
    var style = {
      color: newColor
    }
    return <h1 style={style}>{this.props.textA}</h1>
  }
});

var HelloWorld = React.createClass({
  getInitialState: function () {
    return {color: 'blue'}
  },
  changeColor: function(){
    color = this.state.color == 'blue' ? 'red' : 'blue';
    this.setState({ color: color });
  },
  render: function () {
    return (
    <div>
      <TextDisplay color={this.state.color} textA={this.props.textA}/>
      <button onClick={this.changeColor}>Change Color</button>
    </div>
    )
  }
});

ReactDOM.render(
  <HelloWorld textA="Hello!"/>,
  document.getElementById('app')
);

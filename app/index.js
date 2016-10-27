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

var ButtonControls = React.createClass({

  render: function(){
    return (
      <div>
        <button onClick={this.props.onGreen}>Green</button>
        <button onClick={this.props.onBlue}>Blue</button>
        <button onClick={this.props.onRed}>Red</button>
      </div>
    )
  }
})

var HelloWorld = React.createClass({
  getInitialState: function () {
    return {color: 'black'}
  },
  handleGreen: function () {
    this.setState({color: 'green'});
    console.log('handle green');
  },
  handleBlue: function () {
    this.setState({color: 'blue'});
  },
  handleRed: function () {
    this.setState({color: 'red'});
  },

  render: function () {
    return (
    <div>
      <TextDisplay color={this.state.color} textA={this.props.textA}/>
      <ButtonControls onRed={this.handleRed} onBlue={this.handleBlue} onGreen={this.handleGreen} />
    </div>
    )
  }
});

ReactDOM.render(
  <HelloWorld textA="Hello!"/>,
  document.getElementById('app')
);

var React = require('react');
var ReactDOM = require('react-dom');

var TextInput = React.createClass({
  render: function(){
    return (
      <input onChange={this.props.onChange} value={this.props.displayText}></input>
    )
  }
})

var TextDisplay = React.createClass({
  render: function() {
    var newColor = this.props.color;
    var style = {
      color: newColor
    }
    return <h1 style={style}>{this.props.displayText}</h1>
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
    return {
      color: 'black',
      displayText: ''
    }
  },
  handleChange: function(event){
    this.setState({displayText: event.target.value});
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
      <TextInput onChange={this.handleChange} displayText={this.state.displayText}/>
      <ButtonControls onRed={this.handleRed} onBlue={this.handleBlue} onGreen={this.handleGreen} />
      <TextDisplay color={this.state.color} displayText={this.state.displayText}/>
    </div>
    )
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);

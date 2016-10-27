var React = require('react');
var ReactDOM = require('react-dom');

var TextInput = React.createClass({
  render: function(){
    return (
      <input onChange={this.props.onChange} value={this.props.displayText}></input>
    )
  }
});

var SizeControls = React.createClass({
  render: function(){
    return (
      <select onChange={this.props.onChange}>
        <option value="16px">16</option>
        <option value="30px">30</option>
        <option value="60px">60</option>
        <option value="100px">100</option>
      </select>
    )
  }
});

var TextDisplay = React.createClass({
  render: function() {
    var newColor = this.props.color;
    var newSize = this.props.size;
    var style = {
      color: newColor,
      fontSize: newSize
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
      displayText: '',
      size: '16px'
    }
  },
  handleInputChange: function(event){
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
  handleSelectChange: function (event) {
    this.setState({size: event.target.value});
  },
  render: function () {
    return (
    <div>
      <TextInput onChange={this.handleInputChange} displayText={this.state.displayText}/>
      <ButtonControls onRed={this.handleRed} onBlue={this.handleBlue} onGreen={this.handleGreen} />
      <SizeControls onChange={this.handleSelectChange} />
      <TextDisplay color={this.state.color} displayText={this.state.displayText} size={this.state.size}/>
    </div>
    )
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);

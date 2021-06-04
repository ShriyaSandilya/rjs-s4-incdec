import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {num: 0}
  }

  inc(){
    this.setState({num: this.state.num + 1})
  }

  dec(){
    this.setState({num: this.props.num - 1})
  }

  render() {
    return(
      <div className='App'>
        <button className='btn' onClick={() => {this.setState({num: this.state.num+1})}}>
          Increment
        </button>
        <button className='btn' onClick={() => {this.setState({num: this.state.num-1})}}>
          Decrement
        </button>
        <h2 class='num'>{this.state.num}</h2>
      </div>
    )
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: ' ',
      hasLoaded: false 
    }

  }
  handleMessageChange(e){
      this.setState({ message: e.target.value});
  }

  handleButtonClick(){
    this.setState({ hasLoaded : true});
  }
componentDidMount(){
  this.setState({ hasLoaded: false});
}


  render() {
      if (this.state.hasLoaded) {
        return <h1>Logged in as {this.state.message}</h1>;
      } else {
        return (
        <>
          <div style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', padding: '1em'}}>
              <input value={this.state.message} onChange={(e) => this.handleMessageChange(e)}/>
              <button onClick={() => this.handleButtonClick()}>Login</button>
          </div>
        </>
          );
          
      }
        
    
  }
}

export default App;

// @ts-nocheck


import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeDetail = () => {
    this.setState({color: "blue", model: "Model S", year: "2023", brand: "Tesla"});
   }

    // lifecycle methods

    componentDidMount() {
      console.log("componentDidMount");
      // runs after the first Render  => RETRIEVE DATA FROM BACKEND SERVER
    }

    componentWillUnmount() {
      console.log("componentWillUnmount");
      // runs before componennt unmount
    }

    componentDidUpdate(){
      console.log("componentDidUpdate");
    }

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          Color: {this.state.color} - Model: {this.state.model} from {""}{this.state.year}
        </p>
        <button
          type="button"
          onClick={this.changeDetail}
        >Change detail
        </button>
      </div>
    );
  }
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);


export default Test;
import './App.css';
import React,{ PureComponent } from "react";
import OneInput from "./components/OneInput.js";
import Content from "./components/Content";

class App extends PureComponent {

  state={
    content: '',
    house: [
      {
        id: 'bed',
        name: 'bed'
      },
      {
        id: 'pillow',
        name: 'pillow'
      },
      {
        id: 'quilt',
        name: 'quilt'
      }
    ],
  }

  trans = (twoValues) => {
    this.setState({
      content: twoValues,
    })
  }
  delete =(id) => {
      console.log('topside', id);
      const house = [...this.state.house];
      const newHouse = house.filter(h => h.id !== id);
      this.setState({
        house: newHouse
      })
  }

  render() {
    const {content, house} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          hello
        </header>

        <OneInput sub={this.trans}></OneInput>
        <div>app: {content}</div>
        <Content content={content} house={house} topside={this.delete}></Content>
      </div>
    );
  }

}

export default App;

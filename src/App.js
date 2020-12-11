import './App.css';
import React,{ PureComponent } from "react";
import OneInput from "./components/OneInput.js";
import Content from "./components/Content";
import CreateForm from "./components/CreateForm";

import LiftStateUp from "./components/rate/LiftStateUp";

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
  addBed = (one, two) => {
    const house = [...this.state.house];
    const value = {id: one, name: two};
    house.push(value);
    console.log('add',house);
    this.setState({
      house
    })
  }

  render() {
    const {content, house} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          hello
        </header>

        <OneInput sub={this.trans} add={this.addBed}></OneInput>
        <div>app: {content}</div>
        
        <Content content={content} house={house} topside={this.delete}></Content>

        <div>createForm: controlled components</div>
        <CreateForm></CreateForm>

        <hr/>
        <LiftStateUp></LiftStateUp>
      </div>
    );
  }

}

export default App;

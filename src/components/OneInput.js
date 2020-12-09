import React,{PureComponent} from 'react';

class OneInput extends PureComponent {
    state = {
        one: '',
        second: '',
    }

    getInput = (e) =>{
        this.setState({
            one: e.target.value,
        })
    }

    getSecond = (e) => {
        this.setState({
            second: e.target.value,
        })
    }

    submitInputs = () => {
        const {sub, add} = this.props;
        const twoValues = this.state.one + ', '+ this.state.second + '!';
        const one = this.state.one;
        const two = this.state.second;
        console.log(twoValues);
        
        sub(twoValues);
        add(one,two);
        
    }

    render() {
        const {one,second} = this.state;


        return (
            <div>
                <input type='text' value={one} onChange={this.getInput}></input>
                <div>{one}</div>
                <input type='text' value={second} onChange={this.getSecond}></input>
                <div>{second}</div>
                <button onClick={this.submitInputs}>show</button>
            </div>
        );
    }
}

export default OneInput;
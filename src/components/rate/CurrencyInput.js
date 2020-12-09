import React,{PureComponent} from 'react';

class CurrenctInput extends PureComponent {
    state={
        money: '0',
    }

    showNumber = (e) => {
        const {jMoney} = this.props;
        const {currency} = this.props;

        this.setState({
            money: e.target.value,
        })
        console.log(currency, e.target.value)
        jMoney(this.props.currency, e.target.value);
    }

    render() {
        const {money} = this.state;
        const {currency} = this.props;
 
        return (
            <div>
                <fieldset>
                    <legend>{currency}:</legend>
                    <input 
                        type='text'
                        value={money}
                        onChange={this.showNumber} 
                    ></input>
                </fieldset>
            </div>
        )
    }
}

export default CurrenctInput; 
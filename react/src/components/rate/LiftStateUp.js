import React,{PureComponent} from 'react';
import Message from './Message';
import CurrencyInput from './CurrencyInput';

class LiftStateUp extends PureComponent {
    state={
        country:['Japan', 'China'],
        currency: ['日元JPY', '人民币CNY'],
        changedC: '',
        changedJ: '',
        currentCountry: '',
    }

    calcToC = (j) => {
        const newJ = j.replace(/[^\d\.]/g, '');
        console.log(newJ)
        const moneyC = newJ !== 0 && newJ.length > 0 ? Math.floor(parseFloat(newJ*0.065) * 100)/ 100 : '';
        let value = [newJ, moneyC];
        return value;
        
    }

    calcToJ = (c) => {
        const newC = c.replace(/[^\d\.]/g, '');
        const moneyJ = newC !== 0 && newC.length > 0 ? Math.floor(parseFloat(newC/0.065) * 100)/ 100 : '';
        const value = [newC, moneyJ];
        return value;
    }

    moneyTrans = (currency, money) => {
        const {country} = this.state; 

        const changedJ = currency === '日元JPY' ? this.calcToJ(money)[0] : this.calcToJ(money)[1];
        const changedC = currency === '日元JPY' ? this.calcToC(money)[1] : this.calcToC(money)[0];
        const currentCountry = currency === '日元JPY' ? country[1] : country[0];
        this.setState({
            changedJ, changedC, currentCountry,
        })
    }

    render() {
        const {currency, changedJ, changedC, currentCountry} = this.state;

        return (
            <div>
                {currentCountry.length > 0 ? <Message country={currentCountry}></Message> : ''}

                <CurrencyInput country={currency[0]} trans={this.moneyTrans} money={changedJ}></CurrencyInput>
                <CurrencyInput country={currency[1]} trans={this.moneyTrans} money={changedC}></CurrencyInput>

            </div>
        )
    }
}

export default LiftStateUp; 
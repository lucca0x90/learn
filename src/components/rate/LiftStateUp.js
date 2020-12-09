import React,{PureComponent} from 'react';
import Message from './Message';
import CurrencyInput from './CurrencyInput';

class LiftStateUp extends PureComponent {
    state={
        country:['Japan', 'China'],
        currency: ['日元JPY', '人民币CNY'],
    }

    // calc = (j, c) => {
    //     const moneyJ = j;
    //     const moneyC = parseFloat(j*0.65)
    // }

    moneyTrans = (currency, money) => {
        let moneyJ, moneyC;
        console.log(currency, money);
        // currency === '日元JPY' ? (moneyJ = money, moneyC = parseFloat(money*0.65)) :
        // (moneyJ = parseFloat(money/0.65), moneyC = money)
    }

    render() {
        const {country, currency} = this.state;

        return (
            <div>
                <CurrencyInput currency={currency[0]} jMoney={this.moneyTrans}></CurrencyInput>
                <CurrencyInput currency={currency[1]}></CurrencyInput>

                <Message country={country[0]}></Message>
            </div>
        )
    }
}

export default LiftStateUp; 
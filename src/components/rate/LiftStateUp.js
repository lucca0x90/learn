import React,{PureComponent} from 'react';
import Message from './Message';
import CurrencyInput from './CurrencyInput';

class LiftStateUp extends PureComponent {
    state={
        country:['Japan', 'China'],
        currency: ['日元JPY', '人民币CNY'],
    }

    moneyTrans = (currency, money) => {
        console.log(currency, money)
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
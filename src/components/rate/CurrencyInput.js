import React,{PureComponent} from 'react';

class CurrenctInput extends PureComponent {
    state={}

    showNumber = (e) => {
        const {trans, country} = this.props;
        trans(country, e.target.value);
    }

    render() {
        const {country,  money} = this.props;
        // console.log('input',country);

        return (
            <div>
                <fieldset>
                    <legend>{country}:</legend>
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
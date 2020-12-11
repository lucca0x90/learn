import React, {PureComponent} from 'react';

class CreateForm extends PureComponent {
    state={
        textValue: '',
        textareaValue: 'You can type in here.',
        checkboxValue: false,
        numberValue: 7,
        nullValue: 'oops'
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(
            'sub value is: ' + this.state.textValue + 
            ' , nullValue is: ' + this.state.nullValue,
        );
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        })
    }


    render() {
        const {textValue, textareaValue, checkboxValue, numberValue, nullValue} = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>name: </label>
                    <input 
                        name="textValue"
                        type="text"
                        value={textValue}
                        onChange={this.handleInputChange}></input>
                    <input type="submit" value="Sub"></input>
                    <br/>
                    <label>textarea: </label>
                    <textarea 
                        name="textareaValue"
                        value={textareaValue} 
                        onChange={this.handleInputChange}></textarea>
                    <br/>
                    <label>checkbox:</label>
                    <input 
                        name="checkboxValue" 
                        type="checkbox" 
                        checked={checkboxValue} 
                        onChange={this.handleInputChange}
                     ></input>
                    <br/>
                    <label>Number: </label>
                    <input 
                        name="numberValue"
                        type="number"
                        value={numberValue}
                        onChange={this.handleInputChange}
                    ></input>
                    <br/>
                    <label>Input null value: </label>
                    <input 
                        // name="nullValue" 
                        type="text"
                        value={nullValue} 
                        onChange={this.handleInputChange}></input>
                </form>
            </div>
        )
    }
}

export default CreateForm;
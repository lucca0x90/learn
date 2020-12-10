import React,{PureComponent} from 'react';

class Message extends PureComponent {
    state={}

    render() {
        const {country} = this.props;
        // console.log('message', country);

        return (
            <div>
                <h3>Welcome to {country}! Have a nice trip.</h3>
            </div>
        )
    }
}

export default Message; 
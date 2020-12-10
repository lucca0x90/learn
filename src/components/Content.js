import React,{PureComponent} from 'react';
import Bed from "./Bed";


class Content extends PureComponent {
    state={
        temper: true,
        array: [1,2,3,4,5],
    }

    handleClick()  {
        console.log('clicked', this);
    }
    buttonClick= ()=> {
        const {temper} = this.state;
        this.setState({
            temper: !temper,
        })
    }
    transDelete= (id) => {
        const {topside} = this.props;
        topside(id);
    }

    render() {
        // console.log('content',this.props)
        const {content, house} = this.props;
        const {temper,array} = this.state;

        return (
            <div>
                <div>show the child, the two inputs' values:</div>
                <div>from app: {content}</div>
                <div>
                    <button onClick={this.handleClick}>click me</button>
                    <button onClick={this.buttonClick}>temper:{temper ? 'angry' : 'that\'s ok'}</button>
                </div>
                <div>{temper ? 'I\'m so angry' : 'just have different thought'}</div>
                <div>
                    <ul>{array.map((a, index) => 
                        <li key={index}>{a}</li>
                        )}
                    </ul>
                </div>
                <div>
                    In my bedroom,I have 
                    <ul>
                        {house.map((h) => 
                            <Bed key={h.id} name={h.name} id={h.id} onDelete={this.transDelete}></Bed>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Content;
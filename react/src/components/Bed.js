import React,{PureComponent} from 'react';

class Bed extends PureComponent {
    state={}

    handleDelete = () => {
        const {id, onDelete} = this.props;
        onDelete(id);
    }

    render() {
        const {name} = this.props;

        return (
            <div>
                <li>{name}</li>
                <button onClick={this.handleDelete}>delete</button>
            </div>
        )
    }
}

export default Bed;
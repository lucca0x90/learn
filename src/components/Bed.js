import React,{PureComponent} from 'react';

class Bed extends PureComponent {
    state={
    }

    handleDelete = () => {
        const {id} = this.props;
        const {onDelete} = this.props
        console.log(id)
        onDelete(id);
    }

    render() {
        const {name} = this.props;
        console.log(this.props)

        return (
            <div>
                <li>{name}</li>
                <button onClick={this.handleDelete}>delete</button>
            </div>
        )
    }
}

export default Bed;
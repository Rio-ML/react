import React, {Component} from 'react';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.itemDelete = this.itemDelete.bind(this);
    }

    itemDelete = () =>{
        this.props.itemDelete(this.props.index);
    };

    render(){
        return(
            <li onClick={this.itemDelete}>{this.props.content}</li>
        );
    }

}

export default TodoItem;
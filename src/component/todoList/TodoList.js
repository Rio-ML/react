import React, {Component, Fragment} from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            list: [],
            inputValue: ''
        };
        this.btnClick = this.btnClick.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.itemDelete = this.itemDelete.bind(this);
    }

    btnClick(){
        const list = this.state.inputValue ? [...this.state.list, this.state.inputValue] : [...this.state.list,];
        this.setState({
            list: list,
            inputValue: ''
        });
    }

    inputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }

    itemDelete(index){
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({list});
    }

    render(){
        return(
            <Fragment>
                <input value={this.state.inputValue} onChange={this.inputChange}/>
                <button onClick={this.btnClick}>add</button>
                <ul>
                    {this.state.list.map((item, index) => {
                        return <TodoItem itemDelete={this.itemDelete} key={index} content={item} index={index}/>
                        //return <li key={index} onClick={this.liDelete.bind(this, index)}>{item}</li>
                    })
                    }
                </ul>
            </Fragment>
        );
    };
}

export default TodoList;
import React,{Component} from 'react';
import AddTodo from "./AddTodo";
import ShowList from "./ShowList";

/**
 * 父组件向子组件
 */
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            tolist:[],

        }
    }


    handleChange(event) {
        this.setState({
            tolist: event

        });
    }



    render(){
        return(
            <div>
                <h4 align="center">总共有{this.state.tolist.length}条数据</h4>
               {/* //子组件向父组件传值*/}
                <AddTodo onAddTODO={this.handleChange.bind(this)} add={this.state.tolist} />
                <ShowList  onDelete={this.handleChange.bind(this)} todolist={this.state.tolist}/>
            </div>
        );
    }
}

export default TodoList;
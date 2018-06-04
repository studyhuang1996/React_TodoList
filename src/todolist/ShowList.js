import React,{Component} from 'react';

/**
 * 展示列表
 */
class ShowList extends Component {
    constructor(props) {
        super(props);

    }
    handleClick(event){
       let indexs = event.target.getAttribute("data-key");
        //删除数组中索引为index的元素
        // var li = document.getElementById("todo");
        //
        //  var index = li.getAttribute("key");
        //  console.log(index+"del"+li+indexs);
        let del = this.props.todolist;
        del.splice(indexs,1);
        this.props.onDelete(del);
    }
    render(){
        return (
            <ul style={{marginLeft:500}}>
                {this.props.todolist.map((data,index)=>{
                    return (
                        <div id="todo" key={index}>
                            <li >{index+1}. {data}
                            <button style={{margin:20,}} type="button" className="btn btn-primary"
                                onClick={(e)=>{this.handleClick(e)}} data-key={index} >删除</button>
                            </li>
                        </div>
                     )
                })}

            </ul>

        );
    }


}

export default ShowList;
import React,{Component} from 'react';

/**
 * 添加代办事件
 * todo怎么把数据传给父组件
 * 子组件则是通过调用父组件传给它的函数给父组件传递数据。
 */
class AddTodo extends Component{
    constructor(props){
        super(props);
        // this.state={
        //     todo:''
        // }
    }


    handleClick(){
        //获取父组件传过来的值
       let adds = this.props.add;
       var val = document.getElementById("todo");
       let value =val.value;
       if ( value=== ''){
           alert("添加数据不能为空");
           return false;
       }

       adds.push(value);
        val.value='';
        //传值给父组件
       this.props.onAddTODO(adds);

    }
    render(){
        return(
            <div style={{marginLeft:500}}>
                <h3>待办事项</h3><br/>
                <input type="text" id="todo"/>
                &nbsp;&nbsp;
                <button type="button" className="btn btn-primary"
                        onClick={(e)=>{this.handleClick(e)}}>添加</button>
            </div>
        );
    }
}

export default AddTodo;
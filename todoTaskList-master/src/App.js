import React from "react";
import Header from './Header';
import ToDoList from './ToDoList';
import SubmitForm from './SubmitForm';

class App extends React.Component{
    state ={
        task:['milk', 'dogs', 'homework'],
    };
    handleDelete = (index) =>{
      const tempTaskArray = this.state.task;
      tempTaskArray.splice(index,1);
      this.setState({task: tempTaskArray});
    };
    handleSubmit = (tasks) =>{
        this.setState({task: [...this.state.task, tasks]})
    }
    render() {
        return (
            <div className='wrapper'>
                <div className='card frame'>
                    <Header numToDos = {this.state.task.length}/>
                    <ToDoList items={this.state.task} onDelete={this.handleDelete}/>
                    <SubmitForm onFormSubmit={this.handleSubmit}/>
                </div>
            </div>
        );
    }
}
export default App;
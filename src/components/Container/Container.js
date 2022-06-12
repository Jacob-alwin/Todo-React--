import React, { Component } from 'react'
import './container.css'
import Heading from '../Heading/Heading'
import TodoNotes from '../TodoNotes/TodoNotes'
import DoneNotes from '../DoneNotes/DoneNotes'
import ProgressNotes from '../ProgressNotes/ProgressNotes'

export class Container extends Component {

    state = {
        todoList: [{id:1, title: "First", details: "Do this shit", hide:false },{id:2, title: "First", details: "Do this shit", hide:false },],
        progressList: [{id:2, title: "First", details: "Do this shit" },],
        doneList: [{id:3, title: "First", details: "Do this shit" },],
        newTask: { id: null, title: null, details: null }
    }
    constructor(props) {
        super(props);
        // Created ref
        this.titleRef = React.createRef();
        this.detailsRef = React.createRef();
    }


    render() {

        const addTask = () => {
            const id = Math.random()
            console.log(this.state.todoList);


            const title = this.titleRef.current.value;
            const detail = this.detailsRef.current.value;

            let newTask = { id: id, title: title, details: detail }

            this.setState({
                todoList: [...this.state.todoList, newTask]
            })
        }

        const toProgress=(from,id)=>{

            if(from==='todo'){
                let task= this.state.todoList.filter((items)=>items.id===id)
                const newTodoList= this.state.todoList.filter((items)=>items.id!==id)
                

                this.setState({
                    todoList:newTodoList,
                    progressList:[...this.state.progressList,task[0]]
                })

            }
            else{
                let task= this.state.doneList.filter((items)=>items.id===id)
                const newTodoList= this.state.doneList.filter((items)=>items.id!==id)
                

                this.setState({
                    doneList:newTodoList,
                    progressList:[...this.state.progressList,task[0]]
                })

            }

        }

        const toTodo=(from,id)=>{

            if(from==='prog'){
                let task= this.state.progressList.filter((items)=>items.id===id)
                const newProgList= this.state.progressList.filter((items)=>items.id!==id)
                

                this.setState({
                    progressList:newProgList,
                    todoList:[...this.state.todoList,task[0]]
                })

            }
            else{
                let task= this.state.doneList.filter((items)=>items.id===id)
                const newDoneList= this.state.doneList.filter((items)=>items.id!==id)
                

                this.setState({
                    doneList:newDoneList,
                    todoList:[...this.state.todoList,task[0]]

                })

            }

        }

        const delet=(list,id)=>{
            if(list==='todo'){
                const newList = this.state.todoList.filter((items)=>items.id!==id)
                this.setState({
                    todoList:newList
                })
            }
            else if(list==='done'){
                const newList = this.state.doneList.filter((items)=>items.id!==id)
                this.setState({
                    doneList:newList
                })
            }
            else{
                const newList = this.state.progressList.filter((items)=>items.id!==id)
                this.setState({
                    progressList:newList
                })
            }
        }
        
        const toDone=(from,id)=>{

            if(from==='prog'){
                let task= this.state.progressList.filter((items)=>items.id===id)
                const newProgList= this.state.progressList.filter((items)=>items.id!==id)
                

                this.setState({
                    progressList:newProgList,
                    doneList:[...this.state.doneList,task[0]]
                })

            }
            else{
                let task= this.state.todoList.filter((items)=>items.id===id)
                const newTodoList= this.state.todoList.filter((items)=>items.id!==id)
                

                this.setState({
                    todoList:newTodoList,
                    doneList:[...this.state.doneList,task[0]]

                })

            }

        }

        const archieve = (from,index)=>{
            if(from==='todo'){
                this.state.todoList[index].hide=true
                console.log(this.state.todoList);

                this.setState({
                    todoList:this.state.todoList
                })
            }
        }

       

        return (
            <div className="container">
                <div className="row">

                    <div className="col-lg-5">
                        <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">


                            <div
                                data-bs-toggle="tooltip" data-bs-placement="top"
                                data-bs-custom-classname="custom-tooltip"
                                title="Click to add a new Task" >

                                <Heading heading={'Todo'} color={"#B8E8FC"} id={"todo"} />
                            </div>
                        </div>
                        <div className="card card-content-todo shadow-sm p-3 mb-0 bg-body " >
                            <div className="card-body card-body-content">

                                {
                                    this.state.todoList.filter((items=>items.title.startsWith('a'))).map((items, index) => {

                                        return <div class="dropdown">
                                            <div type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                {items.hide?"archieved":<TodoNotes key={index} items={items} />}
                                            </div>
                                            
                                            <ul class='dropdown-menu align-items-center justify-content-center' aria-labelledby="dropdownMenuButton1" style={{border:'none',backgroundOpacity:'10%'}}>
                                            <li><div class="btn-group m-3" role="group" aria-label="Basic outlined example" >
                                                    <button type="button" class="btn btn-outline-warning" onClick={()=>{toProgress("todo",items.id)}}>{"Progress > "} </button>
                                                    <button type="button" class="btn btn-outline-success" onClick={()=>{toDone("done",items.id)}}>{"Done >"} </button>
                                                    
                                                </div>
                                            </li>
                                            <li className='ms-3 ps-2 align-items-center justify-contents-between' >
                                                <button className='btn btn-outline-success ' onClick={()=>archieve('todo',index)}><i class="bi-archive " ></i></button>
                                                <button className='btn btn-outline-danger ms-3' onClick={()=>delet('todo',items.id)}><i class="bi-trash " ></i></button>
                                            </li>

                                            </ul>
                                            
                                        </div>
                                    })
                                }

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <Heading heading={'In Progress'} color={"#FFFF5C"} id={"progress"} />
                        <div className="card card-content-progress shadow-sm p-3 mb-0 bg-body " >
                            <div className="card-body card-body-content">

                                {
                                    this.state.progressList.map((items, index) => {
                                        return <div class="dropdown">
                                        <div type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <ProgressNotes key={index} items={items} />
                                        </div>
                                        
                                        <ul class='dropdown-menu align-items-center justify-content-center' aria-labelledby="dropdownMenuButton1" style={{border:'none',backgroundOpacity:'10%'}}>
                                        <li><div class="btn-group m-3" role="group" aria-label="Basic outlined example" >
                                                <button type="button" class="btn btn-outline-primary" onClick={()=>{toTodo("prog",items.id)}}>{"Todo < "} </button>
                                                <button type="button" class="btn btn-outline-success" onClick={()=>{toDone("prog",items.id)}}>{"Done >"} </button>
                                                
                                            </div>
                                        </li>
                                        <li className='ms-3 ps-2 align-items-center justify-contents-between' >
                                            <button className='btn btn-outline-success '><i class="bi-archive " ></i></button>
                                            <button className='btn btn-outline-danger ms-3' onClick={()=>delet('prog',items.id)}><i class="bi-trash " ></i></button>
                                        </li>

                                        </ul>
                                        
                                    </div>
                                    })
                                }

                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <Heading heading={'Done'} color={"#5CFF5C"} id={"done"} />
                        <div className="card card-content-done shadow-sm p-3 mb-0 bg-body " >
                            <div className="card-body card-body-content">

                                {
                                    this.state.doneList.map((items, index) => {
                                        return <div class="dropdown">
                                        <div type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <DoneNotes key={index} items={items} />
                                        </div>
                                        
                                        <ul class='dropdown-menu align-items-center justify-content-center' aria-labelledby="dropdownMenuButton1" style={{border:'none',backgroundOpacity:'10%'}}>
                                        <li><div class="btn-group m-3" role="group" aria-label="Basic outlined example" >
                                                <button type="button" class="btn btn-outline-primary" onClick={()=>{toTodo("done",items.id)}}>{"Todo < "} </button>
                                                <button type="button" class="btn btn-outline-warning" onClick={()=>{toProgress("done",items.id)}}>{"Progress <"} </button>
                                                
                                            </div>
                                        </li>
                                        <li className='ms-3 ps-2 align-items-center justify-contents-between' >
                                            <button className='btn btn-outline-success '><i class="bi-archive " ></i></button>
                                            <button className='btn btn-outline-danger ms-3' onClick={()=>delet('done',items.id)}><i class="bi-trash " ></i></button>
                                        </li>

                                        </ul>
                                        
                                    </div>
                                    })
                                }

                            </div>
                        </div>

                    </div>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New Task</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row" style={{ margin: "5%" }}>

                                    <input type="text" className="form-control" ref={this.titleRef} id="newTitle"  placeholder="Title" aria-label="First name" />
                                </div>
                                <div className="row" style={{ margin: "5%" }}>

                                    <textarea type="textarea" className="form-control" ref={this.detailsRef} id="newDetails"  placeholder="Description" aria-label="Last name" />
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal" onClick={addTask}>Add +</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container
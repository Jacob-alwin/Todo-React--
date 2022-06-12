import React, { Component } from 'react'

export default class Header extends Component {

    state={
        searchKey:''
    }
    
    handleChange=(e)=>{
          this.setState({
            searchKey:e.target.value
          })
      }
      handleClick=()=>{
  
          this.props.search(this.state);
      }
  

  render() {


    return (
      <div className="row" style={{marginBottom:'1%'}} >
        <div className="col-lg-6">
        <div className="input-group">
            <input className="form-control border me-3 rounded-pill" type="text" onChange={(e)=>{this.handleChange(e)}} placeholder="search" id="example-search-input"/>
            <span className="input-group-append  " style={{marginRight:'30%'}} >
                <button className="btn btn-outline-dark border-start-0 border rounded-pill ms-n3 " onClick={this.handleClick}  type="button">
                    <i className="bi-search"></i>
                </button>
            </span>
     </div>
        </div>
        <div className="col-lg-6" >
            <button className='btn btn-outline-info m'style={{marginLeft:'80%'}}  onClick={()=>{this.props.changeArchive()}}><i className="bi-archive " ></i>{" "}Archive</button>
        </div>
      </div>
    )
  }
}

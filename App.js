import React, { Component, Fragment } from "react";

const validateEmail = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    export default class Handle extends Component{

            constructor(){

                super()
                this.state={
                  
                    name:"",
                    email:"",
                    role:"",
                    gender:"",
                    term:"",

                    mekala:{
                      
                        name:"",
                        email:"",
                        role:"",
                        gender:"",
                        term:"",

                    }  
                  }
              } 
                 
            handleChange=({target:{name,value, checked}})=>{
                         console.log(name,value,checked)
                if(name==="term"){

                    value=checked;

                      }

         ////// Advance validations code //////////////
               
          const mekala={...this.state.mekala} ////copy of value//
          console.log(mekala)

                switch(name){

                    case "name":{

                        if(!value){
                            mekala.name="name is required";
                        }else{
                            mekala.name="";
                        }

                        break;


                    }
                    case "email":{

                        if(!value){
                            mekala.email="email is required";
                        }else if(!validateEmail.test(value)){
                            mekala.email="email should be in correct format";
                        }else
                        {
                            mekala.email="";
                        }

                        break;


                        
                    }
                    case "role":{
                       
                        if(!value){
                            mekala.role="role is required";
                        }else{
                            mekala.role="";
                        }

                        break;

                        
                    }
                    case "gender":{
                        
                        if(!value){
                            mekala.gender="gender is required";
                        }else{
                            mekala.gender="";
                        }

                        break;

                        
                    }

                    case "term":{


                        if(!value){
                            mekala.term="term is required";
                        }else{
                            mekala.term="";
                        }

                        break;

                        
                    }

                    default:{

                        console.log("default")
                    }   
                               
                }
    
                 this.setState({mekala,[name]: value})
          
                  }    
           

//////////////////////////////////////////////////validation code and submit code//////

                  validation=()=>{


             const {name,email,role,gender,term}=this.state

             if(name&&email&&role&&gender&&term){

                if(validateEmail.test(email)){

                         return true;
                   
                           }
                        
                          }
                     return false;

                    }

            handleSubmit=(event)=>{

                event.preventDefault();

                if(this.validation()){

                    console.log(this.state)

                }

            }



////////////////////////////////////////////////////////////////////////////////////////










            render(){

                return(

               <Fragment>

                   <form onSubmit={this.handleSubmit}>
                
                <div>
                    <label>Candidate Name: </label>
                    <input name="name" type="text" value={this.state.name} onChange={this.handleChange}></input>
                   {this.state.mekala.name?<p>{this.state.mekala.name}</p>:""}
                </div>
                <br/>
                <div>
                    <label>Candidate email: </label>
                    <input name="email" type="text" value={this.state.email} onChange={this.handleChange}></input>
                    {this.state.mekala.email?<p>{this.state.mekala.email}</p>:""}
                
                </div>
                <br/>
                <div>
                    <label>Role Applied for : </label>

                    <select name="role" value={this.state.role} onChange={this.handleChange}>
                     
                     <option></option>
                     <option value="react">ReactJs Dev</option>
                     <option value="node">NodeJs Dev</option>
                     <option value="mern">Mern Dev</option>

                    </select>
                    {this.state.mekala.role?<p>{this.state.mekala.role}</p>:""}
                </div>
                <br/>

                <div>
               
                  <label>Gender: </label>
                  <input name="gender" type="radio" value="Male" onChange={this.handleChange}/>Male
                  <input name="gender" type="radio" value="Female" onChange={this.handleChange}/>Female
                  {this.state.mekala.gender?<p>{this.state.mekala.gender}</p>:""}
                </div>


                <br/>

                <div>

                <input name="term" type="checkbox" checked={this.state.term} onChange={this.handleChange}></input>
                <label>Please accept terms and conditions</label>             
                {this.state.mekala.term?<p>{this.state.mekala.term}</p>:""}
                </div>
                <br/>



                <div>

                 <input type="submit"/>

                </div>

                </form>


               </Fragment>
 
                )
            }


    }





    

    ////MEKALA place lo errors ani kuda thesukovachu//////
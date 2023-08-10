import React from "react";


function Login(){
    const question=[
        {
            id: 1,
            question: "Which company hit 1 trillion mark first?",
            options: ["Petrochina","Apple","Microsoft","Blackrock"],
            correctAnswer: "Petrochina",
        },
        {
            id: 2,
            question: "The members of the Rajya Sabha are elected by",
            options: ["the people","Lok Sabha","elected members of the legislative assembly","elected members of the legislative council"],
            correctAnswer: "elected members of the legislative assembly",
        },
        {
            id: 3,
            question: "Which of the following countries currently holds a AAA credit rating from S&P Global, Fitch, and Moody’s agencies?",
            options: ["France","United States","Australia","Canada"],
            correctAnswer: "Australia",
        },
        {
            id: 4,
            question: "Who is the father of Geometry?",
            options: ["Aristotle","Euclid","Pythagoras","Kepler"],
            correctAnswer: "Euclid",
        },
        {
            id: 5,
            question: "Who is the author of the book 'Forbidden Verses'?",
            options: ["Salman RushDie","Abu Nuwas","Ms. Taslima Nasrin","D.H. Lawrence"],
            correctAnswer: "Abu Nuwas",
        },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    ]
   
    const[page,setPage]=React.useState(1)
     
    const[name,setName]=React.useState()
    const[ans,setAns]=React.useState({})
    function handleTextChange(e0) {
        setName(e0.target.value);

       console.log(name);
    }
    const handleClick=()=>{
        localStorage.setItem('uname',name)
        setPage(page+1)
    }
    const handleOptionChange=(e1)=>{
       
      console.log(e1.target.name,e1.target.value)
       const{name,value}=e1.target
       setAns({
           ...ans,
           [name]:value  
       })
   }
   console.log(ans)
   const finalPage=()=>{
   let score=0
   question.forEach((fld)=>{
    if(ans[fld.id]==fld.correctAnswer){
        score++
    }
   })
   return score

}
   
    return(
<>
{page==1 && (<div>
     <div style={{paddingTop: '100px', paddingLeft: '400px', paddingRight: '400px',}}>
    <div style={{backgroundColor: 'burlywood', textAlign: 'center',}}>
    <div style={{color: 'coral', fontSize: '40px', padding: 'auto',fontWeight: 'bolder',paddingTop: '40px',}}>
       <center>
        Welcome Back
       </center> 
    </div>
    <label>
        <div style ={{color: 'blueviolet', fontSize: '25px',fontWeight:'bolder',paddingTop: '45px',}}>
            <center>
        Username
        <input onChange={(e)=>
    (handleTextChange(e))}/>
    </center>
    </div>
    </label>
   <br/>
    <label for="psw">  
        <div style ={{color: 'blueviolet', fontSize: '25px',fontWeight: 'bolder',paddingTop: '35px',}}>
        <center>
            Password
        </center>
        </div>
        </label>
    <center>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required onChange={(e)=>
    (handleTextChange(e))}/>
</center>
    <br/>
     <div style={{paddingTop: '15px', size: '35px', paddingRight: '20px'  }}></div>
<button onClick={()=>{handleClick()}} class="btn btn-primary">Login</button>
</div>
<div style={{paddingTop: '25px', size: '35px', backgroundColor: 'burlywood',alignItems: 'flexStart',paddingLeft:' 50px', paddingBottom:   '20px',}}>
    <button  onClick={()=>{handleClick()}} class="btn btn-primary">Signup</button>
<div style= {{paddingLeft: '50px',paddingTop: '20px',}}>
<button onClick={()=>{handleClick()}} class="btn btn-primary">Forgot Password</button>

</div>
</div>
</div>
</div>)}

{page==2 && (
    <div >
    <fieldset>
        <fieldset>
            <h2>Quiz App</h2><br/>
        </fieldset>
            {question.map((fld)=>(
               <>
                <div >
                    <fieldset>
                       
                        {fld.id}. 
                        {fld.question}
                        {fld.options.map((val)=>(
                    <div class="form-check" >
                    <input class="form-check-input" type="radio" name={fld.id} value={val} onClick={(e1)=>handleOptionChange(e1)}/>
                    <label class="form-check-label" for="flexRadioDefault1">
                        {val}
                    </label>  
                                                      
                  </div>
                ))}
                </fieldset>  
                                                  
            </div>
            </>                            
        ))}
        <fieldset>
            <button onClick={()=>handleClick()}>Submit</button>
        </fieldset>
    </fieldset>    
</div>
)}

{page==3 && (
    <div>
<p>
    <h1>
Your Score is : {finalPage () }
</h1>
</p>
        
        
    </div>
)}


 </>
    )

}

export default Login
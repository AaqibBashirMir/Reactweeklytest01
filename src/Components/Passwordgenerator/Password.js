import React, { useState } from 'react'
import './Password.css'
import Button from '../Buttons/Button'
import { ToastContainer, toast } from 'react-toastify';


let upperCaseList='ABCDEFGHIJKLMNOPQRSTUVWXY'
let lowerCaseList='abcdefghijklmnopqrstuvwxyz'
let numberList='0123456789'
let symbolList='!@#$%^&*()'

function Password() {
 const[password,setPassword]=useState("");
 const[upperCase,setUpperCase]=useState(true);
 const[lowerCase,setLowerCase]=useState(true);
 const[numbers,setNumbers]=useState(true);
 const[symbols,setsymbols]=useState(true);

  const [PasswordLength,setPasswordLength]=useState(8);

  const generate=()=>{
        if(!numbers&&!symbols&&!lowerCase&&!upperCase){
          alert("please select at least one characterlist!");
          return
        }
        else{
 
          let generatedPassword="";
          if(numbers){
           generatedPassword+=numberList;
     
          }
          if(upperCase){
           generatedPassword+=upperCaseList;
          }
          if(lowerCase){
           generatedPassword+=lowerCaseList;
            
          }
          if(symbols){
           generatedPassword+=symbolList;
          }
     
          let generatedPasswordLength=generatedPassword.length
          let tempPassword='';
          
          for(let i=0;i<PasswordLength;i++){
           let randomIndex=Math.round(Math.random()*generatedPasswordLength);
           tempPassword+=generatedPassword.charAt(randomIndex);
     
          }
          console.log(tempPassword);
          setPassword(tempPassword);
        }
  

   

  }

  const copy=async()=>{
    const copied=await navigator.clipboard.readText();
    if(password){
      await navigator.clipboard.writeText(password);
      toast.success('🦄 password copied successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    else{
      alert("please generator your password first")
    }

  }
  
  return (
    <>
<div className='body'>
      <div className='main-container'>
        <h1>Strong Password Generator</h1>
        <div className='input-field'>
          <input type='text' disabled placeholder='Click On Generate Password' id='input' value={password}></input>
          <i className="fa-regular fa-copy" id='icon' onClick={copy}></i>
        </div><br></br>
        <h3>Customize your Password</h3>
        <div className='customization'>
          <div className='left-side'>
            <div className='lower'>
              <input type='checkbox' checked={lowerCase} onChange={()=>{setLowerCase(!lowerCase)}}></input>
              <label htmlFor='lower-case'>Include LowerCase(a-z)</label>
            </div>
            <div className='upper'>
              <input type='checkbox' checked={upperCase} onChange={()=>{setUpperCase(!upperCase)}}></input>
              <label htmlFor='upper-case'>Include UpperCase(A-Z)</label>
            </div>

          </div>
          <div className='right-side'>
            <div className='number'>
              <input type='checkbox' checked={numbers} onChange={()=>{setNumbers(!numbers)}}></input>
              <label htmlFor='numbers'>Include Number(0-9)</label>
            </div>
            <div className='symbol'>
              <input type='checkbox' checked={symbols} onChange={()=>{setsymbols(!symbols)}}></input>
              <label htmlFor='symbols'>Include Symbols(&-#)</label>
            </div>

          </div>
        </div>

        <div className='length-set'>
          <h3>Password Length</h3>

          <div className='range'>
            <p id='range-no'>{PasswordLength}</p>
            <input type='range' id='range' min={8} max={50} defaultValue={PasswordLength} onChange={(event)=>{setPasswordLength(event.target.value)}} ></input>
          </div>
        </div>
        <div className='button'>
          <Button id="copy" name="Copy password" onClick={copy} />
          <Button id="generate" name="Generate Password" onClick={generate}/>
        </div>
        <a href="https://github.com/AaqibBashirMir?tab=repositories" style={{color:"white",textAlign:"center"}}>Developed by AaqibBashirMir<i class="fa-brands fa-github"></i></a>
      </div>
    </div>
    <ToastContainer />
    </>
   
    
  )
}

export default Password

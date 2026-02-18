import React, { useState } from 'react'
import Password from './Random Password Generator/Password'

export default function Home() {
  let [Uppercase,setUppercase]=useState(false);
  let [Lowercase,setLowercase]=useState(false);
  let [Symbol,setSymbol]=useState(false);
  let [Number,setNumber]=useState(false);
  let [PasswordLength,setPasswordLength]=useState(1);
  let [FinalPassword,setFinalPassword]=useState('')
  return (
    <div>
      <Password 
      Uppercase={Uppercase}
      setUppercase={setUppercase}

      Lowercase={Lowercase}
      setLowercase={setLowercase}
      
      Symbol={Symbol}
      setSymbol={setSymbol}

      Number={Number}
      setNumber={setNumber}

      PasswordLength={PasswordLength}
      setPasswordLength={setPasswordLength}

      FinalPassword={FinalPassword}
      setFinalPassword={setFinalPassword}
      />
    </div>
  )
}

import React, {useState} from 'react'

function Auth({setUser}) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const handleUsername = (e) => setUsername(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const handleConfirm = (e) => setPasswordConfirm(e.target.value)
    const [errors, setErrors] = useState([])
   
    const passwordMatch = (p1, p2) => {
      if (p1 && p2 && p1 === p2) {
        return true
      }
      else {
        return false
      }
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!passwordMatch(password, passwordConfirm)) {
        alert('Your password and password confirmation do not match.')
        return false
      }
      const newUser = { username, email, password: passwordConfirm }
      fetch(`/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((r) => r.json())
        .then(json => {
          console.log(json)
          if(json.errors) setErrors(Object.entries(json.errors))
       
      })
      
  }
    return (
        <> 
        <h1>Sign UP</h1>
        <form onSubmit={handleSubmit}>
        <label>
          Username
   
          <input type="text" value={username} onChange={(e) => handleUsername(e)} />
        </label>
        <label>
         email
    
        <input type="text" value={email} onChange={(e) => handleEmail(e)} />
        </label>
        <label>
         Password
    
        <input type="password" value={password} onChange={(e) => handlePassword(e)} />
        </label>
        <label> Confirm Password</label>
          <input
            type="password"
            value={passwordConfirm}
            placeholder="password"
            onChange={(e) =>  handleConfirm(e)} />
        
       
        <input type="submit" value="Sign up!" />
      </form>
      {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        </>
    )
}

export default Auth;
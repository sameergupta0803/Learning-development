import {useState} from 'react'

export default function ProfileSearchForm({search}) {
    const[username,setUsername]=useState("")
    const handleSubmit=(evt)=>{
        evt.preventDefault()
        search(username)
    }
    const handleUsername=(evt)=>{
        setUsername(evt.target.value)
    }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter a username</label>
        <input onChange={handleUsername} type="text" name="username" id="username" value={username}/>
        <button>Submit</button>
    </form>
  )
}

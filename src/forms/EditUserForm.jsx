import React, {useState, useEffect} from 'react';

const EditUserForm = (props) => {

    const [user, setUser] = useState(props.currentUser);
    const [phone, setPhone]=useState(props.currentUser);
    const [email,setEmail]=useState(props.currentUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user,... phone, [name]: value});
        setPhone({...user,... phone, [name]: value});
        setEmail({...user,... phone, [[email][name]]: value});
       

    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.SurName && user.phone && user.city && user.email) props.updateUser(user);
    }
    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    return (
        <form>
            <label>Name</label>
             <br />
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} /><br />
            <label>SurName</label> 
            <br />
            <input className="u-full-width" type="text" value={user.SurName} name="SurName" onChange={handleChange} /> <br />
            <label>phone</label>
            <br />
            <input className="u-full-width" type="text" value={user.phone} name="phone" onChange={handleChange} /> <br /> 
            <label>city</label><br />
            <input className="u-full-width" type="text" value={user.city} name="city" onChange={handleChange} /> 
            <br />
            <label>email</label><br />
            <input className="u-full-width" type="email" value={user.email} name="email" onChange={handleChange} /> <br />
            <br />
            <button  style={{"margin-right": '10px'}} class="btn btn-primary " type="submit" onClick={handleSubmit} >Edit user</button>
            <button  class="btn btn-secondary" type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditUserForm;
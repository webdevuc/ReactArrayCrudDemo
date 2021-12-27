import React, {useState} from 'react';


const AddUserForm = (props) => {

    const initUser = {id: null, name: '', city:'', SurName: '', phone:'' , };

    const [user, setUser] = useState(initUser);
    const [phone, setPhone]=useState(initUser);
    const [city, setCity]=useState(initUser);
    const [email, setEmail]=useState(initUser);


    const handleChange = e => {
        const {name,value} = e.target;
        setUser({...user, ...phone , [name]:  value});
        setPhone({...user, ...phone, [name]: value});
        setCity ({...user,...phone,[[city] [name]]: value});
        setEmail ({...user,...phone,[[city] [email][name]]: value});
      

    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.SurName && user.city && user.phone && user.email) {
           handleChange(e, props.addUser(user));
        }
    }

    return (
        <form className='addform'>
            <label style={{color:"red" }}>Name</label> <br />
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange}  />
            <br />
            <label style={{color:"blue"}}>SurName</label><br />
            <input className="u-full-width" type="text" value={user.SurName} name="SurName" onChange={handleChange} />
            <br />
            <label style={{color:"red"}}>city</label><br />
            <input className="u-full-width" type="text" value={user.city} name="city" onChange={handleChange} />
            <br />
            <label style={{color:"blue"}}>phone</label><br />
            <input className="u-full-width" type="text" value={user.phone} name="phone" onChange={handleChange} />
            <br /> 
            <label style={{color:"red"}}>email</label><br />
            <input className="u-full-width" type="email" value={user.email} name="email" onChange={handleChange} />
            <br /> <br />
            
            <button type="button" class="btn  btn-primary"   lassName="button-primary" type="submit" onClick={handleSubmit} >Add user</button>
            <br />
        </form>
    )
}

export default AddUserForm;
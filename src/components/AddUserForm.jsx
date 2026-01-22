import { useState } from "react";

const AddUserForm = ({onAddUser, editUser, onUpdatedUser}) => {

    const [ userName, setUserName ] = useState('');
    const [ email, setEmail ] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();


        if(!userName.trim() || !email.trim()) {
            alert('All fields are required');
            return  
        }

        const newUser = {
            id: Date.now(),
            name: userName,
            email
        };

        onAddUser(newUser);

        setUserName('');
        setEmail('');
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="m-0">
                <div className="form-group mb-4">
                    <label className="text-black fw-medium mb-2" >Username</label>
                    <input type="text" className="form-control" value={userName} placeholder="Username" onChange={(e) =>setUserName(e.target.value)} />
                </div>
                <div className="form-group mb-4">
                    <label className="text-black fw-medium mb-2">Email</label>
                    <input type="text" className="form-control" placeholder="Your email " value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="input-group">
                    <button className="btn btn-primary" >Add User</button>
                </div>
            </form>
        </>
    )
}

export default AddUserForm;
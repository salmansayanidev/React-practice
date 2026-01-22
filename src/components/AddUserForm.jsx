import { useState } from "react";

const AddUserForm = ({onAddUser}) => {

    const [ userName, setUserName ] = useState('');
    const [ email, setEmail ] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        if(!userName || !email) return;

        const newUser = {
            id: Date.now(),
            userName,
            email
        };

        onAddUser(newUser);

        setUserName('');
        setEmail('');
    };

    return (
        <>
            <form className="m-0">
                <div class="form-group mb-4">
                    <label class="text-black fw-medium mb-2" >Username</label>
                    <input type="text" class="form-control" value={userName} placeholder="Username" onChange={(e) =>setUserName(e.target.value)} />
                </div>
                <div class="form-group mb-4">
                    <label class="text-black fw-medium mb-2">Email</label>
                    <input type="text" class="form-control" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="input-group">
                    <button className="btn btn-primary" >Add User</button>
                </div>
            </form>
        </>
    )
}

export default AddUserForm;
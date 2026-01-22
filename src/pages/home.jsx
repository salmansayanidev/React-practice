import { useState } from "react";

import Counter from "../components/Counter";
import UserRow from "../components/UserRow";
import usersData from "../data/usersData";
import AddUserForm from "../components/AddUserForm";

const Home = () => {

    const [users, setUsers] = useState(usersData); 

    const addUser = (user) => {
        setUsers([...users, user]);
    }

    const deleteUser = (id) => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
    }


    return (
        <>
            <section className="home-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-primary text-center fs-1 fw-bold mb-5">Welcome to the React</h1>
                        </div>
                        <div className="col-12">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Item One
                                </li>
                                <li className="list-group-item">
                                    Item Two
                                </li>
                                <li className="list-group-item">
                                    Item Three
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 mt-5">
                            <h1 className=" text-primary text-center fw-bold fs-2 mb-3">Add User</h1>
                            <AddUserForm onAddUser={addUser} />
                        </div>

                        <div className="col-12 mt-5">
                            <table class="table table-dark table-striped m-0">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, id) => {
                                            return (
                                                <UserRow key={id} id={user.id} name={user.name} email={user.email} onDelete={deleteUser} />
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="col-12 mt-5">
                            <Counter />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;
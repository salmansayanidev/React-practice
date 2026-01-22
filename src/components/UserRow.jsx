const UserRow = ({ id, name, email, onDelete }) => {
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                    <div className="d-flex align-items-center gap-3">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-danger" onClick={() => onDelete(id)}>Delete</button>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default UserRow;
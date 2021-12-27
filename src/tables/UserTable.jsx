import React from 'react';

const UserTable = (props) => {
    return (
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>SurName</th>
                    <th>city</th>
                    <th>Phone</th>
                    <th>email</th>

                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map(user => {
                        const { id, name, SurName, phone, city, email } = user;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{SurName}</td>
                                <td>{city}</td>
                                <td>{phone}</td>
                                <td>{email}</td>


                                <td>
                                    <button style={{"margin-right": '10px'}} type="button" class="btn btn-danger col-xs-2  mr-10 " onClick={() => props.deleteUser(id)}>Delete</button>
                                    <button type="button" class="btn btn-success col-xs-2  mr-10" onClick={() => props.editUser(id, user, phone)}>Edit</button>

                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>No users found</td>
                    </tr>
                )
                }
            </tbody>
        </table>
    )
}

export default UserTable;
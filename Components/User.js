const Users = ({ user }) => {
    return (
        <>
            <h2>{user?.name}</h2>
            <h4>{user?.email}</h4>
        </>
    )

}

export default Users
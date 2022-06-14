import User from "./Components/User"

const users = ({ users }) => {
    return <div>
        <h1>All Users</h1>
        {
            users.map(user =>
                <div style={{ 'border': '2px solid red', 'padding': '10px', 'margin': '10px' }} key={user.id}>
                    <User user={user}></User>
                </div>
            )
        }
    </div>
}

export default users

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return {
        props: {
            users: data
        }
    }
}
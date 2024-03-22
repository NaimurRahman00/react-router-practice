import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, email, phone} = user;
    return (
        <div>
            <h2>User details here: {name}</h2>
            <h2>User details here: {email}</h2>
            <h2>User details here: {phone}</h2>
        </div>
    );
};

export default UserDetails;
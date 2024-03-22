import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const usersData = useLoaderData();

  const UsersStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  };

  return (
    <div>
      <h2>Our honorable Users: {usersData.length}</h2>
      <div style={UsersStyle}>
        {usersData.map((user, i) => (
          <User key={i} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;

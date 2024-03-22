import { Link } from "react-router-dom";

const User = ({ user }) => {
  const userStyle = {
    border: "1px solid seaGreen",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
    background: 'teal',
    textAlign: 'left'
  };
  const { id, name, email, phone } = user;
  return (
    <div style={userStyle}>
      <h2>Name: {name}</h2>
      <h3>Email: {email}</h3>
      <h3>Phone: {phone}</h3>
      <button>
        <Link to={`/user/${id}`}>Show details</Link>
      </button>
    </div>
  );
};

export default User;

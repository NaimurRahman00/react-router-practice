import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav>
        <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'center', gap: '20px', border: '1px solid white', padding: '10px'}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;

import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEUAe7X///8AcbDi6/MAd7N9rM4Ac7G70eStyN/I2ukAebQAdbIAcLDY6fJQmsXM4e610+Xn8vc5j7/0+vyew9tWn8ghib0IfrZvqs52qc2Cs9Oly+FvpMrH3uyLudYVg7rS4+8wjb5inceTuNWIstJTl8SVwNqkw9vt9vqHuNa61+hFRgC2AAAErUlEQVR4nO2da3fiKhSGARnagokhJtHx2nbOsaf+/x94Eq212oCdWQh1z/t86QeTtXi6uSXZAOMHsqpuJowETV1l717s7W9RCiNTlywY0oiyODG0udCpSxUYLXJ7NBwxOuE7ItnoYDgaUgvgHj0c7Q0toynYKjK7M8wpVtE9Mu8MC5G6HFdEFK1hSTeEbT0tOcsoh7ANYsYqk7oQV8VUrKZcSdu+pmZN6jJcmYYRmWwDAAAAAAAAAAAAAAAAAOCvRkslxFAoQzQNQCu5qJYDmxWrckjwG6RW6/l7XhUfTBW1OGqz4idkpUpdpqBotuTnzCjlA2idfRIkpajN5wh20MkIUKteQT5eU+luJv2CnBdEehs1dxlyGkHUeuw0rEgEUT47Bbkl0Z2ajduQr1OXLgSif6jYk1NoiKJvtD/wk8KQKAYewx8UDNWjx3BBwdC4h0POSwrt0MzcgmNJwVA/uQ2XJEZ8X2c6pdAMu7xil6ClEUJPEImEsA2ioyVuqYSw7U6nfYIZhX70gOpRzCaUDJnK/zuvotQWwJnJydTGLui0wXcU22T7p/3xth5S6UVPMWKdL34+l1LQ9NshpdSaWAMEAHwHlHBz2qkaz5VnX421bjsto94wXQcWUekUdf/g5PH5o6L55b7y4Z+jotZGsebf6evm/q795a6oVtP8SatU+3R8/V2buvNceX+YBLUm9ebRnn8qGNvla6L8gLCGUjzN3d9B7GaSIEEgpKFW5chzTUfRRJ/xhjSU1QW/jir2xisBDeWlAO6xZdzmGMxQK98XkBOmUWtqMENVeH4+YxVTMZTh0PlSso/XiIrBDL9cR3fU8dpiKMP8twQ5b6INjIEMX36jFe4YRUvyDGXonsk4mMWqp4EMfdkA/YxjPW4EMvwDNpH603SGsb6/pjPkszgT1ISGWZxqmtAw0sZrKQ3j9DUpDbMoQ2JKwzhTt6SGUTIFkhoWMappUsMo40VSQx5jWpPWMMaImNYwxiNUcEO7nVcv1Xxrv3LxPEJDDGuYzZpujaYxSg3X08vvT5cRVgOENLQL9bHrMCK/9HrKDm/K8PNG6VJeen1zU7W0d6P0oS/JmkdZ0RHM0PYmwukL71EjZJIHM5z2d/y69N5V347hwNWi1NZ3W4Q1K6EMV66x251l3RFhyA9l6H7Um5xndn7pH/PtDMfugc27KmdzM4aepRmeRarttO1mDD1rhs3rn933zQzvPYY/PPdFWBBwfUPpM4ww9U5sOCJv+Ei+lkY4cCSx4QCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxheIp6GDixi4/LtcyL+8rBL/cqO72w7vseIiyT9e0jfLoezbePsG8ZofbcR3D/fgAAAAAAAAAAAAAAAAAAAAAAAOBIk7oAV6ZhNeGj31m3KzGrkpy5Gw1TsQhbLaZEZCzGLufpkCVnvKAcRFW0hjyn29fInHeGllGtp5rZnWH/MQwE0MPu0JPOsOcoDQpItjvVZWfIbS6ohVGqfH82D3vLTC1KYegEUhpRHs5zYe/Zt1lVU5mjNnV1POnkfxwsWjYhcDkKAAAAAElFTkSuQmCC"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />

          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right ">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={true} title="me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;

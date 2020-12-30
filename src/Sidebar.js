import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-111.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZZlZWR8MXx8fGVufDB8fHww%3D&w=1000&q=80%22://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXrkXtamScGWexuM3s669vonYa0bbmR6TGNQ&usqp=CAU"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">1,534</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">1,234</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("Reactjs")}
        {recentItem("Java")}
        {recentItem("python")}
        {recentItem("Devops")}
        {recentItem("Agile")}
        {recentItem("Reactjs")}
        {recentItem("Cloud Aws")}
        {recentItem("Salesforce")}
        {recentItem("DataScience")}
        {recentItem("RPA")}
        {recentItem("Selenium WebDriver")}
        {recentItem("Machine Learning")}
        {recentItem("MuleSoft")}
        {recentItem("Pega")}
      </div>
    </div>
  );
}

export default Sidebar;

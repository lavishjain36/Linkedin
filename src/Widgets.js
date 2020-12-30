import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("It Job opportunities", "Top news-1022 readers")}
      {newsArticle("Covid-19", "Vaccine:What comes Next")}
      {newsArticle("Digital World", "A bright future for digital nomads")}
      {newsArticle("Lost jobs?", "Linked in Here to Help you")}
      {newsArticle("Stressed?", "Robots are here to help")}
      {newsArticle("Industry 4.0", "What you know?")}
      {newsArticle("Effective Listening", "Top news-7022 readers")}
      {newsArticle("Critical Thinking", "Click here ")}
      {newsArticle("Technology Addicted", "Are we dependent on Google?")}
      {newsArticle(
        "What's your best time of the day?",
        "Top news-5022 readers"
      )}
      {newsArticle("Covid Job opportunities", "Top news-9012 readers")}
    </div>
  );
}

export default Widgets;

import React from "react";
import useSummary from "./useSummary";
import "./summary.sass";
import SummaryCard from "../SummaryCard/SummaryCard";

const Summary = () => {
  return (
    <ul className="summary">
      <li className="summary__item">
        <SummaryCard title="Total  Ads Posted" number="06" icon="article" />
      </li>
      <li className="summary__item">
        <SummaryCard title="Total Views" number="24" icon="eye2" />
      </li>
      <li className="summary__item">
        <SummaryCard title="Interest Received" number="12" icon="heart-down" />
      </li>
      <li className="summary__item">
        <SummaryCard title="Interest Sent" number="09" icon="heart-up" />
      </li>
    </ul>
  );
};

export default Summary;

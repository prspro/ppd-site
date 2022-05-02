import React from "react";
import useSummary from "./useSummary";
import "./summary.sass";
import SummaryCard from "../SummaryCard/SummaryCard";

const Summary = () => {

  const { viewsCount, totalAdsCount } = useSummary();

  return (
    <ul className="summary">
      <li className="summary__item">
        <SummaryCard title="Total  Ads Posted" number={totalAdsCount} icon="article" />
      </li>
      <li className="summary__item">
        <SummaryCard title="Total Views" number={viewsCount} icon="eye2" />
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

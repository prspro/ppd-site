import React from 'react';
import useSummaryCard from './useSummaryCard';
import "./summarycard.sass";
import SVGicon from '../_Misc/SVGicon/SVGicon';

const SummaryCard = ({title, number, icon}) => {
    return (
        <div className="summary-card">
            <p className="summary-card__title">
                {title}
            </p>
            <div className="summary-card__inner-wrap">
                <span className="summary-card__number">
                    {number}
                </span>
                <SVGicon className={"summary-card__icon"} id={icon} />
            </div>
        </div>
    );
}

export default SummaryCard;

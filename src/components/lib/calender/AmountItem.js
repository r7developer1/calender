import React from "react";
import moment from "moment";
import AmountItemWrapper from "../../../views/ui/item-page/AmountItemWrapper";
import { useCalender } from "../../../store/hooks/calender.hook";


const Amount = () => {
    const [ calender , ] = useCalender();
    let { price , date_from , date_to } = calender.selected;
        return (
            <>
                    <AmountItemWrapper>
                        <p className="display">
                            {price === 0 ? "Calculating..." : price }
                        </p>
                        <span id="price_heading">{`${
                            moment(date_to).diff(moment(date_from), "days") === 0
                                ? "for half day"
                                : moment(date_to).diff(moment(date_from), "days") < 0
                                ? "claculating"
                                : moment(date_to).diff(moment(date_from), "days") > 0
                                    ? moment(date_to).diff(moment(date_from), "days") === 1
                                        ? "for " +
                                        moment(date_to).diff(moment(date_from), "days") +
                                        " day"
                                        : "for " +
                                        moment(date_to).diff(moment(date_from), "days") +
                                        " days"
                                    : null
                        }`}</span>
                    </AmountItemWrapper>
            </>
        );
};

export default Amount;

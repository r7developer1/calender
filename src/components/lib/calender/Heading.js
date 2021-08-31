import React from "react";
import { useCalender } from "../../../store/hooks/calender.hook";

const Heading = () => {
  const [ calender , ] = useCalender();
  let { in_stock , } = calender.selected;
  //console.log(in_stock);
    return (
        <>
            <h3>{!in_stock ? "Out Of Stock" : "In Stock"}</h3>
            <h4>
                {" "}
                {"Rent"}
                {/* {amount !== 0 && parseInt(props.item.sell_p) !== 0 ? " or " : ""}
						{parseInt(props.item.sell_p) !== 0 ? " Buy" : ""} */}
            </h4>
        </>
    );
};

export default Heading;

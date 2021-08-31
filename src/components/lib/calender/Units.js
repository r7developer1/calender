import React from "react";
import { setStock, setUnits } from "../../../store/features/calender.slice";
import { useCalender } from "../../../store/hooks/calender.hook";
import uuid from "react-uuid";

const Units = ({ props }) => {
  const { placeholder , className , label , select: { id, name } } = props;
    const [calender , dispatch ] = useCalender();
    let { units: { avail , value } } = calender.selected;


    const opt = () => {
      let memo = [];
      for(let i = 1; i <= avail; i++){
        memo.push(<option key={uuid()} value={i}>{i}</option>)
      }
      return memo;
    }

    return (
        <>
          <label htmlFor={label.for}>{label.title}</label>
            <select
                id={id}
                name={name}
                className={className}
                value={value}
                placeholder={placeholder}
                onChange={(e) => {
                    dispatch(setUnits(e.target.value))
                }}
            >
              {(avail === 0) ? <option value={avail}>Unavailable</option> : null}
              {opt()}
            </select>
        </>
    );
};

export default Units;

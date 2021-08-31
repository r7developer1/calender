import React from "react";
import { BrowserView } from "react-device-detect";
import moment from "moment";
import Flatpicker from "react-flatpickr";
import { setDropTimeValue , setPickTimeValue } from "../../../../store/features/calender.slice";
import { useCalender } from "../../../../store/hooks/calender.hook";

const BrowserV = (props) => {
    const { pick , drop } = props;
    const [ calender , dispatch ] = useCalender();
    const { loading } = calender;
    let { pick_time: { p_range , p_value } , drop_time: { d_range , d_value } } = calender.selected;
    const handleClick = (e, from) => {
        switch (from) {
            case "from":
                dispatch(setPickTimeValue(moment(e[0] , "LT").format("H:mm a")))
                break;
            case "to":
                dispatch(setDropTimeValue(moment(e[0] , "LT").format("H:mm a")));
                break;
            default:
                break;
        }
    };

    return (
      (!loading && p_range.length === 2  && d_range.length === 2 ) &&
        <>
                <label className="c-form-label" htmlFor="pick">Pick Up</label>
                <BrowserView>
                    <Flatpicker
                        id={"pick_id"}
                        className={`c-form-control ${ pick.className }`}
                        options={{
                            enableTime: true,
                            noCalendar: true,
                            dateFormat: "h:i K",
                            disableMobile: true,
                            minDate: moment(p_range[0] , "LT").format("H:mm A"),
                            maxDate: moment(p_range[1] , "LT").format("H:mm A"),
                            defaultDate: moment( p_value || p_range[0]  , "LT").format("H:mm A"),
                        }}
                        placeholder={pick.placeholder}
                        onChange={(e) => handleClick(e, "from")}
                        autoComplete="off"
                    />
                    <input
                        type="hidden"
                        id={pick.id}
                        name={pick.name}
                        value={
                          p_value || moment(d_value || p_range[0] , "LT").format("H:mm a")
                        }
                    />
                </BrowserView>
            {/**
             * second time picker
             */}
                <label className="c-form-label" htmlFor="drop">Drop Off</label>
                <BrowserView>
                    <Flatpicker
                        id={"drop_id"}
                        className={`c-form-control ${ drop.className }`}
                        options={{
                            enableTime: true,
                            noCalendar: true,
                            dateFormat: "h:i K",
                            disableMobile: true,
                            minDate: moment(d_range[0] , "LT").format("H:mm A"),
                            maxDate: moment( d_range[1] , "LT").format("H:mm A"),
                            defaultDate: moment( d_range[1] , "LT").format("H:mm A"),
                        }}
                        placeholder={drop.placeholder}
                        onChange={(e) => handleClick(e, "to")}
                        autoComplete="off"
                        required
                    />

                    <input
                        id={drop.id}
                        type="hidden"
                        name={drop.name}
                        value={
                          d_value || moment( d_range[1] , "LT").format("H:mm a")
                        }
                    />
                </BrowserView>
        </>
    );
};

export default BrowserV;

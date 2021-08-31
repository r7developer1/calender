import { useSelector, useDispatch } from "react-redux";

// customer_input = { key: value }
export function useCalender() {
	const calender = useSelector((state) => state.item_list_calender);
	const dispatch = useDispatch();
	return [calender, dispatch];
}

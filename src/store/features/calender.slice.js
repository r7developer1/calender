import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";



export const initialState = {
  app_type: "",
  loading: true,
	items: [],
	selected: {
		item: {},
    dd: [],
		in_stock: false,
		price: 0,
		units: { avail: 0 , value: 0 },
		date_from: moment().format("YYYY-MM-DD"),
		date_to: moment().add(1, "days").format("YYYY-MM-DD"),
		pick_time: { p_range: [] , p_value: "" },
		drop_time: { d_range: [] , d_value: "" },
	}
};

export const item_list_calender = createSlice({
	name: "item_list_calender",
	initialState,
	reducers: {
	  setAppType: (state , actions) => {
      let { payload } = actions;
      state.app_type = payload;
    },
    setLoading: (state , actions) => {
	    let { payload } = actions;
	    state.loading = payload;
	    return state;
    },
		setItemListData: (state, actions) => {
			let { payload } = actions;
			return Object.assign(state, payload);
		},
		setSelectedItem: (state, actions) => {
			let { payload } = actions;
			state.selected.item = payload.item[0];
			state.selected.dd = payload.disabled;
			state.selected.price = payload.price;
			state.selected.units.avail = payload.units;
			state.selected.pick_time.p_range = [ payload.time[0]['pickup_time_from'], payload.time[0]['pickup_time_to'] ];
      state.selected.drop_time.d_range = [ payload.time[0]['drop_time_from'] , payload.time[0]['drop_time_to'] ];
			return state;
		},
    setRental: (state, actions) => {
      let { payload } = actions;
      state.selected.price = payload.price;
      state.selected.units.avail = payload.units;
      return state;
    },
    setAmount: (state, actions) => {
      let { payload } = actions;
      state.selected.price = payload;
      return state;
    },
    setUnits: (state , actions) => {
      let { payload } = actions;
      state.selected.units.value = payload;
      return state;
    },
    setStock: (state , actions) => {
      let { payload } = actions;
      state.selected.in_stock = payload;
      return state;
    },
    setDateFrom: (state , actions) => {
      let { payload } = actions;
      state.selected.date_from = payload;
      return state;
    },
    setDateTo: (state , actions) => {
      let { payload } = actions;
      state.selected.date_to = payload;
      return state;
    },
    setPickTime: (state , actions) => {
      let { payload } = actions;
      state.selected.pick_time.p_range = payload;
      return state;
    },
    setPickTimeValue: (state , actions) => {
      let { payload } = actions;
      state.selected.pick_time.p_value = payload;
      return state;
    },
    setDropTime: (state , actions) => {
      let { payload } = actions;
      state.selected.drop_time.d_range = payload;
      return state;
    },
    setDropTimeValue: (state , actions) => {
      let { payload } = actions;
      state.selected.drop_time.d_value = payload;
      return state;
    }
	}
});

// Action creators are generated for each case reducer function
export const {
  setAppType,
  setItemListData ,
  setSelectedItem,
  setAmount ,
  setDateFrom ,
  setDateTo ,
  setDropTime ,
  setDropTimeValue,
  setPickTime ,
  setPickTimeValue,
  setStock ,
  setUnits ,
  setLoading
} = item_list_calender.actions;

export default item_list_calender.reducer;

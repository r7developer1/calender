import {store} from "../store";
import { calender } from "./endpoints";
import FilterUrl from "../components/lib/disabled-dates/FilteredURL";
import { getItem , getItems } from "./getItem";
import Formatter from "./formatter"


export async function getItemProps(){
  let { item_list_calender: { selected: {
    item: { id } ,
    date_from,
    date_to,
    units: { value } ,
    pick_time: { p_range , p_value } ,
    drop_time: { d_range , d_value }
  } } } = store.getState();
  let pick_time = (p_value === "") ? Formatter.format_time(p_range[0]) : Formatter.format_time(p_value) ;
  let drop_time = (d_value === "") ? Formatter.format_time(d_range[1]) : Formatter.format_time(d_value) ;

  let url = `${calender}${id}&from=${date_from} ${pick_time}&to=${date_to} ${drop_time}&units=${value}`;
  return fetch(encodeURI(url)).then(data => data.json());
}

export async function getTool(app_type){
  if (app_type === "product-list"){
    return getItems();
  }else if(app_type === "item-page"){
    let id = FilterUrl();
    return getItem(id);
  }
}

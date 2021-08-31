import { put } from 'redux-saga/effects';
import FilterUrl from "../../components/lib/disabled-dates/FilteredURL";

export function* initApp(){
  let app_type = "";
  if(FilterUrl()){
    app_type = "item-page";
  }else{
    app_type = "product-list";
  }
  yield put({type: "item_list_calender/setAppType", payload: app_type });
}

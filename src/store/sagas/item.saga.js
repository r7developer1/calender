import { put, call , takeEvery , takeLatest } from 'redux-saga/effects';
import * as Api from "../../api"

function* getItem({ payload }){
  const item = yield call(Api.getTool, payload );

  if (payload === "item-page"){
    yield put({ type: "item_list_calender/setSelectedItem" , payload: item })
  }else if(payload === "product-list"){
    yield put({ type: "item_list_calender/setItemListData" , payload: { items: item.data } })
  }
}

function* LoadedIfProduct(){
  yield put({type: "item_list_calender/setLoading" , payload: false});
}



export default function* watchInitialization(){
  yield takeLatest('item_list_calender/setAppType', getItem);
  yield takeEvery('item_list_calender/setItemListData' , LoadedIfProduct)
}



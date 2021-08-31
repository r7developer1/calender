import { put, call , takeEvery , takeLatest } from 'redux-saga/effects';
import * as Api from "../../api"

function* getRental(){
  const rental = yield call(Api.getItemProps );

  yield put({ type: "item_list_calender/setRental" , payload: rental });
  yield put({ type: "item_list_calender/setStock" , payload: (rental.units > 0) });
}



export default function* watchRental(){
  yield takeEvery('item_list_calender/setDateTo' , getRental)
  yield takeEvery('item_list_calender/setPickTimeValue' , getRental)
  yield takeEvery('item_list_calender/setDropTimeValue' , getRental)
  yield takeEvery('item_list_calender/setUnits' , getRental)
}

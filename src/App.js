import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store"
import ItemPage from "./components/item-page";
import ProductList from "./components/product-list";
import { useCalender } from "./store/hooks/calender.hook";
import "./assets/index.css";

const App = () => {
  const [ calender ,] = useCalender();
  if (calender.app_type === "item-page"){
    return(
      <ItemPage />
    );
  }else if(calender.app_type === "product-list"){
    return (
      <ProductList />
    );
  }

}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode> , document.querySelector('#root'));



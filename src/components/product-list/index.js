import React, { useContext } from "react";
import SelectTools from "../../views/ui/product-list/select-body";
import Header from "../../views/ui/product-list/header";
import CardBody from "../../views/ui/product-list/card-body";
import ElBody from "../../views/ui/product-list/el-body";
// import Picker from "./ui/ItemInfo/Picker";
import Times from "../lib/calender/Times";
// import Amount from "./ui/ItemInfo/Amount";
import Overlay from "../../views/ui/common/overlay";
import Container from "../../views/ui/product-list/container";
import Add from "../lib/calender/Button";
import ProductListSetting from "../../views/structure/product-list";
import Units from "../lib/calender/Units";
import Picker from "../lib/calender/Picker";
import Amount from "../lib/calender/Amount";
import { useCalender } from "../../store/hooks/calender.hook";

const ProductList = () => {
  let { tools, date ,time , amount , unit , AddRow } = useContext(ProductListSetting);
  const [ calender , ] = useCalender();
  let { loading , selected: { item } } = calender;
  return (
    <>
      <Container>
        <Overlay>
          <Header/>
          <CardBody>
            <SelectTools props={tools} />
            {
              (!loading && Object.keys(item).length > 0) && (
                <>
                  <ElBody>
                    <Units props={unit} />
                  </ElBody>
                  <ElBody>
                    <Picker props={date} />
                  </ElBody>
                  <ElBody>
                    <Times props={time} />
                  </ElBody>
                  <ElBody>
                    <Amount props={amount} />
                  </ElBody>
                </>
              )
            }

          </CardBody>
          <ElBody>
            <Add props={AddRow}/>
          </ElBody>
        </Overlay>
      </Container>
    </>
  );
};

export default ProductList;

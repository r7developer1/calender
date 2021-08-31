import React from "react";
import Row from "../../views/ui/common/row";
import Footer from "../../views/ui/common/footer";
import Container from "../../views/ui/common/container";
import Overlay from "../../views/ui/common/overlay";
import Heading from "../../views/ui/item-page/HeadWrapper";
import Amount from "../lib/calender/AmountItem";
import Picker from "../lib/calender/Picker";
import CardBody from "../../views/ui/item-page/CardBody";
import Form from "../../views/ui/item-page/Form";
import RentButton from "../lib/calender/Button";
import InnerFormWrapper from "../../views/ui/item-page/InnerFormWrapper";
import Units from "../lib/calender/Units";
import Times from "../lib/calender/Times";
import ItemPageSetting from "../../views/structure/item-page";
import { useContext } from "react";



const ItemPage = () => {
  let { date , time  , unit , AddRow } = useContext(ItemPageSetting);
  return (
    <>
      <Container>
        <Overlay>
          <Heading />
          <CardBody>
            <Amount />
            <Form>
              <InnerFormWrapper>
                <Row>
                  <Units  props={unit} />
                </Row>
                <Row>
                  <Picker props={date} />
                </Row>
                <Row>
                  <Times props={time} />
                </Row>
              </InnerFormWrapper>
              <Footer>
                <RentButton props={AddRow} />
              </Footer>
            </Form>
          </CardBody>
        </Overlay>
      </Container>
    </>
  );
}

export default ItemPage;

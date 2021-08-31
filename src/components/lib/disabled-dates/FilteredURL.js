import { compact , map , filter , head , split } from "lodash";

const FilterUrl = () => {
  let id;

  let addr = compact(split(window.location.href, "/"));

  var isEdit = map(addr, (v) => {
    return v === "item";
  });

  if (head(compact(isEdit))) {
    filter(addr, (value) => {
      if ([...value.matchAll(/_/g)].length) {
        id = value
      }else if(parseInt(value)){
        id = +value;
      }
    });

    return id;
  } else {
    return null;
  }
};

export default FilterUrl;

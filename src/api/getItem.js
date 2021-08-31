import { item_id_url, itemUrl , toolsUrl , calender} from "./endpoints";

export function getItem(id) {
  if (typeof id === "string") {

    return fetch(item_id_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ slug: id })
    }).then((response) => response.json());

  } else if (typeof id === "number") {

    return fetch(calender + id).then(response => response.json());

  }
}

export function getItems(){
  return fetch(toolsUrl).then(response => response.json())
}

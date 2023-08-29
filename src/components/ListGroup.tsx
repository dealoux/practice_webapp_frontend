import { useState } from "react";

interface IListGroup {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: IListGroup) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const itemObjects = items.map((item, index) => ({
    id: index,
    title: item,
  }));

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {itemObjects.map((item) => (
          <li
            className={
              "list-group-item" + (selectedIndex === item.id ? " active" : "")
            }
            key={item.title}
            onClick={() => {
              setSelectedIndex(item.id);
              onSelectItem(item.title);
            }}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

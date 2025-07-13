import { useState } from "react";
import Logo from "./compononts/Logo"
import Form from "./compononts/Form"
import PackingList from "./compononts/PackingList";
import Item from "./compononts/Item";
import Stats from "./compononts/Status";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearlist(){
    const confirmed = window.confirm("Are you sure you wnt to delete all?")
    if (confirmed) setItems([])
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearlist={handleClearlist}
      />
      <Stats items={items} />
    </div>
  );
}
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Forms } from './components/Forms';
import { Header } from './components/Header';
import Items from './components/Items';

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

// this is the long way to load from storage
// const loadLocalStorage = () => {
//   let list = localStorage.getItem('list');
//   if (list) {
//     list = JSON.parse(localStorage.getItem('list'));
//   } else {
//     list = [];
//   }
//   return list;
// };

// short way to load from storage
const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

const App = () => {
  const [items, setItems] = useState(defaultList);

  const onAddTask = (task) => {
    const newItem = {
      id: nanoid(),
      name: task,
      completed: false,
    };
    const newList = [...items, newItem];
    setItems(newList);
    setLocalStorage(newList);
    toast.success('New Item Added ✅');
  };

  const handleRemoveItem = (id) => {
    const newList = items.filter((item) => item.id !== id);
    setItems(newList);
    setLocalStorage(newList);
    toast.error('Item Deleted ⛔️');
  };

  const handleEditCompleted = (id) => {
    const newList = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newList);
    setLocalStorage(newList);
  };

  return (
    <>
      <Header />
      <section className="section-center">
        <ToastContainer position="top-center" autoClose={1000} theme="dark" />
        <Forms onAddTask={onAddTask} />
        <Items
          items={items}
          handleRemoveItem={handleRemoveItem}
          handleEditCompleted={handleEditCompleted}
        />
      </section>
    </>
  );
};

export default App;

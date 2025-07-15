import './App.css';
import AddData from './components/AddData/AddData';
import Header from './components/Header/Header';
import Item from './components/Item/Item';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const ldt = JSON.parse(localStorage.getItem("data")) || [];
    setData(ldt);
  }, []);

  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const remove = (index) => {
    const ldt = JSON.parse(localStorage.getItem("data")) || [];
    ldt.splice(index, 1); 
    localStorage.setItem("data", JSON.stringify(ldt));
    setData([...ldt]); 
  };

  const addData = (title) => {
    const obj = { title: title, date: getTodayDate(), complete:false };
    const ldt = JSON.parse(localStorage.getItem("data")) || [];
    ldt.push(obj);
    localStorage.setItem("data", JSON.stringify(ldt));
    setData(ldt);
  };

  const toggle = (index) => {
    const ldt = JSON.parse(localStorage.getItem("data")) || [];
    const updatedData = ldt.map((item, i) => {
      if (i === index) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    localStorage.setItem("data", JSON.stringify(updatedData));
    setData(updatedData);
  };

  return (
    <div className=" App">
      <Header />
      <AddData callback={addData} />
      <div className='items m-3'>
        {data.slice().reverse().map((item, i) => (
          <Item
            key={i}
            title={item.title}
            date={item.date}
            complete={item.complete}
            remove={() => remove(data.length - 1 - i)}
            toogle={() => toggle(data.length - 1 - i)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import Box from "./components/header/Box";
import "./App.css"
import "bootstrap/dist/css/bootstrap.css";

let arr1 = {
  items: [
    {
      id: 1,
      title: "Нямушка",
      head: "Сказочное заморское яство",
      subtitle: "с фуа-гра",
      portions: 10,
      mouse: 1,
      img: "/2.png",
      weight: 0.5,
      color: "#1698d9",
      info: "Чего сидишь? Порадуй котэ, купи.",
      links: "купи.",
      colorText: "#fff",
      colorLInk: "#1698d9"
    }
  ]
}
let arr2 = {
  items: [
    {
      id: 2,
      title: "Нямушка",
      head: "Сказочное заморское яство",
      subtitle: "с рыбой",
      portions: 40,
      mouse: 2,
      img: "/2.png",
      weight: 2,
      color: "#1698d9",
      info: "Чего сидишь? Порадуй котэ, купи.",
      links: "купи.",
      colorText: "#fff",
      colorLInk: "#1698d9"
    },
  ]
}
let arr3 = {
  items: [
    {
      id: 3,
      title: "Нямушка",
      head: "Сказочное заморское яство",
      subtitle: "с курой",
      portions: 100,
      mouse: 5,
      img: "/2.png",
      weight: 5,
      color: "#1698d9",
      info: "Чего сидишь? Порадуй котэ, купи.",
      links: "купи.",
      colorText: "#fff",
      colorLInk: "#1698d9"
    }
  ]
}
export default class App extends React.Component{

  render() {
    return(
      <div className="app">
        <h3 className="app__header">Ты сегодня покормил кота?</h3>
        <div className="app__box">
        < Box data={arr1}/>
        < Box data={arr2}/>
        < Box data={arr3}/>
        </div>
      </div>
    )
  }
}

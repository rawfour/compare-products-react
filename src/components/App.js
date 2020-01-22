import React from 'react';

import './App.sass';

import ProductsList from "./ProductsList";
import Compare from "./Compare";

class App extends React.Component {

  data = [
    {
      id: 1,
      name: "Maliny",
      img: "/img/image01.jpg",
      description: "Poprostu maliny",
      price: "2.49"
    },
    {
      id: 2,
      name: "Kiwi",
      img: "/img/image02.jpg",
      description: "Zwykłe kiwi",
      price: "3.29"
    },
    {
      id: 3,
      name: "Cebula",
      img: "/img/image03.jpg",
      description: "Tylko cebula",
      price: "4.19"
    },
    {
      id: 4,
      name: "Banany",
      img: "/img/image04.jpg",
      description: "Zwyczajne banany",
      price: "5.34"
    },
    {
      id: 5,
      name: "Bakłażany",
      img: "/img/image05.jpg",
      description: "Poprostu bakłażany",
      price: "6.39"
    },
    {
      id: 6,
      name: "Kokos",
      img: "/img/image06.jpg",
      description: "Zwykłe kokosy",
      price: "4.19"
    },
    {
      id: 7,
      name: "Papryka",
      img: "/img/image07.jpg",
      description: "Tylko papryka",
      price: "2.24"
    },
    {
      id: 8,
      name: "Ananas",
      img: "/img/image08.jpg",
      description: "Zwyczajny ananas",
      price: "3.55"
    },
    {
      id: 9,
      name: "ziemniaki",
      img: "/img/image09.jpg",
      description: "Zwykłe ziemniaki",
      price: "1.74"
    },

  ]
  state = {}
  render() {
    return (

      <div className="container mt-5">
        <h1>React comapre products</h1>
        <ProductsList data={this.data} />
      </div>

    );
  }
}

export default App;
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
      price: "2.49",
      colors: ["orange", "black"],
      fresh: false
    },
    {
      id: 2,
      name: "Kiwi",
      img: "/img/image02.jpg",
      description: "Zwykłe kiwi",
      price: "3.29",
      colors: ["yellow", "green", "red"],
      fresh: true
    },
    {
      id: 3,
      name: "Cebula",
      img: "/img/image03.jpg",
      description: "Tylko cebula",
      price: "4.19",
      colors: ["red", "blue"],
      fresh: false
    },
    {
      id: 4,
      name: "Banany",
      img: "/img/image04.jpg",
      description: "Zwyczajne banany",
      price: "5.34",
      colors: ["yellow", "green", "red"],
      fresh: true
    },
    {
      id: 5,
      name: "Bakłażany",
      img: "/img/image05.jpg",
      description: "Poprostu bakłażany",
      price: "6.39",
      colors: ["red", "black"],
      fresh: false
    },
    {
      id: 6,
      name: "Kokos",
      img: "/img/image06.jpg",
      description: "Zwykłe kokosy",
      price: "4.19",
      colors: ["red", "yellow", "orange"],
      fresh: true
    },
    {
      id: 7,
      name: "Papryka",
      img: "/img/image07.jpg",
      description: "Tylko papryka",
      price: "2.24",
      colors: ["green", "blue"],
      fresh: false
    },
    {
      id: 8,
      name: "Ananas",
      img: "/img/image08.jpg",
      description: "Zwyczajny ananas",
      price: "3.55",
      colors: ["green", "orange"],
      fresh: true
    },
    {
      id: 9,
      name: "Ziemniaki",
      img: "/img/image09.jpg",
      description: "Zwykłe ziemniaki",
      price: "1.74",
      colors: ["black", "blue"],
      fresh: false
    },

  ]
  state = {
    toCompare: []
  }

  handleAddToCompare = (product) => {
    if (this.state.toCompare.length === 4) {
      return null
    } else {
      const toCompare = [...this.state.toCompare, product]
      this.setState({
        toCompare
      })
    }
  }

  handleRemoveFromCompare = (id) => {
    const toCompare = [...this.state.toCompare];
    const removedProduct = toCompare.filter(product => product.id !== id);
    this.setState({
      toCompare: removedProduct
    })
  }

  render() {
    return (

      <div className="product-list-page container mt-5">
        <h1>React comapre products</h1>
        <ProductsList remove={this.handleRemoveFromCompare} add={this.handleAddToCompare} data={this.data} toCompare={this.state.toCompare} />
        {this.state.toCompare.length >= 2 ? <Compare toCompare={this.state.toCompare} /> : null}
      </div>


    );
  }
}

export default App;
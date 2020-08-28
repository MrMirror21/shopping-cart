import React, { useState } from 'react';
import Header from './components/Header';
import productList from './components/productList';
import Pagination from './components/Pagination';
import Item from './components/Item';
import './styles/App.css';



function App() {
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage] = useState(5);

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);

const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Header/>
      
    {
        currentItems.map((item) => (

          <Item
          key={item.id}
          title={item.title}
          coverImage={item.coverImage}
          price={item.price}
          />

        ))
      } 
      
      <Pagination 
      itemsPerPage={itemsPerPage} 
      totalItems={productList.length} 
      paginate={paginate} />
      <div className="Product-Container">
      </div>
    </div>
  );
}

export default App;

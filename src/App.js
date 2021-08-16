import "./App.css";
import Card from "./Card";
import {useState} from 'react'

function App() {
  let productdata = [
    { id:1,name: "Fancy Product", price: 60 },
    {id:2, name: "Special Item", price: 80 },
    { id:3,name: "Sale Item", price: 18 },
    { id:4,name: "Popular Item", price: 25 },
    {id:5, name: "Sale Item", price: 40 },
    { id:6,name: "Fancy Product", price: 25 },
    { id:7,name: "Special Item", price: 280 },
    { id:8,name: "Popular Item", price: 40 },
  ];
  
  const [productlist,setproductlist]=useState(productdata)
  const [cartlist,setCartlist]=useState([])
  const [total,SetTotal]=useState(0)
let buttonclick=(productobj)=>{
  setCartlist([...cartlist,productobj])
  SetTotal(total+productobj.price)
  setproductlist(productdata)
}
let removecart=(productobj)=>{
let newcart=cartlist.filter((obj)=>obj.id!==productobj.id)
setCartlist([...newcart])
SetTotal(total-productobj.price)
}
  return (
    <div>
      <div className="container mt-5 ">
        <div className="row ">
          <div className="col-lg-2">
            <div>
              <h1>CART</h1>
              <ul className="list-group">
                {
                  cartlist.map((item)=>{
                   return  <li className="list-group-item d-flex justify-content-between align-items-center">
                 <button className="btn btn-xs btn-danger" 
                 onClick={()=>{removecart(item)}}> X </button> {item.name} = ${item.price}
                  <span className="badge badge-primary badge-pill">14</span>
                </li>
                  })
                }
               
              </ul>
              <h3>Total=${total}</h3>
            </div>
          </div>
          <div className="col=lg-10">
            <div className="row ">
              {productlist.map((product) => {
                return <Card data={product} cartlist={cartlist} handleclick={buttonclick} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

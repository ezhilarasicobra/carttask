import React from "react";

const Card = (props) => {
  return (
    <>
     <div className="col-lg-3 mb-5">
        <div className="card h-100">
          <img
            className="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{props.data.name}</h5>
              ${props.data.price}
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <button className="btn btn-outline-dark mt-auto" 
         disabled={props.cartlist.some(obj=>obj.id===props.data.id)}
              onClick={()=>props.handleclick(props.data)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      
     </>
 
   
  );
};

export default Card;

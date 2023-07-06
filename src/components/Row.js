import axios from "axios";
import "./Row.css";
import React, { useState, useEffect } from "react";

const ItemComponent = ({ item }) => {
    return <div className="two">{item}</div>;
  };


const Row = (props) => {
  const [data, setData] = useState([]);
//   const [loading, setLoading] = useState();

  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

//   useEffect(() => {
//     axios
//       .get("https://api.chucknorris.io/jokes/random?category=")
//       .then((res) => {
//         setLoading(res.loading);
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [loading]);

  return (
    <div className="one">
      
      {   
      data.length > 0 &&
        data.map((item, index) => {
          return   <ItemComponent key={index} item={item} />

        })
         
        }
    
{/* {loading.length > 0 &&
        data.map((item, index) => {
          return <li key={index}> {item}</li>;
        })} */}
    </div>
  );
};

export default Row;

import axios from "axios";
import "./Row.css";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Modal from "./Modal";

const Row = (props) => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState();
  const [modalOpen, setModalOpen] = useState(false);


  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCardClick = (item) => {
    setCategory(item);
    setModalOpen(!modalOpen);
    console.log(modalOpen)
  };

  const handleModalClose=(data)=>{
    setModalOpen(data)
  }

  return (
    <div className="one">
      {data.length > 0 &&
        data.map((item, index) => {
          return (
            
            <div onClick={() => handleCardClick(item)}>
              <Card key={index} data={item} />
            </div>
          );
        })}
  {modalOpen&&<Modal categoryData={category} isOpen={handleModalClose}/>}

   </div>
  );
};

export default Row;

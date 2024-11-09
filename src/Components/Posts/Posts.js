import React, { useEffect, useContext, useState } from "react";
import { FirebaseContext } from "../../store/FirebaseContext";
import { auth, Firestore } from "../../Firebase/fireBaseConfig";
import { getDocs, collection } from "firebase/firestore";

import Heart from "../../assets/Heart";
import "./Post.css";
import { postContext } from "../../store/PostViewContext";
import { useNavigate } from "react-router-dom";

function Posts() {
  const [products, setProduct] = useState([]);
  const { postDetails,setPostDetails } = useContext(postContext);

  const redirect = useNavigate();

  useEffect(() => {
    getDocs(collection(Firestore, "products"))
      .then((snapshot) => {
        const allpost = snapshot.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setProduct(allpost);
      })
      .catch((error) => {
        console.error("error fetching data", error);
      });
  }, [postDetails]);

  const handleOnClick = (product) => {
    setPostDetails(product)
    redirect("/view");
  };

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map((product) => {
            return (
              <div className="card" onClick={() => handleOnClick(product)}>
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={product.imgUrl} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9;{product.price}</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name">{product.name}</p>
                </div>
                <div className="date">
                  <span>{product.created_at}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;

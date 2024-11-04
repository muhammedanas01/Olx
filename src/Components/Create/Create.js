import React, { Fragment, useState, useContext } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FirebaseContext, AuthContext } from "../../store/FirebaseContext";
import { storage } from "../../Firebase/fireBaseConfig";

import { addDoc, collection } from "firebase/firestore";
import { auth, Firestore} from "../../Firebase/fireBaseConfig";

import { useNavigate } from "react-router-dom";

const Create = (e) => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const products = collection(Firestore, "products");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);
  const date = new Date()
  const redirect = useNavigate()

  const handleSubmit = () => {
    const imgRef = ref(storage, `image/${image.name}`);
    uploadBytes(imgRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        addDoc(products, {
          productName:name, 
          price:price, 
          category:category,
          imgUrl: url,
          user:user.uid,
          createdAt:date.toDateString()
        });
      });
    }).then(()=>{
      redirect('/home')
      alert('product added successfully')
    })
  };

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            defaultValue="John"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            defaultValue="John"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="number"
            id="fname"
            name="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ""}
          ></img>

          <br />
          <input onChange={(e) => setImage(e.target.files[0])} type="file" />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">
            upload and Submit
          </button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;

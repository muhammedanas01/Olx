import React, { useContext, useEffect, useState } from "react";
import { postContext } from "../../store/PostViewContext";

import "./View.css";
import { Firestore } from "../../Firebase/fireBaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

function View() {
  const { postDetails } = useContext(postContext);
  const [userDetails, setUserDetails] = useState(null);
  console.log("this issss", postDetails)
  useEffect(()=>{
    if(postDetails){
      const {user} = postDetails; //destructuring user idfrom postDetails
      const fetcData = async () => {
        try{
            const q = query(collection(Firestore, "userdb"),where("id","==",user))
            const querysnapshot = await getDocs(q)

            const allPost = querysnapshot.docs.map((doc)=>({
              ...doc.data(),
              id:doc.id
            }));
            setUserDetails(allPost)
            console.log("this is all post",allPost)
        }catch(error){
          console.error("Error fetching data", error);
        }
      };
      fetcData();
    }
  },[postDetails]);
  
  const userDetail = userDetails && userDetails.length > 0 ? userDetails[0] : {}; 
  const { username, phone } = userDetail;
  
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetails.imgUrl} alt=""/>
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.category}</span>
          <p>{postDetails.productName}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>{username}</p>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;

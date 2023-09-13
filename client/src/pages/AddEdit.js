import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import axios from "axios";

import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
const initialState = {
  name: "",
  email: "",
  contact: "",
};
const AddEdit = () => {
  const [name, setName] = useState(initialState);
  const [email, setEmail] = useState(initialState);
  const [contact, setContact] = useState(initialState);
  

  const {id}=useParams();
  useEffect(()=>{
if(id){
  getSingleUser(id);
}
  },[id])

const getSingleUser=async(id)=>{
  const response = await axios.put(`http://localhost:5000/user/${id}`);
  if (response.status === 200) {
    setName({...response.data[0]});
    setEmail({...response.data[0]});
    setContact(response.data[0]);
  }
}





  return (
    <div
      style={{ display: "flex", justifyContent: "center", minHeight: "80vh" }}
    >
      <Card
        variant={"outlined"}
        style={{ width: 400, padding: 20, marginTop: 30, height: "100%" }}
      >
        <TextField
          style={{ marginBottom: 10 }}
          onChange={(e) => {
            setName(e.target.value);
          }}
          fullWidth={true}
          label="Name"
          variant="outlined"
        />
        <TextField
          style={{ marginBottom: 10 }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          fullWidth={true}
          label="Email"
          variant="outlined"
        />
        <TextField
          style={{ marginBottom: 10 }}
          onChange={(e) => {
            setContact(e.target.value);
          }}
          fullWidth={true}
          label="Contact"
          variant="outlined"
        />
        <Button
          size={"large"}
          variant="contained"
          // style={{ cursor: "pointer" }}
          onClick={async () => {
            const response = await axios.post(
              "http://localhost:5000/user",
              {
                name:name,
                email:email,
                contact:contact
              }
            );
            if (response.status === 200) {
              toast.success(response.data);
            }
          }}
        >  {id ? "Update" : "Add User"}</Button>
        
      </Card>
    </div>
  );
};

export default AddEdit;

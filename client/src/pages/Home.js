import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    if (response.status === 200) {
      setData(response.data);
    }
  };


  const onDeleteUser = async(id) =>{
    const response = await axios.delete(`http://localhost:5000/user/${id}`);
    if (response.status === 200) {
      toast.success(response.data);
      getUsers();
    }
  }
    
  console.log(data);
  return (
    <div style={{ marginTop: "150px" }}>
      <table
        style={{
          margin: "auto",
          borderCollapse: "collapse",
          fontSize: "0.9em",
        }}
      >
        <thead>
          <tr style={{ textAlign: "left" }}>
            <th style={{ textAlign: "center", padding: "12px 15px" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Contact</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>

        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                  <td>
                    <button
                      onClick={() => {
                        navigate(`/update/${item.id}`);
                      }}
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => onDeleteUser(item.id)} 
                        
                      
                    >
                      Delete
                    </button>
                    <button onClick={()=>{
                                navigate(`/view/${item.id}`)
                            }}>View</button>
                  </td>
                </tr>
              );
            })}
          
        </tbody>
      </table>
    </div>
  );
};

export default Home;

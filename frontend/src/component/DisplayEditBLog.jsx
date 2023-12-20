import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
const DisplayEditBLog = () => {
  const naviate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/blog')
      .then((res) => setData(res.data.message))//array
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id)=>{
    // alert(id);
    const confirm = window.confirm("Do you want to delete?");
    if(confirm)
    {
      axios.delete(`http://localhost:5000/api/blog/${id}`)
      .then(res => {
        console.log("Deleted")
        // naviate("/"); we need to reload to see
        window.location.reload();
      })
      .catch(err => console.log(err))

    }
  }
  


  return (
    <div>
      <div className='d-flex flex-column justify-content-center align-items-center bg-light'>
        <h1>List of Blogs</h1>
        <div className='w-75 rounded bg-white border shadow p-4'>
          <div className='d-flex justify-content-end'>
            <Link to="/AddBlog" className="btn btn-success">Add</Link></div>
          <table className='table table-striped'>
            <thead>
            <tr>
              <th>ID</th>
              <th>Blog Name</th>
              <th>Content</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
              data.map((d,i)=>{
                return( <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.headline}</td>
                  <td>{d.content}</td>
                  <td>
                    <Link to={`/cardsDetails/${(d._id)}`} className='btn btn-sm btn-info me-2'>Read</Link>
                    <Link to={`/EditBlog/${(d._id)}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                    <button onClick={e=> handleDelete(d._id)} className='btn btn-sm btn-danger'>Delete</button>
                  </td>
                </tr>
              )})
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DisplayEditBLog;
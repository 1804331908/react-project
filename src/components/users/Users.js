import { useState, useEffect } from "react";
import axios from "axios";
let all_users = [];
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users`)
      .then((Response) => {
        all_users = Response.data
        setUsers(Response.data);
      });
  }, []);
console.log(users)
console.log(all_users)
  const serachInputHandler = searchTerm => {
    
    setUsers(all_users.filter(user => user.fullName.toLowerCase().includes(searchTerm.toLowerCase())));
  }
const clearInput = () =>{
   setUsers(all_users)
}

  return (<div className="container table3-name">
    <div className="header">
      <h1>Users</h1>
    </div>

    <div className="table3-box">
      <div className="upper-div">
        <form id="formId">
          <input
            type="text"
            id="myInput"
            onChange={e => serachInputHandler(e.target.value)}
            placeholder="Search by names.."
          />
          <input type="reset" onClick={clearInput} id="reset" />
        </form>
      </div>
      <div id="table-wrapper3">
        <div id="table3-data">
          <table>
            <thead>
              <tr>
                <th className="column2">ID</th>
                <th className="column2">User Avatar</th>
                <th className="column2">Full Name</th>
                <th className="column2">DoB</th>
                <th className="column2">Gender</th>
                <th className="column2">Current Location</th>
              </tr>
            </thead>
            <tbody id="table3-body">
              {users.map((user, key) => (
                <tr className="data-row" key={key}>
                  <td >{user.id}</td>
                  <td ><img src={user.profilePic} /></td>
                  <td >{user.fullName
                  }</td>
                  <td >{user.dob}</td>
                  <td >{user.gender}</td>
                  <td >{user.currentCountry + " " + user.currentCity

                  }</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>)
}

export default Users;
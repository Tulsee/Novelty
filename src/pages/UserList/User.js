import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

import { getUserList, userDelete } from "../../api/user";
import { addIndex } from "../../utils";
import PopupModel from "../../components/popupModel";
import { render } from "@testing-library/react";

const User = () => {
  const [users, setUsers] = useState([]);
  const [updated, setUpdated] = useState(false);
  const isUpdated = (data) => {
    setUpdated(!updated);
  };
  function handleShow(user) {
    render(<PopupModel user={user} isUpdated={isUpdated} />);
  }
  function handleDelete(id) {
    userDelete(id).then((res) => {
      setUpdated(!updated);
    });
  }

  useEffect(() => {
    getUserList().then((res) => {
      console.log(res);
      setUsers(addIndex(res?.data));
    });
  }, [updated]);
  console.log(users);
  return (
    <div className="mr-3 mt-3">
      <Table striped bordered hover className="table table-striped table-auto">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.index}>
              <td>{user.index}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Button
                  variant="warning"
                  className="border border-primary rounded-full m-2 text-black"
                  onClick={() => handleShow(user)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="rounded-full text-black border border-primary"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default User;

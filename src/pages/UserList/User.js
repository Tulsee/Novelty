import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

import { getUserList } from "../../api/user";
import PopupModel from "../../components/popupModel";
import { addIndex } from "../../utils";

const User = () => {
  const [users, setUsers] = useState([]);

  function handleShow(user) {
    render(<PopupModel user={user} />);
  }
  useEffect(() => {
    getUserList().then((res) => {
      console.log(res);
      setUsers(addIndex(res?.data));
    });
  }, []);
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

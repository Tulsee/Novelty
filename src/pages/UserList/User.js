import React, { useEffect, useState } from "react";
import { Table, Button, Pagination, Card, Form } from "react-bootstrap";
import { render } from "@testing-library/react";

import { getUserList, userDelete } from "../../api/user";
import { addIndex } from "../../utils";
import PopupModel from "../../components/popupModel";
import { Link } from "react-router-dom";
import { Toast } from "../../components/ToastNotification";

const User = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [count, setCount] = useState();
  const [updated, setUpdated] = useState(false);
  const isUpdated = () => {
    setUpdated(!updated);
  };
  function handleShow(user) {
    render(<PopupModel user={user} isUpdated={isUpdated} />);
  }
  function handleDelete(id) {
    userDelete(id).then((res) => {
      Toast("success", "user delete successfully");
      setUpdated(!updated);
    });
  }

  useEffect(() => {
    getUserList(searchText).then((res) => {
      setUsers(addIndex(res?.users));
      setCount(res.count);
    });
  }, [updated, searchText]);
  return (
    <div className="container">
      <h1 className="text-center">User List </h1>
      {count === 0 ? (
        <div>
          <h1>No user Found</h1>
          <h2>Please add user</h2>
          <Link className="btn btn-dark" to="/register">
            Register New user
          </Link>
        </div>
      ) : (
        <Card className="mt-4" border="success">
          <Form className="d-flex m-3">
            <Form.Control
              type="search"
              placeholder="Search By Name. Please Enter Name"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
          <Table
            striped
            bordered
            hover
            className="table table-striped table-auto"
          >
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
          <Pagination
            style={{ alignItems: "center", justifyContent: "flex-end" }}
          >
            <span>
              Total count <strong>{count}</strong>
              &nbsp;
            </span>
          </Pagination>
        </Card>
      )}
    </div>
  );
};

export default User;

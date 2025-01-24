import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function createOrder(orderNumber, serviceName, status) {
  return { orderNumber, serviceName, status };
}

const orders = [
  createOrder(101, "Web Development", "Completed"),
  createOrder(102, "Mobile App Design", "In Progress"),
  createOrder(103, "SEO Optimization", "Pending"),
  createOrder(104, "Graphic Design", "Completed"),
  createOrder(105, "Cloud Hosting", "In Progress"),
];

const Orders = () => {
  const handleView = (orderNumber) => {
    alert(`Viewing details for Order #${orderNumber}`);
  };

  const handleDelete = (orderNumber) => {
    alert(`Deleting Order #${orderNumber}`);
  };

  return (
    <div className="home-conatiner">
      <TableContainer style={{ marginTop: "10em" }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="orders table">
          <TableHead>
            <TableRow>
              <TableCell>Order Number</TableCell>
              <TableCell>Service Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.orderNumber}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{order.orderNumber}</TableCell>
                <TableCell>{order.serviceName}</TableCell>
                <TableCell
                  style={{
                    color: `${
                      order.status == "In Progress"
                        ? "blue"
                        : order.status == "Pending"
                        ? "orange"
                        : "red"
                    }`,
                  }}
                >
                  {order.status}
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="info"
                    size="small"
                    onClick={() => handleView(order.orderNumber)}
                    style={{ marginRight: "8px" }}
                  >
                    View
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(order.orderNumber)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Orders;

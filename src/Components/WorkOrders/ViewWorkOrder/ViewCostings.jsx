import React, { useState } from "react";
import DeleteIcon from "../../../Assets/Icons/DeleteIcon";
import AddPartsCostsModal from "../Modal/AddPartsCostsModal";
import AddLabourCostsModal from "../Modal/AddLabourCostsModal";
import AddOtherCostsModal from "../Modal/AddOtherCostsModal";
import DeleteModal from "../Modal/DeleteModal";

const ViewCostings = () => {
  const [costsShow, addCostsShow] = useState(false);
  const [labourCostsShow, setLabourCostsShow] = useState(false);
  const [otherCostsShow, setOtherCostsShow] = useState(false);
  const [delateModalShow, setDelateModalShow] = useState(false);
  return (
    <>
      <div className="order-request washroom-right-content responses-cont">
        <div className="washroom-title">
          <div className="fs-13 fw-medium">WORK ORDER COSTINGS</div>
        </div>
        <div className="order-request mt-4 p-0 view-costings">
          <div className="request-box">
            <div className="request-box-body py-25 px-10">
              <div className="d-flex align-items-center justify-content-between">
                <div className="fs-15 fw-medium black-38">PARTS COSTING</div>
                <button
                  onClick={() => addCostsShow(true)}
                  className="add-button my-2"
                  style={{ fontSize: "15px", fontWeight: "500" }}
                >
                  Add Cost
                </button>
                <AddPartsCostsModal
                  show={costsShow}
                  onHide={() => addCostsShow(false)}
                />
              </div>
              <div
                className="table-responsive-sm request_table"
                style={{ maxWidth: "100%" }}
              >
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Parts</th>
                      <th scope="col">Part No.</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Unit Cost</th>
                      <th scope="col">Total Cost</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {partsData.map((item) => (
                      <tr key={item.id}>
                        <td>{item.parts}</td>
                        <td>{item.partsNo}</td>
                        <td>{item.quantity}</td>
                        <td>KES {item.unit}</td>
                        <td>KES {item.amount}</td>
                        <td>
                          <div className="button-con">
                            <button onClick={() => setDelateModalShow(true)}>
                              <DeleteIcon />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="fs-15 fw-medium black-38">LABOUR COSTING</div>
                <button
                  onClick={() => setLabourCostsShow(true)}
                  className="add-button my-2"
                  style={{ fontSize: "15px", fontWeight: "500" }}
                >
                  Add Cost
                </button>
                <AddLabourCostsModal
                  show={labourCostsShow}
                  onHide={() => setLabourCostsShow(false)}
                />
              </div>
              <div
                className="table-responsive-sm request_table"
                style={{ maxWidth: "100%" }}
              >
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Staff Name</th>
                      <th scope="col">Team</th>
                      <th scope="col">Hours</th>
                      <th scope="col">Rate per Hour</th>
                      <th scope="col">Amount</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {labourData.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.team}</td>
                        <td>{item.hours}</td>
                        <td>KES {item.rate}</td>
                        <td>KES {item.amount}</td>
                        <td>
                          <div className="button-con">
                            <button onClick={() => setDelateModalShow(true)}>
                              <DeleteIcon />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="fs-15 fw-medium black-38">OTHER COSTS</div>
                <button
                  onClick={() => setOtherCostsShow(true)}
                  className="add-button my-2"
                  style={{ fontSize: "15px", fontWeight: "500" }}
                >
                  Add Cost
                </button>
                <AddOtherCostsModal
                  show={otherCostsShow}
                  onHide={() => setOtherCostsShow(false)}
                />
              </div>
              <div
                className="table-responsive-sm request_table"
                style={{ maxWidth: "100%" }}
              >
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Category</th>
                      <th scope="col">Description</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Unit Cost</th>
                      <th scope="col">Total Cost</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {otherData.map((item) => (
                      <tr key={item.id}>
                        <td>{item.category}</td>
                        <td>{item.description}</td>
                        <td>{item.quantity}</td>
                        <td>KES {item.unit}</td>
                        <td>KES {item.amount}</td>
                        <td>
                          <div className="button-con">
                            <button onClick={() => setDelateModalShow(true)}>
                              <DeleteIcon />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="d-flex align-items-center justify-content-between pt-2 pb-3">
                <div className="fs-20 fw-bold black-38">TOTAL COST</div>
                <div className="fs-20 fw-bold black-38">KES 116,850</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DeleteModal
        show={delateModalShow}
        onHide={() => setDelateModalShow(false)}
      />
    </>
  );
};

const partsData = [
  {
    id: 0,
    parts: "Part A  ",
    partsNo: "005788",
    quantity: "2",
    unit: "55,000",
    amount: "55,000",
  },
  {
    id: 1,
    parts: "Part B",
    partsNo: "781912",
    quantity: "1",
    unit: "4,500",
    amount: "4,500",
  },
  {
    id: 2,
    parts: "Part C ",
    partsNo: "562782",
    quantity: "1",
    unit: "6,850",
    amount: "6,850",
  },
];

const labourData = [
  {
    id: 0,
    name: "John Doe",
    team: "A - Z Engineering",
    hours: "4",
    rate: "8,000",
    amount: "32,000",
  },
  {
    id: 1,
    name: "Ann May",
    team: "A - Z Engineering",
    hours: "4",
    rate: "8,000",
    amount: "10,000",
  },
  {
    id: 2,
    name: "Liz Mua",
    team: "A - Z Engineering",
    hours: "4",
    rate: "8,000",
    amount: "5,000",
  },
];

const otherData = [
  {
    id: 0,
    category: "Meals",
    description: "Lunch 31 Jan 24",
    quantity: "1",
    unit: "1,500",
    amount: "1,500",
  },
  {
    id: 1,
    category: "Transport",
    description: "Taxi 31st Jan",
    quantity: "1",
    unit: "2,000",
    amount: "2,000",
  },
];

export default ViewCostings;

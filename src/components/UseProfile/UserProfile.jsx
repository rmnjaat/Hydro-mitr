import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
function UserProfile() {
  const { Pdata, loc } = useOutletContext();
  const loca = loc.location;

  const locat = loca.find((item) => item._id == Pdata.Location);
  console.log(locat);
  if (!Pdata) {
    return <p>Loading profile...</p>; // Show loading state until data is fetched
  }

  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex  justify-content-center">
                  <div className="card-title">
                    {" "}
                    <img
                      src="https://placehold.co/800x800"
                      class="rounded-circle mb-6"
                      alt="User Avatar"
                      width="100"
                    />{" "}
                  </div>
                </div>
                <h2
                  className="card-title"
                  style={{ textAlign: "center", fontSize: "26px" }}
                >
                  {" "}
                  {Pdata.Name} {Pdata.LastName}
                </h2>
                <h6
                  class=" card-subtitle "
                  style={{ textAlign: "center", marginBottom: "12px" }}
                >
                  {" "}
                  Admin
                </h6>{" "}
                <h6 class="card-subtitle " style={{ textAlign: "center" }}>
                  {" "}
                  {Pdata.Org_name}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-8">
        <div className="card">
          <div className="card-body">
            <h5 class="card-title" style={{}}>
              Personal Information
            </h5>
            <p>
              <strong>Name:</strong> {Pdata.Name} {Pdata.LastName}
            </p>

            <h5 class="card-title">Contact Details</h5>
            <p>
              <strong>Email:</strong> {Pdata.Email}
            </p>
            <p>
              <strong>Phone:</strong> {Pdata.PhoneNumber}
            </p>

            <h5 class="card-title">Assigned Worksite</h5>
            <p>
              <strong>Landmark:</strong> {locat.Landmark}
            </p>
            <p>
              <strong>City:</strong> {locat.City}
            </p>
            <p>
              <strong>State:</strong> {locat.State} 
            </p>
            <p>
              <strong>Country:</strong> India
            </p>
            <p>
              <strong>Pin Code:</strong> {locat.PinCode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

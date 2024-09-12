import React from "react";

function UserProfile() {
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
                  Raman Jangu
                </h2>
                <h6
                  class=" card-subtitle "
                  style={{ textAlign: "center", marginBottom: "12px" }}
                >
                  {" "}
                  Staff
                </h6>{" "}
                <h6 class="card-subtitle " style={{ textAlign: "center" }}>
                  {" "}
                  MC developers Corporation Privbate Limited
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
              <strong>Name:</strong> Raman jangu
            </p>
            <p>
              <strong>Gender:</strong> Male
            </p>
            <p>
              <strong>Date of Birth:</strong> 28 March, 2005
            </p>

            <h5 class="card-title">Contact Details</h5>
            <p>
              <strong>Email:</strong> ramanjangu01@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> 502030012012
            </p>

            <h5 class="card-title">Assigned Worksite</h5>
            <p>
              <strong>Landmark:</strong> Water house ,Chuli bagarian
            </p>
            <p>
              <strong>City:</strong> Hisar
            </p>
            <p>
              <strong>State:</strong> Haryana
            </p>
            <p>
              <strong>Country:</strong> India
            </p>
            <p>
              <strong>Pin Code:</strong> 125052
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

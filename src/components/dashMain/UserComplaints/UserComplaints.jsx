import React, { useState, useEffect } from "react";
import "./Usercomplaints.css"; // Import the CSS file
import LocationDropdown from "../../../LocationDropdown";
import useFetchLocation from "../../../useFetchLocation";

const hardcodedFeedbacks = [
  {
    Name: "John",
    LastName: "Doe",
    Mobile: "9876543210",
    Complaint: "Water quality in my area is very poor and has a strong odor.",
    Location: {
      _id: "65009876c5a23f07a8b9f1d1",
      State: "California",
      City: "Los Angeles",
      PinCode: "90001",
      Landmark: "Near Central Park",
    },
  },
  {
    Name: "Jane",
    LastName: "Smith",
    Mobile: "9123456780",
    Complaint: "The water supply has been inconsistent for the past week.",
    Location: {
      _id: "65009876c5a23f07a8b9f1d2",
      State: "Texas",
      City: "Dallas",
      PinCode: "75001",
      Landmark: "Beside Oak Street",
    },
  },
  {
    Name: "Michael",
    LastName: "Johnson",
    Mobile: "9987654321",
    Complaint: "The water has a strange taste and seems murky.",
    Location: {
      _id: "65009876c5a23f07a8b9f1d3",
      State: "New York",
      City: "New York City",
      PinCode: "10001",
      Landmark: "Opposite Times Square",
    },
  },
  {
    Name: "Emily",
    LastName: "Davis",
    Mobile: "9876123456",
    Complaint: "There is no water pressure in my area for the past two days.",
    Location: {
      _id: "65009876c5a23f07a8b9f1d4",
      State: "Florida",
      City: "Miami",
      PinCode: "33101",
      Landmark: "Near Beachside Avenue",
    },
  },
  {
    Name: "David",
    LastName: "Williams",
    Mobile: "9123456789",
    Complaint: "Frequent water contamination issues, unsafe for drinking.",
    Location: {
      _id: "65009876c5a23f07a8b9f1d5",
      State: "Illinois",
      City: "Chicago",
      PinCode: "60601",
      Landmark: "Next to Millennium Park",
    },
  },
  {
    Name: "Sarah",
    LastName: "Brown",
    Mobile: "9765432109",
    Complaint: "Water smells of chlorine, causing skin irritation.",
    Location: {
      _id: "65009876c5a23f07a8b9f1d6",
      State: "Nevada",
      City: "Las Vegas",
      PinCode: "89101",
      Landmark: "Near Las Vegas Boulevard",
    },
  },
];
function UserComplaints() {
  const { loc, error } = useFetchLocation();
  const list = loc?.location || []; // Extract the location list

  const [selectedLoc, setSelectedLoc] = useState("");

  useEffect(() => {
    if (list.length > 0) {
      setSelectedLoc(list[0]._id); // Set the first location as default
    }
  }, [list]);

  function handleSelectLocation(id) {
    setSelectedLoc(id); // Update the selected location
  }

  return (
    <>
      <LocationDropdown
        list={list}
        selectedLoc={selectedLoc}
        handleSelectLocation={handleSelectLocation}
      />

      <div className="row">
        {hardcodedFeedbacks.map((feedback, index) => (
          <div key={index} className="col-lg-6 mb-4">
            <div className="card">
              <div className="card-body" >
                {/* <div className="card-title"  >
                  <h5 className="user-name">
                    <strong>{feedback.Name} {feedback.LastName}</strong>
                  </h5>{" "}
                </div> */}
                <p style={{ marginTop: "14px", marginBottom: "5px" }}>
                  <strong style={{color:"#414141"}}>Name : Raman Jangu</strong>
                </p>
                <p>
                  <strong style={{color:"#414141"}}>Mobile:</strong> {feedback.Mobile}
                </p>



                <p>
                  <strong style={{color:"#414141"}}>Complaint:</strong> {feedback.Complaint}
                </p>

                <p>
                  <strong style={{color:"#414141"}}>Image:</strong>
                </p>
                <img src="https://placehold.co/250x250" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserComplaints;

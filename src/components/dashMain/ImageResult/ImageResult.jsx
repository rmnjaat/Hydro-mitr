import React, { useState, useEffect } from "react";
import LocationDropdown from "../../../LocationDropdown";
import useFetchLocation from "../../../useFetchLocation";
import "./imageresult.css";

function ImageResult() {
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
        <div className="col-lg-12">
          <div className="row">
            <div className="card p-1 ">
              <div className="card-body ">
                <div className="card-title"> Test 1</div>
                <div className="card2">
                  <div className="col-4">
                    <div className="card m-1">
                      <div className="card-body">
                        <div className="card-title">Card 1</div>
                        <div
                          style={{
                            textAlign: "center",
                            width: "100%",
                            height: "auto",
                          }}
                        >
                          <img
                            src="https://placehold.co/300x200"
                            alt="Analysed image"
                            style={{
                              width: "100%",
                              height: "auto",
                              maxWidth: "100%",
                              borderRadius: "8px",
                              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="card  m-1">
                      <div className="card-body">
                        <div className="card-title">Card 1</div>
                        <div
                          style={{
                            textAlign: "center",
                            width: "100%",
                            height: "auto",
                          }}
                        >
                          <img
                            src="https://placehold.co/300x200"
                            alt="Analysed image"
                            style={{
                              width: "100%",
                              height: "auto",
                              maxWidth: "100%",
                              borderRadius: "8px",
                              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="card m-1">
                      <div className="card-body">
                        <div className="card-title">Card 1</div>
                        <div
                          style={{
                            textAlign: "center",
                            width: "100%",
                            height: "auto",
                          }}
                        >
                          <img
                            src="https://placehold.co/300x200"
                            alt="Analysed image"
                            style={{
                              width: "100%",
                              height: "auto",
                              maxWidth: "100%",
                              borderRadius: "8px",
                              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd Row */}
            <div className="card p-1 ">
              <div className="card-body ">
                <div className="card-title"> Test 1</div>
                <div className="card2">
                  <div className="col-4">
                    <div className="card m-1">
                      <div className="card-body">
                        <div className="card-title">Card 1</div>
                        <div
                          style={{
                            textAlign: "center",
                            width: "100%",
                            height: "auto",
                          }}
                        >
                          <img
                            src="https://placehold.co/300x200"
                            alt="Analysed image"
                            style={{
                              width: "100%",
                              height: "auto",
                              maxWidth: "100%",
                              borderRadius: "8px",
                              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="card  m-1">
                      <div className="card-body">
                        <div className="card-title">Card 1</div>
                        <div
                          style={{
                            textAlign: "center",
                            width: "100%",
                            height: "auto",
                          }}
                        >
                          <img
                            src="https://placehold.co/300x200"
                            alt="Analysed image"
                            style={{
                              width: "100%",
                              height: "auto",
                              maxWidth: "100%",
                              borderRadius: "8px",
                              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="card m-1">
                      <div className="card-body">
                        <div className="card-title">Card 1</div>
                        <div
                          style={{
                            textAlign: "center",
                            width: "100%",
                            height: "auto",
                          }}
                        >
                          <img
                            src="https://placehold.co/300x200"
                            alt="Analysed image"
                            style={{
                              width: "100%",
                              height: "auto",
                              maxWidth: "100%",
                              borderRadius: "8px",
                              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageResult;

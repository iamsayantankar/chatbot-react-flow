import React from 'react';
import { Handle, Position } from 'reactflow';
import { BsChatText } from "react-icons/bs";

function AddressMessageNode({ data }) {
  return (
    <div>
      <div
        style={ {
          backgroundColor: "#b2f0e3",
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          fontWeight: "bold",
          color: "black",
          paddingLeft: 15,
          paddingTop: 3,
          paddingBottom: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: 275,
          boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        } }
      >
        <div style={ { display: "flex", alignItems: "center" } }>
          <BsChatText
            style={ { fontSize: 13, paddingRight: 7, paddingTop: 5 } }
          />
          Address Message
        </div>
        <div style={ { paddingRight: 15 } }>
          <img src="whatsapp.svg" alt="whatsapp icon" height={ 15 } />
        </div>
      </div>
      <div
        style={ {
          padding: 15,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          backgroundColor: "white",
          boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        } }
      >
        <div
          style={ {
            color: "black",
          } }
        >
          <div>Country: {data.country}</div>
          {data.saved_addresses && data.saved_addresses.map((addr, index) => (
            <div key={index} style={{ marginTop: '10px', borderTop: '1px solid #eee', paddingTop: '10px' }}>
              <div>Name: {addr.value.name}</div>
              <div>Phone: {addr.value.phone_number}</div>
              <div>Pincode: {addr.value.in_pin_code}</div>
              <div>Floor: {addr.value.floor_number}</div>
              <div>Building: {addr.value.building_name}</div>
              <div>Address: {addr.value.address}</div>
              <div>Landmark: {addr.value.landmark_area}</div>
              <div>City: {addr.value.city}</div>
            </div>
          ))}
        </div>
      </div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export default AddressMessageNode;
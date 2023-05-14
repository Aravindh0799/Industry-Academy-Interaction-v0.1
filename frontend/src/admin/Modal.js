import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

 const Modal = ({ closeModal, onSubmit, defaultValue, tableHead }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      // S_no: "",
      UniName: "",
      Domain: "",
     
    }
  );
  const [errors, setErrors] = useState("");

 

  const validateForm = () => {
    if (formState.UniName && formState.Domain) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    
   
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      {console.log("Modal component is rendered")}
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="UniName">{tableHead?.col3}</label>
            <input name="UniName" onChange={handleChange} value={formState.UniName} />
          </div>
          <div className="form-group">
            <label htmlFor="Domain">{tableHead?.col2}</label>
            <input
              name="Domain"
              onChange={handleChange}
              value={formState.Domain}
            />
          </div>
          
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
    )
};

export default Modal
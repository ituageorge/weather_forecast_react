import React, {useState} from 'react';

import {Button, Modal} from 'react-bootstrap';

const ModalError = ({
  modal,
  handleModal,
  errorMessage,
  handleChange,
  getWeatherInfo,
}) => {

  return (
    <div className="">
      
      <Modal show={modal} onHide={() => handleModal()}>
        <Modal.Header> {errorMessage}</Modal.Header>
        <Modal.Body>
        
          <form className="form-inline mr-auto mb-4" onSubmit={getWeatherInfo}>
            <div className="">
              <input
                className="form-control mr-sm-2"
                type="text"
                name="city"
                placeholder="Search"
                aria-label="Search"
                onChange={handleChange}
              />
            </div>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={getWeatherInfo}> Check Weather </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalError;

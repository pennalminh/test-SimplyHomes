import React from "react";
import Modal from "react-modal";
import DataTable from "./DataTable";
import { IModal } from "../Interface";

Modal.setAppElement("#root");

const MyModal: React.FC<IModal> = ({ isOpen, onRequestClose, dataTable }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          color: "-moz-initial",
        },
      }}
    >
      <button onClick={onRequestClose}>Close</button>
      <DataTable data={dataTable}></DataTable>
    </Modal>
  );
};

export default MyModal;

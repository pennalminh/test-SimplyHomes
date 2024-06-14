import React, { useState } from "react";
import Papa from "papaparse";
import MyModal from "./Modal";
import { IObjectUpload } from "../Interface";
import { submitData } from "../api";

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [listObjectValid, setListObjectValid] = useState<IObjectUpload[]>([]);
  const [visibleBtn, setVisibleBtn] = useState<boolean>(false);

  const headerRequire = [
    "PROPERTY TYPE",
    "ADDRESS",
    "CITY",
    "STATE OR PROVINCE",
    "ZIP OR POSTAL CODE",
    "PRICE",
    "BEDS",
    "BATHS",
    "SQUARE FEET",
    "YEAR BUILT",
    "MLS#",
  ];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleFileUpload = () => {
    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          const headerInput: string[] | undefined = result.meta.fields;

          const isHeaderValid = headerRequire.every((header) =>
            headerInput?.includes(header)
          );

          if (!isHeaderValid) {
            alert("Invalid data!");
            return;
          }

          setVisibleBtn(true);
          const listValid: IObjectUpload[] = handleObjectValid(result.data);
          setListObjectValid(listValid);
        },
        header: true,
      });
    }
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleObjectValid = (data: any[]): IObjectUpload[] => {
    return data.map((raw) => {
      return {
        propertyType: raw["PROPERTY TYPE"],
        address: raw["ADDRESS"],
        city: raw["CITY"],
        state: raw["STATE OR PROVINCE"],
        zip: raw["ZIP OR POSTAL CODE"],
        price: raw["PRICE"],
        beds: raw["BEDS"],
        baths: raw["BATHS"],
        sqft: raw["SQUARE FEET"],
        yearBuild: raw["YEAR BUILT"],
        mlsid: raw["MLS#"],
      } as IObjectUpload;
    });
  };

  const callAPISubmitData = async () => {
    await submitData(listObjectValid);
  };

  return (
    <div>
      <div>
        <input type="file" accept=".csv" onChange={handleFileChange} />
      </div>
      <div>
        <button className="btn-upload" onClick={handleFileUpload}>
          Upload
        </button>
        {visibleBtn && (
          <button className="btn-preview" onClick={openModal}>
            Preview
          </button>
        )}
        {visibleBtn && (
          <button className="btn-submit" onClick={callAPISubmitData}>
            Submit
          </button>
        )}
      </div>

      <MyModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        dataTable={listObjectValid}
      />
    </div>
  );
};

export default FileUpload;

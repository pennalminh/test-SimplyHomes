import axios from "axios";
import { IObjectUpload } from "../Interface";

const BE_URL = process.env.REACT_APP_URL_BE;

export const submitData = async (listObject: IObjectUpload[]) => {
  try {
    const response = await axios.post(`${BE_URL}/upload`, {
      data: listObject,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export interface IObjectUpload {
  propertyType: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: string;
  beds: string;
  baths: string;
  sqft: string;
  yearBuild: string;
  mlsid: string;
}

export interface ITableData {
  data: IObjectUpload[];
}

export interface IModal {
  isOpen: any;
  onRequestClose: any;
  dataTable: any[];
}

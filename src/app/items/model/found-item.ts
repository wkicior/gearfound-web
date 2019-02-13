import {FoundItemForm} from "../components/add-found-item/add-found-item.component";

export interface FoundItem {
  id: string;
  serialNumber: string;
  name: string;
  foundPlace: string;
  foundDate: Date;
  description: string;
}

export class FoundItemBuilder {
  static fromFoundItemForm(f: FoundItemForm): FoundItem {
    return {
      id: null, serialNumber: f.get('serialNumber').value,
      name: f.get('name').value,
      foundPlace: f.get('foundPlace').value,
      foundDate: f.get('foundDate').value,
      description: f.get('description').value};
  }
}

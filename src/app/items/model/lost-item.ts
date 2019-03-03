import {LostItemForm} from "../components/add-lost-item/lost-item-form";

export interface LostItem {
  id: string;
  serialNumber: string;
  name: string;
  lostPlace: string;
  lostDate: Date;
  description: string;
  registrantId: string;
}


export class LostItemBuilder {
  static fromLostItemForm(f: LostItemForm): LostItem {
    return {
      id: f.id,
      serialNumber: f.get('serialNumber').value,
      name: f.get('name').value,
      lostPlace: f.get('lostPlace').value,
      lostDate: f.get('lostDate').value,
      description: f.get('description').value,
      registrantId: ''};
  }
}

import { v4 as uuid } from "uuid";

export const address = [
  {
    name: "John Doe",
    street: "XYZ",
    city: "Solar City",
    state: "Spiral Arm",
    zipCode: 44742,
    mobile: 8765432100,
    _id: uuid(),
    updatedAt: formatDate()
  }
];

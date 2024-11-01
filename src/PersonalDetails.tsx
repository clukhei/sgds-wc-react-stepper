import type { SgdsInput as SInput } from "@govtechsg/sgds-web-component/components";
import SgdsInput from "@govtechsg/sgds-web-component/react/input/index.js";
import { IFormData } from "./UserControlledStepper";

interface IPersonalDetails {
  setData: React.Dispatch<React.SetStateAction<IFormData>>;
  data: IFormData;
}

function PersonalDetails({ setData, data }: IPersonalDetails) {
  const handleInput = (e: CustomEvent, key: string) => {
    const input = e.currentTarget as SInput;
    setData({ ...data, [key]: input.value });
  };
  return (
    <>
      <SgdsInput
        label="First Name"
        hintText="Enter your first name"
        name="firstName"
        value={data.firstName}
        onSgdsInput={(e) => handleInput(e as CustomEvent, "firstName")}
      ></SgdsInput>
      <SgdsInput
        label="Last Name"
        hintText="Enter your last name"
        name="lastName"
        value={data.lastName}
        onSgdsInput={(e) => handleInput(e as CustomEvent, "lastName")}
      ></SgdsInput>
    </>
  );
}

export default PersonalDetails;

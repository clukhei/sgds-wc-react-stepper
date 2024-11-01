import SgdsInput from "@govtechsg/sgds-web-component/react/input/index.js";
import { IFormData } from "./UserControlledStepper";
import type { SgdsInput as SInput } from "@govtechsg/sgds-web-component/components";

interface IContactDetails {
  setData: React.Dispatch<React.SetStateAction<IFormData>>;
  data: IFormData;
}

function ContactDetails({ setData, data }: IContactDetails) {
  const handleInput = (e: CustomEvent, key: string) => {
    const input = e.currentTarget as SInput;
    setData({ ...data, [key]: input.value });
  };
  return (
    <>
      <SgdsInput
        label="Address"
        value={data.address}
        hintText="Blk 123 Aerial Road"
        onSgdsInput={(e) => handleInput(e as CustomEvent, "address")}
      ></SgdsInput>
    </>
  );
}

export default ContactDetails;

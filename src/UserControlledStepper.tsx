import "./App.css";
import SgdsStepper from "@govtechsg/sgds-web-component/react/stepper/index.js";
import SgdsButton from "@govtechsg/sgds-web-component/react/button/index.js";
import Review from "./Review";
import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import { useRef, useState } from "react";
import type { SgdsStepper as SStep } from "@govtechsg/sgds-web-component/components";

export interface IFormData {
  firstName: string;
  lastName: string;
  address: string;
}
function UserControlledStepper() {
  const initialData = {
    firstName: "",
    lastName: "",
    address: "",
  };
  const [data, setData] = useState<IFormData>(initialData);
  const stepperRef = useRef<SStep>(null);
  const step = [
    {
      component: <PersonalDetails setData={setData} data={data} />,
      stepHeader: "Personal details",
    },
    {
      component: <ContactDetails setData={setData} data={data} />,
      stepHeader: "Contact details",
    },
    { component: <Review data={data} />, stepHeader: "Review" },
  ];
  const [stepNo, setStepNo] = useState(0);
  const handleNext = () => {
    const stepper = stepperRef.current;
    stepper?.nextStep();
    setStepNo(stepNo + 1);
  };
  const handlePrev = () => {
    const stepper = stepperRef.current;
    stepper?.previousStep();
    setStepNo(stepNo - 1);
  };
  const handleReset = () => {
    const stepper = stepperRef.current;
    stepper?.reset();
    setData(initialData);
    setStepNo(0);
  };
  return (
    <div className="container">
      <SgdsStepper steps={step} ref={stepperRef}></SgdsStepper>
      <form className="form-container">{step[stepNo].component}</form>
      <div className="button-container">
        <SgdsButton
          onClick={handleReset}
          variant="danger"
          className="reset-btn"
        >
          Reset
        </SgdsButton>
        {stepNo > 0 && (
          <SgdsButton onClick={handlePrev} variant="ghost">
            Back
          </SgdsButton>
        )}
        {stepNo < 2 && <SgdsButton onClick={handleNext}>Next</SgdsButton>}
      </div>
    </div>
  );
}

export default UserControlledStepper;

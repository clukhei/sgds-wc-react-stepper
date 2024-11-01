import "./App.css";
import SgdsStepper from "@govtechsg/sgds-web-component/react/stepper/index.js";
import SgdsButton from "@govtechsg/sgds-web-component/react/button/index.js";
import Review from "./Review";
import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import { ReactNode, useRef, useState } from "react";
import type { SgdsStepper as SStep } from "@govtechsg/sgds-web-component/components";

export interface IFormData {
  firstName: string;
  lastName: string;
  address: string;
}
function SgdsControlledStepper() {
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
  const handleNext = () => {
    const stepper = stepperRef.current;
    stepper?.nextStep();
    setChild(stepper?.getComponent() as ReactNode)
  };
  const handlePrev = () => {
    const stepper = stepperRef.current;
    stepper?.previousStep();
    setChild(stepper?.getComponent() as ReactNode)
  };
  const handleReset = () => {
    const stepper = stepperRef.current;
    stepper?.reset();
    setData(initialData);
    setChild(stepper?.getComponent(0) as ReactNode)
  };
  const [ChildComponent, setChild] = useState<ReactNode>(step[0].component)

  const getActiveStep = () => {
    const stepper = stepperRef.current;
    if (!stepper) return 0
   return stepper?.activeStep
  }
  return (
    <div className="container">
      <SgdsStepper steps={step} ref={stepperRef}></SgdsStepper>
      <form className="form-container">{ChildComponent}</form>
      <div className="button-container">
        <SgdsButton
          onClick={handleReset}
          variant="danger"
          className="reset-btn"
        >
          Reset
        </SgdsButton>
        {getActiveStep() > 0 && 
          <SgdsButton onClick={handlePrev} variant="ghost">
            Back
          </SgdsButton>
       }
        {getActiveStep() < 2 && 
        <SgdsButton onClick={handleNext}>Next</SgdsButton>
        } 
      </div>
    </div>
  );
}

export default SgdsControlledStepper;

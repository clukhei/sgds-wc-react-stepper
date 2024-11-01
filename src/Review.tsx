import SgdsInput from "@govtechsg/sgds-web-component/react/input/index.js";
import SgdsAccordionItem from "@govtechsg/sgds-web-component/react/accordion-item/index.js";
import SgdsAccordion from "@govtechsg/sgds-web-component/react/accordion/index.js";
import { IFormData } from "./UserControlledStepper";

interface IReview {
  data: IFormData;
}
function Review({ data }: IReview) {
  return (
    <>
      <SgdsAccordion allowMultiple>
        <SgdsAccordionItem open>
          <div slot="accordion-header">Personal details</div>
          <div slot="accordion-content">
            <SgdsInput
              label="First Name"
              hintText="Enter your first name"
              readonly
              value={data.firstName}
            ></SgdsInput>
            <SgdsInput
              label="Last Name"
              hintText="Enter your last name"
              readonly
              value={data.lastName}
            ></SgdsInput>
          </div>
        </SgdsAccordionItem>
        <SgdsAccordionItem open>
          <div slot="accordion-header">Contact details </div>
          <div slot="accordion-content">
            <SgdsInput
              label="Address"
              hintText="Blk 123 Aerial Road"
              readonly
              value={data.address}
            ></SgdsInput>
          </div>
        </SgdsAccordionItem>
      </SgdsAccordion>
    </>
  );
}

export default Review;

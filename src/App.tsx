
import "./App.css";
import UserControlledStepper from "./UserControlledStepper";
import SgdsControlledStepper from "./SgdsControlledStepper";

export interface IFormData {
  firstName: string;
  lastName: string;
  address: string;
}
function App() {
  return (
    <div>
        <h1>User Controlled Stepper</h1>
        <p>In this example, user controls the activeStep state and updates the activeStep whenever next/previous/reset button is clicked. Rending of child components is also user controlled. 
            User is not using `getComponent` method from SgdsStepper to render the child components</p>
        <UserControlledStepper />
        <h1>Sgds Controlled Stepper</h1>
        <p>In this example, SgdsSteppers controls the state of activeStep and the user fully uses the stepper methods to render the child components. Notice how `activeStep` is not managed by the SgdsControlledStepper component as compared to the above example</p>
        <SgdsControlledStepper />
    </div>
  );
}

export default App;

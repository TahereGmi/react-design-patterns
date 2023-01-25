import { useState } from "react";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";
 
function App() {
  const [onBoardingData, setOnBoardingData] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)

  const onNext = stepData => {
    setOnBoardingData({ ...onBoardingData, ...stepData})
    setCurrentIndex(currentIndex + 1)
  }

  const StepOne = ({goToNext}) => (
    <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: 'Jon Doe' })}>Next</button>
    </>
  )
  const StepTwo = ({goToNext}) => (
    <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: '66' })}>Next</button>
    </>
  )
  const StepThree = ({goToNext}) => (
    <>
    <h1>Step 3</h1>
    <p>Congratulations you approved!</p>
    <button onClick={() => goToNext({})}>Next</button>
    </>
  )
  const StepFour = ({goToNext}) => (
    <>
    <h1>Step 4</h1>
    <button onClick={() => goToNext({ hariColor: 'Brown' })}>Next</button>
    </>
  )

  return (
    <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
      <StepOne />
      <StepTwo />
      {onBoardingData.age >= 62 && <StepThree />}
      <StepFour />
    </ControlledOnboardingFlow>
  );
}

export default App;

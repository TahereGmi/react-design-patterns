import { UncontrolledOnboardingFlow } from "./UncotrolledOnboardingFlow";
 
function App() {
  const StepOne = ({goToNext}) => (
    <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: 'Jon Doe' })}>Next</button>
    </>
  )
  const StepTwo = ({goToNext}) => (
    <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: '60' })}>Next</button>
    </>
  )
  const StepThree = ({goToNext}) => (
    <>
    <h1>Step 3</h1>
    <button onClick={() => goToNext({ hariColor: 'Brown' })}>Next</button>
    </>
  )

  return (
    <UncontrolledOnboardingFlow onFinish={(data) => {
      console.log('data', data)
      alert('Onboarding Completed!')
    }}>
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledOnboardingFlow>
  );
}

export default App;

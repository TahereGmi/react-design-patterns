import { useState } from "react";
import { ControlledModal } from "./ControlledModal";

function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false)
  return (
    <>
      <ControlledModal 
        shouldShow={shouldShowModal}
        onRequestClose={() => {
          alert('Are you sure?')
          setShouldShowModal(false) 
        }}
      >
        <h1>Hello!</h1>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(true)}>
        {shouldShowModal ? 'Hide modal' : 'Show Modal'}
      </button>
    </>
  );
}

export default App;

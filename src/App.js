import './App.css';
import 'bulma/css/bulma.css';

import DigitalAssistants from './DigitalAssistants/DigitalAssistants';
import Animals from './Animals/Animals';

function App() {
  return (
    <div className="app">
      <Animals/>
      <DigitalAssistants/>
    </div>
  );
}

export default App;

import './App.css';
import 'bulma/css/bulma.css';

import Animals from './Animals/Animals';
import DigitalAssistants from './DigitalAssistants/DigitalAssistants';
import ImageSearchApp from './ImageSearch/ImageSearch';
import ReadingList from './ReadingList/ReadingList';

function App() {
  return (
    <div className="app">
      <ReadingList/>
      <ImageSearchApp/>
      <Animals/>
      <DigitalAssistants/>
    </div>
  );
}

export default App;

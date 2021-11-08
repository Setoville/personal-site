import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import FrontPage from './views/FrontPage';

function App() {
  return (
    <div style={fullSize}>
      <FrontPage></FrontPage>
    </div>
  );
}
const fullSize = {
  height: '100vh',
}

export default App;

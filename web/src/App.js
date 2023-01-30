import { HttpProvider } from './components/app/HttpProvider';
import './App.css';
import 'antd/dist/reset.css';
import './App.css';
import { AntdStartupProvider } from './components/antd/AntdStartupProvider';
import { ApplicationProvider } from './components/app/ApplicationProvider';
import { Router } from './Router';

function App() {

  return (
    <div className="App">
      <AntdStartupProvider>
        <HttpProvider>
          <ApplicationProvider>
            <Router />
          </ApplicationProvider>
        </HttpProvider>
      </AntdStartupProvider>
    </div>
  );
}

export default App;

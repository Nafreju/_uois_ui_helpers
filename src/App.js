import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from 'utils/store';

import { Presences } from 'components/Presences';




function App() {
    return (
        <div className="App">
            <AppProvider>
                <Presences />
            </AppProvider>
        </div>
    );
}

export default App;

import ReactDOM from 'react-dom/client';
import App from './core/App';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import './index.scss'
import newStore from './core/storeNew';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={newStore} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


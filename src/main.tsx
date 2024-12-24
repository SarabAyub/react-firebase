import { createRoot } from 'react-dom/client'
import App from './core/App/App.tsx'
import "./styles/_common.css";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

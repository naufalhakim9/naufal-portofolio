import { Route, Routes } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:slug" element={<PortfolioPage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;

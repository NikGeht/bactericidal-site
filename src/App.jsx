import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/index.js';
import { Home, Market, Problem, Product, Team } from './pages';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/problems" element={<Problem />} />
                <Route path="/solution" element={<div>Решение</div>} />
                <Route path="/product" element={<Product />} />
                <Route path="/market" element={<Market />} />
                <Route path="/team" element={<Team />} />
                <Route path="/partners" element={<div>Партнеры</div>} />
                <Route
                    path="/acknowledgments"
                    element={<div>Благодарность</div>}
                />
                <Route path="/contacts" element={<div>Контакты</div>} />
            </Routes>
        </>
    );
}

export default App;

import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Market, Problem, Product, Team, NotFound } from './pages';

function App() {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);

    return (
        <>
            {isHeaderVisible && <Header />}
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
                <Route
                    path="*"
                    element={
                        <NotFound setIsHeaderVisible={setIsHeaderVisible} />
                    }
                />
            </Routes>
        </>
    );
}

export default App;

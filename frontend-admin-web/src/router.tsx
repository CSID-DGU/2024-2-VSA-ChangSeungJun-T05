import Reported from './pages/Reported';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/reported" element={<Reported />} />
        </Routes>

    )
}
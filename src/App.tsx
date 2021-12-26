import { AuthProvider } from './components/Auth/Auth.provider';
import Navbar from './components/Navigation/Navbar';
import Router from './components/Navigation/Router';

function App() {
    return (
        <AuthProvider>
            <Navbar />
            <Router />
        </AuthProvider>
    );
}

export default App;

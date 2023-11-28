import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { userData } = useAuth();

  return (
    <BrowserRouter>
      { Object.values(userData).length !== 0 ? < AppRoutes/> : <AuthRoutes/> }
    </BrowserRouter>
  );
}
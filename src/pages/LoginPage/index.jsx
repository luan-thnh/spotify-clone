import { useNavigate } from 'react-router-dom';
import { SCREEN_URL } from '../../libs/constants';
import { Button } from '@mui/material';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    const token = 'abc';
    const user = {
      username: 'spo-test',
      email: 'spo-test@test.com'
    };

    localStorage.setItem('token', token);
    localStorage.setItem('data_user', JSON.stringify(user));

    navigate(SCREEN_URL.HOME);
  };

  return (
    <div>
      <Button onClick={handleSubmit} variant="contained">
        Login
      </Button>
    </div>
  );
};

export default LoginPage;

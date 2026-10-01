// src/assets/Home.jsx
import { useNavigate, Routes } from 'react-router-dom';
import About from './login';


const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Вы на странице Home!</h1>
      <button onClick={() => navigate('/')}>
        Назад на главную
      </button>
      
      <button onClick={()=>navigate('/login')}  >

      переход на About
      </button>
    </div>
  );
};

export default Home;

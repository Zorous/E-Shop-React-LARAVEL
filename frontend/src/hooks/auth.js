
import axios from 'lib/axios'
import { useNavigate, useParams } from 'react-router-dom';

export const useAuth = () => {
    let navigate = useNavigate();

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const login = async ({ setErrors, setSuccessResponse }) => {
        await csrf()
        axios
            .post('/login',)
            .then(() => {
                  setSuccessResponse();
                  navigate('/dashboard');
              });
    
    }

    return {
        login
    }
}
import axios from 'axios';
import AuthService from './AuthService';

const API_URL = 'http://localhost:8000/';

class WorkoutService {
    getWorkouts() {
        const user = AuthService.getCurrentUser();
        return axios.get(API_URL + 'workouts/', {
            headers: {Authorization: 'Token ${user.token"'}
        });
    }
}
export default new WorkoutService();
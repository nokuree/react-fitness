import axios from 'axios';

const getProtectedData = async () => {
    const token = localStorage.getItem('token'); // Retrieve the stored token
    try {
        const response = await axios.get('http://localhost:8000/some-protected-route/', {
            headers: {
                'Authorization': `Token ${token}`
            }
        });
        console.log(response.data);
        // Handle protected data
    } catch (error) {
        console.error('Error fetching protected data:', error);
        // Handle error, possibly redirect to login if unauthorized
    }
};

import axios from 'axios';

const TEST_SERVER_URL = 'http://20.244.56.144/test/register'; 

export const registerUser = (rollNumber, email, accessCode) => {
  return axios.post(`${TEST_SERVER_URL}/register`, {
    rollNumber,
    email,
    accessCode
  });
};

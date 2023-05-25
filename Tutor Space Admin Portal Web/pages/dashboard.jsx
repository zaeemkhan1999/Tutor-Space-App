import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'MyDesignSystemLightTheme';
import Frame3Comp from 'components/Frame3/Frame3';
import axios from 'axios';
import LogOut24Px from 'components/LogOut24Px/LogOut24Px';

const Home = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to localhost:3001/
      router.push('http://localhost:3001/');
    } else {
      setIsLoading(false);
    }
  }, []);

  const [userProps, setUserProps] = useState([]);

  useEffect(() => {
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');
  
    // Set the headers with the token
    const headers = {
      Authorization: `Bearer ${token}`,
    };
  
    axios
      .get('http://localhost:3000/admin/getuseravgrating/', { headers })
      .then((response) => {
        setUserProps(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        {isLoading ? null : (
          <div>
            <main>
              <LogOut24Px/>
              <Frame3Comp userProps={userProps}/>
            </main>
          </div>
        )}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Home;

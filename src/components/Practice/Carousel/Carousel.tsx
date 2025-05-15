import { useEffect, useState } from 'react';

export function User() {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const API_URL = 'API_URL';

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error('Error: ', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  return <div>{isLoading ? <span>123</span> : <span>456</span>}</div>;
}

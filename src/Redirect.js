import { useEffect } from 'react';

const RedirectPage = () => {
    useEffect(() => {
      window.location.replace('https://www.linkedin.com/in/keith-lavoie-73844a40/');
    }, [])
  
    // Render some text when redirecting
    // You can use a loading gif or something like that
    return <div>
      Redirecting...
    </div>
  }

  export default RedirectPage;
import { useEffect } from 'react';

const Redirect = () => {
    useEffect(() => {
      window.location.href('https://www.linkedin.com/in/keith-lavoie-73844a40/');
    }, [])
    return <div>
      Redirecting...
    </div>
  }

  export default Redirect;


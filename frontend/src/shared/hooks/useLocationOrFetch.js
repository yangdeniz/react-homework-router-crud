import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function useLocationOrFetch(uri) {
  const [state, setState] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setState({...location.state});
    }
    else {
      fetch(uri)
        .then(response => response.json())
        .then(json => setState(json))
        .catch(() => {});
    }
  }, [uri, location.state]);

  return [state, setState];
}
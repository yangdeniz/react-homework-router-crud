import React, { useEffect, useState } from 'react';
import formatDistance from 'date-fns/formatDistance';

function formatDateTime(Component) {
  return function(props) {
    const [date, setDate] = useState('');
    useEffect(() => {
      const formatted = formatDistance(new Date(props.created), new Date(), { addSuffix: true });
      setDate(formatted);
    }, []);
    return <Component {...props} created={date} />;
  }
}

export default formatDateTime;
import React, { MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';

const ReturnButton = () => {
  const history = useHistory();

  const handleClidk = (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event.preventDefault();

    history.goBack();
  };

  return (
    <a onClick={handleClidk} className="button return-button">
      Preview page
    </a>
  );
};

export default ReturnButton;

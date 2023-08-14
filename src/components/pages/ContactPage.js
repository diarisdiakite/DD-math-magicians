import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 10000);
  });

  return (
    <div>
      <h2>This Page is not found</h2>
      <p>
        Please contact us at
        <strong> diarisdiakite@gmail.com</strong>
      </p>
    </div>
  );
}

export default ContactPage;

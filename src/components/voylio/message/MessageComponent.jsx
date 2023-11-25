// MessageComponent.js
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MessageComponent = ({ showMessage, resetMessage }) => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (message) {
      toast.success(message);
      resetMessage(); // Reset the message after displaying
    }
  }, [message, resetMessage]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default MessageComponent;

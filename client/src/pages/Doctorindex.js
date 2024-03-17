import React, { useState } from 'react';


const Doctorindex = () => {
  const [availability, setAvailability] = useState('available'); // State to track availability
  const [communicationMethod, setCommunicationMethod] = useState('call'); // State to track communication method

  const handleAvailabilityChange = (newAvailability) => {
    setAvailability(newAvailability);
  };

  const handleCommunicationMethodChange = (method) => {
    setCommunicationMethod(method);
  };

  return (
    <div>
      <div className="availability-box">
        <div className="box">
          <h2>Availability</h2>
          <div className="options">
            <button 
              className={availability === 'available' ? 'active' : ''}
               onClick={() => handleAvailabilityChange('available')}
            >
              Available
            </button>
            <button 
              className={availability === 'not-available' ? 'active' : ''}
              onClick={() => handleAvailabilityChange('not-available')}
            >
              Not Available
            </button>
          </div>
        </div>
      </div>
      <div className="communication-box">
        <div className="box">
          <h2>Communication Method</h2>
          <div className="options">
            <button 
              className={communicationMethod === 'call' ? 'active' : ''}
              onClick={() => handleCommunicationMethodChange('call')}
            >
              Call
            </button>
            <button 
              className={communicationMethod === 'chat' ? 'active' : ''}
              onClick={() => handleCommunicationMethodChange('chat')}
            >
              Chat
            </button>
            <button 
              className={communicationMethod === 'video' ? 'active' : ''}
              onClick={() => handleCommunicationMethodChange('video')}
            >
              Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctorindex;
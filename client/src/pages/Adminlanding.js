import React, { useState } from 'react';

const AdminLanding = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    // You can add logic to fetch details of the selected item here
  };

  return (
    <div className="admin-landing">
      <div className="sidebar">
        <h2>Access</h2>
        <ul>
          <li onClick={() => handleItemClick('Users')}>Manage Users</li>
          <li onClick={() => handleItemClick('Doctors')}>Manage Doctors</li>
          <li onClick={() => handleItemClick('Accessories')}>Manage Accessories</li>
          <li onClick={() => handleItemClick('Food')}>Manage Food</li>
          <li onClick={() => handleItemClick('Medicine')}>Manage Medicine</li>
        </ul>
      </div>
      <div className="details">
        <h2>Details</h2>
        {selectedItem && <p>{selectedItem} details will appear here.</p>}
      </div>
    </div>
  );
};

export default AdminLanding;
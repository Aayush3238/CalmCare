import React from "react";

const Profile = () => {
  return (
    <div className="page fade-in">
      <div className="card profile">
        <div className="profile-header">
          <div className="profile-avatar">A</div>
          <div>
            <h2>Aayush Kumar</h2>
            <p>Manage your health details</p>
          </div>
        </div>

        <div className="form">
          <div className="form-group">
            <label>Name</label>
            <input defaultValue="Aayush Kumar" />
          </div>

          <div className="form-group">
            <label>Blood Group</label>
            <input defaultValue="O+" />
          </div>
        </div>

        <button className="primary-btn">Save Changes</button>
      </div>
    </div>
  );
};

export default Profile;

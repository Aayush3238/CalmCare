import React from "react";

const FamilyMembers = () => {
  const members = [
    { name: "Aayush", relation: "You" },
    { name: "Aryan", relation: "Brother" },
    { name: "Yash", relation: "Mother" },
  ];

  return (
    <div className="page fade-in">
      <h2>Family Members</h2>

      <div className="grid-3">
        {members.map((m, i) => (
          <div key={i} className="card member">
            <div className="avatar">{m.name[0]}</div>
            <h3>{m.name}</h3>
            <p>{m.relation}</p>
          </div>
        ))}

        <div className="card add-member">+ Add Member</div>
      </div>
    </div>
  );
};

export default FamilyMembers;

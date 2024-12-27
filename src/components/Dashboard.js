import React, { useState } from 'react';


function Dashboard() {
  const [companies, setCompanies] = useState([
    { id: 1, name: "Company A", lastCommunications: [{ type: "Email", date: "2024-01-01" }], nextCommunication: "2024-01-10" },
    { id: 2, name: "Company B", lastCommunications: [{ type: "Phone Call", date: "2024-01-05" }], nextCommunication: "2024-01-08" },
  ]);

  const overdueCompanies = companies.filter(company => new Date(company.nextCommunication) < new Date());

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Overdue Communications</h3>
        <ul>
          {overdueCompanies.map(company => (
            <li key={company.id} style={{ color: "red" }}>
              {company.name} - Next Communication: {company.nextCommunication}
            </li>
          ))}
        </ul>
        <h3>Companies</h3>
        <ul>
          {companies.map(company => (
            <li key={company.id}>
              {company.name}
              <ul>
                {company.lastCommunications.slice(-5).map((comm, idx) => (
                  <li key={idx}>{comm.type} - {comm.date}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;

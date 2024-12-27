import React, { useState } from 'react';

function AdminDashboard() {
  const [companies, setCompanies] = useState([]);

  const addCompany = (company) => {
    setCompanies([...companies, company]);
  };

  const removeCompany = (id) => {
    setCompanies(companies.filter(company => company.id !== id));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const newCompany = {
            id: companies.length + 1,
            name: formData.get("name"),
            location: formData.get("location"),
            linkedIn: formData.get("linkedIn"),
            emails: formData.get("emails").split(","),
            phoneNumbers: formData.get("phoneNumbers").split(","),
            comments: formData.get("comments"),
            periodicity: formData.get("periodicity"),
          };
          addCompany(newCompany);
        }}
      >
        <input name="name" placeholder="Company Name" required />
        <input name="location" placeholder="Location" required />
        <input name="linkedIn" placeholder="LinkedIn Profile" />
        <input name="emails" placeholder="Emails (comma-separated)" />
        <input name="phoneNumbers" placeholder="Phone Numbers (comma-separated)" />
        <textarea name="comments" placeholder="Comments" />
        <input name="periodicity" placeholder="Communication Periodicity" required />
        <button type="submit">Add Company</button>
      </form>
      <ul>
        {companies.map(company => (
          <li key={company.id}>
            {company.name} ({company.location})
            <button onClick={() => removeCompany(company.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;

import React, { useState } from 'react';
import ResumeTemplate from './ResumeTemplate';

const HomePage = () => {
  // Sample resume templates
  const initialTemplates = [
    'Template 1: Resume Content 1',
    'Template 2: Resume Content 2',
    'Template 3: Resume Content 3',
  ];

  const [templates, setTemplates] = useState(initialTemplates);

  const handleEdit = (index) => {
    // Implement edit functionality here
    console.log(`Edit template ${index}`);
  };

  const handleDelete = (index) => {
    // Implement delete functionality here
    const updatedTemplates = [...templates];
    updatedTemplates.splice(index, 1);
    setTemplates(updatedTemplates);
  };

  const handleView = (index) => {
    // Implement view functionality here
    console.log(`View template ${index}`);
  };

  return (
    <div className="home-page">
      <h1>Resume Templates</h1>
      {templates.map((template, index) => (
        <ResumeTemplate
          key={index}
          template={template}
          onEdit={() => handleEdit(index)}
          onDelete={() => handleDelete(index)}
          onView={() => handleView(index)}
        />
      ))}
    </div>
  );
};

export default HomePage;

import React from 'react';

type Checklist = {
  label: string;
  file: string;
};

const checklists: Checklist[] = [
  { label: 'GST', file: 'gst.pdf' },
  { label: 'ITR', file: 'itr.pdf' },
  { label: 'TDS', file: 'tds.pdf' },
  { label: 'Business Registration', file: 'business.pdf' },
  { label: 'Consulting Services', file: 'consulting.pdf' },
];

const ChecklistDownload: React.FC = () => {
  const handleDownload = (fileName: string) => {
    const link = document.createElement('a');
    link.href = `/checklists/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {checklists.map((checklist) => (
        <div
          key={checklist.file}
          className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-start justify-between"
        >
          <h3 className="text-lg font-semibold mb-2">{checklist.label}</h3>
          <button
            onClick={() => handleDownload(checklist.file)}
            className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Download Checklist
          </button>
        </div>
      ))}
    </div>
  );
};

export default ChecklistDownload;

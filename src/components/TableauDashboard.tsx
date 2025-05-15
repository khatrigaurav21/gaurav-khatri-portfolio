import React from 'react';

const TableauDashboard: React.FC = () => {
  return (
    <section
      id="tableau"
      className="fixed top-0 left-0 w-screen h-screen bg-black z-50"
    >
      <iframe
        title="Sales Dashboard"
        src="https://public.tableau.com/views/SalesDashboard_17195991800830/SalesDashboard?:embed=true&:display_count=yes&:showVizHome=no"
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default TableauDashboard;

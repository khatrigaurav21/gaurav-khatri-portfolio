import React from 'react';

const TableauDashboard: React.FC = () => {
  return (
    <section
      id="tableau"
      className="py-12 bg-gray-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Interactive Dashboard</h2>

        <div className="flex justify-center items-center rounded-lg shadow-md border bg-white overflow-hidden">
          <div className="w-full max-w-[1200px] h-[850px] overflow-hidden">
            <iframe
              src="https://public.tableau.com/views/SalesDashboard_17195991800830/SalesDashboard?:embed=true&:display_count=yes&:showVizHome=no"
              title="Sales Dashboard"
              className="w-full h-full border-none"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableauDashboard;

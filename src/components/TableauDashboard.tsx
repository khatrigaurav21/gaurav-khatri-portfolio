import React, { useEffect, useState } from 'react';

const TableauDashboard: React.FC = () => {
  const [iframeHeight, setIframeHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setIframeHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="tableau"
      className="w-screen h-screen bg-black overflow-hidden flex justify-center items-center"
    >
      <iframe
        src="https://public.tableau.com/views/SalesDashboard_17195991800830/SalesDashboard?:embed=true&:display_count=yes&:showVizHome=no"
        width="100%"
        height={iframeHeight}
        allowFullScreen
        title="Sales Dashboard"
        style={{
          border: 'none',
          width: '100vw',
          height: '100vh',
        }}
      />
    </section>
  );
};

export default TableauDashboard;

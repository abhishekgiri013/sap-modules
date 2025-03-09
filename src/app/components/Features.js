const Features = () => {
    return (
      <section className="py-10 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Features and Advantages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white shadow-md rounded-md">
            <h3 className="text-xl font-semibold">Cost Elements & Cost Centers</h3>
            <p className="text-gray-600 mt-2">Detailed tracking and management of costs.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md">
            <h3 className="text-xl font-semibold">Profit Center Accounting</h3>
            <p className="text-gray-600 mt-2">Monitor and report on profit centers to optimize profitability.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md">
            <h3 className="text-xl font-semibold">Integration with SAP FI</h3>
            <p className="text-gray-600 mt-2">Seamless interaction with Financial Accounting to ensure comprehensive financial control.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  
const SubModules = () => {
    return (
      <section className="py-10 px-6">
        <h2 className="text-3xl font-bold text-center">Sub-Modules in SAP CO</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-6">
          <div className="p-6 border rounded-md shadow-md">
            <h3 className="text-xl font-semibold">Cost Element Accounting</h3>
            <p className="text-gray-600 mt-2">Manage and analyze different types of costs associated with business operations.</p>
          </div>
          <div className="p-6 border rounded-md shadow-md">
            <h3 className="text-xl font-semibold">Cost Center Accounting</h3>
            <p className="text-gray-600 mt-2">Responsible for controlling costs and evaluating performance within specific business segments.</p>
          </div>
          <div className="p-6 border rounded-md shadow-md">
            <h3 className="text-xl font-semibold">Profit Center Accounting</h3>
            <p className="text-gray-600 mt-2">Tracks profit and loss by business segment, supporting effective decision-making.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default SubModules;
  
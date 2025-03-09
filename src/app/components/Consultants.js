const Consultants = () => {
    return (
      <section className="py-10 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">Meet Our SAP CO Experts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="p-6 bg-white shadow-md rounded-md text-center">
            <h3 className="text-xl font-semibold">Anna Lee</h3>
            <p className="text-gray-600">20+ years of experience in financial controlling, specializing in cost management and profitability analysis.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md text-center">
            <h3 className="text-xl font-semibold">Raj Patel</h3>
            <p className="text-gray-600">Brings innovative cost control solutions to complex business environments.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Consultants;
  
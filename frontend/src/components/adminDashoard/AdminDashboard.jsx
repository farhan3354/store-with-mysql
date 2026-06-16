const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-4 shadow rounded">
          <h2>Total Products</h2>
          <p className="text-2xl font-bold">120</p>
        </div>

        <div className="bg-white p-4 shadow rounded">
          <h2>Total Orders</h2>
          <p className="text-2xl font-bold">85</p>
        </div>

        <div className="bg-white p-4 shadow rounded">
          <h2>Total Users</h2>
          <p className="text-2xl font-bold">45</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

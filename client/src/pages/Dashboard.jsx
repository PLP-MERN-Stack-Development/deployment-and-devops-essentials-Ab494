import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
        const response = await fetch(`${apiUrl}/health`);
        if (!response.ok) throw new Error('Failed to fetch health');
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000); // Refresh every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-12 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-12 text-center">Dashboard</h1>

        {loading && (
          <div className="flex justify-center items-center h-96">
            <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-6 mb-6 backdrop-blur-md">
            <p className="text-red-200 font-medium">Error: {error}</p>
            <p className="text-red-100 text-sm mt-2">Make sure the backend is running on port 5000</p>
          </div>
        )}

        {data && (
          <>
            {/* Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Health Status */}
              <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-6 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-4">Status</h3>
                <p className="text-green-200 text-lg font-medium">{data.status || 'Unknown'}</p>
              </div>

              {/* Uptime */}
              <div className="bg-blue-500/20 border border-blue-500/50 rounded-xl p-6 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-4">Uptime</h3>
                <p className="text-blue-200 text-lg font-medium">{data.uptime} seconds</p>
              </div>

              {/* Database */}
              <div
                className={`rounded-xl p-6 backdrop-blur-md border ${
                  data.database?.connected
                    ? 'bg-emerald-500/20 border-emerald-500/50'
                    : 'bg-red-500/20 border-red-500/50'
                }`}
              >
                <h3 className="text-xl font-bold text-white mb-4">Database</h3>
                <p
                  className={`text-lg font-medium ${
                    data.database?.connected ? 'text-emerald-200' : 'text-red-200'
                  }`}
                >
                  {data.database?.connected ? 'Connected' : 'Disconnected'}
                </p>
              </div>

              {/* Timestamp */}
              <div className="bg-purple-500/20 border border-purple-500/50 rounded-xl p-6 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-4">Last Update</h3>
                <p className="text-purple-200 text-sm font-medium break-words">
                  {new Date(data.timestamp).toLocaleString()}
                </p>
              </div>
            </div>

            {/* Memory Usage */}
            {data.memory && (
              <div className="bg-white/10 border border-white/20 rounded-xl p-8 backdrop-blur-md mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Memory Usage</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-white/70 text-sm mb-2">Heap Used</p>
                    <p className="text-2xl font-bold text-blue-300">{data.memory.heapUsed}</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm mb-2">Heap Total</p>
                    <p className="text-2xl font-bold text-blue-300">{data.memory.heapTotal}</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm mb-2">External</p>
                    <p className="text-2xl font-bold text-blue-300">{data.memory.external}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Raw Data */}
            <div className="bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-4">Raw Response</h3>
              <pre className="text-white/80 text-sm overflow-auto bg-black/50 p-4 rounded-lg">
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;

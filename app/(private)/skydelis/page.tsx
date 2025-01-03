
const Dashboard = () => {
    return (
      <div className="min-h-screen bg-gray-100 flex">
  
        {/* Main Content */}
        <main className="flex-1 p-8">
          <header className="mb-8">
            <h1 className="text-3xl font-semibold">Sveikas sugrįžęs, [user]</h1>
            <p className="text-gray-600">Apžvalga</p>
          </header>
  
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-fit">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Iš viso įvertinta mokytojų:</h3>
              <p className="text-4xl font-bold text-blue-500">{45}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Vidutinis įvertinimas:</h3>
              <p className="text-4xl font-bold text-blue-500">{4.2}</p>
            </div>
          </div>
  
          {/* My Ratings Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Mano įvertinimai</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left text-gray-600">Mokytojas</th>
                      <th className="px-4 py-2 text-left text-gray-600">Įvertinimas</th>
                      <th className="px-4 py-2 text-left text-gray-600">Laikas</th>
                      <th className="px-4 py-2 text-left text-gray-600">Veiksmai</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-4 py-2">Petras Jontanas</td>
                      <td className="px-4 py-2">{5}⭐</td>
                      <td className="px-4 py-2">2025-01-01</td>
                      <td className="px-4 py-2">
                        <button className="text-blue-500 hover:underline">Redaguoti</button>
                        <button className="text-red-500 hover:underline ml-2">Trinti</button>
                      </td>
                    </tr>
                    {/* Add more rows dynamically */}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
  
          <button className="btn btn-outline">Atsijungti</button>
        </main>
      </div>
    );
  };
  
  export default Dashboard;
  
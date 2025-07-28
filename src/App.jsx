function App() {
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522199794611-8e8f9d5b1b7e?auto=format&fit=crop&w=1470&q=80')" }}>
      <div className="bg-black bg-opacity-60 p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">KL UNIVERSITY</h1>
        <p className="text-lg mb-6">Empowering Future Innovators and Leaders</p>
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full text-white font-semibold shadow-md transition">Explore More</button>
      </div>
    </div>
  );
}

export default App;

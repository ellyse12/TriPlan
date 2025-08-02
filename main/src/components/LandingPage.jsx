import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  // Plan oluşturma sayfasına yönlendirme
  const handleStartPlanning = () => {
    navigate("/planner");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Ana başlık */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
          TripSurf
        </h1>

        {/* Alt başlık */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
          Hayalindeki seyahati planla, unutulmaz anılar biriktir
        </p>

        {/* Plan Yap butonu */}
        <button
          onClick={handleStartPlanning}
          className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Plan Yap
        </button>

        {/* Dekoratif elementler */}
        <div className="mt-16 text-gray-400">
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

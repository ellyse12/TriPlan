import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CitySelector from "./CitySelector";
import LocationForm from "./LocationForm";
import LocationList from "./LocationList";

const PlannerPage = () => {
  const navigate = useNavigate();

  // Seçilen şehir bilgisi
  const [selectedCity, setSelectedCity] = useState("");
  // Eklenen konumların listesi
  const [locations, setLocations] = useState([]);

  // Formdan gelen yeni konumu listeye ekler
  const handleAddLocation = (location) => {
    setLocations([...locations, location]);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/")}
            className="text-primary-600 hover:text-primary-700 font-semibold mb-4 flex items-center"
          >
            ← Ana Sayfaya Dön
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Seyahat Planı Oluştur
          </h1>
          <p className="text-gray-600">
            Gideceğin şehri seç ve gezilecek yerleri ekle
          </p>
        </div>

        {/* Şehir Seçimi bileşeni */}
        <CitySelector
          selectedCity={selectedCity}
          onCitySelect={setSelectedCity}
        />

        {/* Seçilen şehir bilgisi ve gezilecek yerler */}
        {selectedCity ? (
          <>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <p className="text-lg text-gray-700">
                Planlanan Şehir: <span className="font-semibold">{selectedCity}</span>
              </p>
            </div>

            {/* Gezilecek Yerler Ekleme */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {selectedCity} için Gezilecek Yerler
              </h2>

              {/* Konum ekleme formu */}
              <LocationForm onAddLocation={handleAddLocation} />

              {/* Eklenen konumların listesi */}
              {locations.length > 0 && <LocationList locations={locations} />}
            </div>
          </>
        ) : (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800">
              Plan oluşturmaya başlamak için önce bir şehir seçin.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlannerPage;

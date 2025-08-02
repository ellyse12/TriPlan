import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CitySelector from "./CitySelector";

const PlannerPage = () => {
  const navigate = useNavigate();

  // State'ler
  const [selectedCity, setSelectedCity] = useState("");
  const [places, setPlaces] = useState([]);
  const [newPlace, setNewPlace] = useState("");

  // Yeni yer ekleme fonksiyonu
  const handleAddPlace = () => {
    if (newPlace.trim() && selectedCity) {
      setPlaces([
        ...places,
        {
          id: Date.now(),
          name: newPlace.trim(),
          city: selectedCity,
        },
      ]);
      setNewPlace("");
    }
  };

  // Yer silme fonksiyonu
  const handleRemovePlace = (id) => {
    setPlaces(places.filter((place) => place.id !== id));
  };

  // Enter tuşu ile yer ekleme
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddPlace();
    }
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

              {/* Yer Ekleme Formu */}
              <div className="flex flex-col md:flex-row gap-3 mb-6">
                <input
                  type="text"
                  value={newPlace}
                  onChange={(e) => setNewPlace(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Gezilecek yer adını yazın..."
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button
                  onClick={handleAddPlace}
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Ekle
                </button>
              </div>

              {/* Eklenen Yerler Listesi */}
              {places.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Eklenen Yerler:
                  </h3>
                  {places.map((place) => (
                    <div
                      key={place.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <span className="font-medium text-gray-800">
                        {place.name}
                      </span>
                      <button
                        onClick={() => handleRemovePlace(place.id)}
                        className="text-red-500 hover:text-red-700 font-semibold"
                      >
                        Sil
                      </button>
                    </div>
                  ))}
                </div>
              )}
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

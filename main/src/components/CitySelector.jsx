import React from "react";

// CitySelector bileşeni, sabit şehir listesi sunar ve seçilen şehri üst bileşene bildirir.
const CitySelector = ({ selectedCity, onCitySelect }) => {
  // Kullanıcıya sunulacak sabit şehirler
  const cities = ["İstanbul", "Ankara", "İzmir", "Eskişehir"];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Şehir Seç</h2>
      {/* Şehir seçimi için dropdown */}
      <select
        value={selectedCity}
        onChange={(e) => onCitySelect(e.target.value)}
        className="w-full md:w-64 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      >
        <option value="">Şehir seçin...</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;

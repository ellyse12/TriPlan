/**
 * Eklenen konumları basit bir metin listesi olarak gösterir.
 */
const LocationList = ({ locations }) => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Eklenen Yerler:</h3>
      {locations.map((loc) => (
        <div key={loc.id} className="p-4 bg-gray-50 rounded-lg">
          <p className="font-medium text-gray-800">{loc.name}</p>
          {loc.description && (
            <p className="text-gray-600 text-sm mt-1">{loc.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default LocationList;

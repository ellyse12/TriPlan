import { useState } from "react";

/**
 * Form bileşeni: Kullanıcının yeni bir konum eklemesini sağlar.
 */
const LocationForm = ({ onAddLocation }) => {
  // Form alanları için yerel state'ler
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Form gönderimini ele alır
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return; // Konum adı zorunlu

    // Üst bileşene yeni konumu bildir
    onAddLocation({
      id: Date.now(),
      name: name.trim(),
      description: description.trim(),
    });

    // Formu temizle
    setName("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-3 mb-6"
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Konum Adı"
        className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Açıklama"
        className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        Ekle
      </button>
    </form>
  );
};

export default LocationForm;

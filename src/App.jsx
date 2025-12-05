// 1. Definišemo Funkcionalnu Komponentu
function PrvaKomponenta() {

  // 2. Vraćamo JSX (HTML struktura)
  return (
    // Pravilo 1: Sve mora biti unutar jednog korena elementa (koristimo div)
    <div>
      {/* Pravilo 2: Koristimo className umesto class */}
      <h1 className="naslov">Dobrodošli u React!</h1>
      
      {/* Pravilo 3: Umetanje JS unutar vitica {} */}
      <p>Datum učitavanja: {new Date().toLocaleDateString()}</p>
      
      <p>Ovo je prva komponenta, spremna za Props i State.</p>
    </div>
  );
}

// 3. Exportujemo komponentu da bi je main.jsx mogao videti
export default PrvaKomponenta;
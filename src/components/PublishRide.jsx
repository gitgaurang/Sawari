import { useState } from "react";
import styles from "./PublishRide.module.css";
function PublishRide({ onSubmit }) {
  const [startLocation, setStartLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      startLocation,
      destination,
      date,
      passengers,
    };
    onSubmit(formData);
  };

  return (
    <div
      //   className={styles.mainStyle}
      //   style={{
      //     backgroundColor: "rgba(255, 255, 255, 0.5)", // Transparent white background
      //     padding: "20px",
      //     borderRadius: "10px",
      //     display: "flex",
      //     flexDirection: "column", // Align children vertically
      //     gap: "10px", // Add spacing between inputs
      //   }}
      className={styles.transparentFormContainer}
    >
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Start Location"
          value={startLocation}
          onChange={(e) => setStartLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="date"
          placeholder="Date"
          className={styles.date}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Passengers"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <img
        src="/carpoolOpenDoor.png"
        alt="Background"
        className={styles.backgroundCar}
      />
    </div>
  );
}

export default PublishRide;

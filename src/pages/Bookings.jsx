import React from "react";
import { Link } from "react-router-dom";

const styles = {
  container: {
    textAlign: "center",
    margin: "0",
    padding: "0",
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "#333",
  },
  nav: {
    listStyle: "none",
    padding: 0,
  },
  navItem: {
    margin: "10px",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "20px",
    fontWeight: "bold",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
    display: "inline-block",
    width:"200px",
  },
};

const Bookings = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Your Bookings</h2>
      <nav>
        <ul style={styles.nav}>
          <li style={styles.navItem}>
            <Link to="/bookedhotels" style={styles.link}>
              Booked Hotels
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/bookedflights" style={styles.link}>
              Booked Flights
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/bookedtours" style={styles.link}>
              Booked Tours
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Bookings;

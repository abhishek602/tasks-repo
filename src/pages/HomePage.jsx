import React from "react";

const HomePage = () => {
  // Inline styles
  const styles = {
    container: {
      width: "90vw",
      margin: "20px auto 0 auto",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },

    header: {
      padding: "20px",
      fontSize: "36px",
      color: "#333",
    },
    welcomeText: {
      margin: "20px 0",
      fontSize: "20px",
    },

    footer: {
      backgroundColor: "#333",
      color: "#fff",
      position: "fixed",
      left: "0",
      bottom: "0",
      width: "100%",
      textAlign: "center",
      padding: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Welcome to Our Todo Application!</h2>
      <p style={styles.welcomeText}>
        Organize your tasks efficiently and joyfully.
      </p>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} TodoApp, Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;

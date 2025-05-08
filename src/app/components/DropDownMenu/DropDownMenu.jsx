import React, { useState, useRef, useEffect } from "react";
import styles from "./DropDownMenu.module.css";

const MenuDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClick = (category) => {
    setIsOpen(false);
    window.location.href = `/themesPage/${category}`;
  };

  const categories = {
    "18 mois à 3 ans": "18mois3ans",
    "3 ans à 4 ans": "3a4ans",
    "4 ans à 5 ans": "5a6ans",
  };

  // Ferme le menu si on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div style={{ position: "relative" }} ref={menuRef}>
      <button
        style={{
          backgroundColor: "green",
          background: "none",
          border: "none",
          fontWeight: "bold",
          fontSize: "0.9rem",
          padding: "10px",
          borderBottom: isOpen ? "3px solid orange" : "none",
          cursor: "pointer",
        }}
        onClick={toggleMenu}
      >
        Catégories
      </button>
      {isOpen && (
        <ul className={styles["dropdown-menu"]}>
          {Object.entries(categories).map(([key, value]) => (
            <li key={value} style={{ listStyle: "none" }}>
              <button
                style={{
                  background: "rgba(255, 165, 0, 0.2)",
                  marginBottom: "10px",
                  border: "none",
                  borderRadius: "5px",
                  borderBottomLeftRadius: "0",
                  borderBottomRightRadius: "0",
                  borderBottom: "0px solid #d0cece",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                  width: "100%",
                  padding: "10px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255, 165, 0, 0.5)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(255, 165, 0, 0.2)")
                }
                onClick={() => handleClick(value)}
              >
                {key}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuDropDown;

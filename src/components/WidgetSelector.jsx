import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleWidgetVisibility } from "../redux/actions";

const WidgetSelector = ({ isOpen, onClose }) => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleToggleVisibility = (categoryId, widgetId) => {
    dispatch(toggleWidgetVisibility(categoryId, widgetId));
  };

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.header}>
          <h3>Add Widgets</h3>
          <button style={styles.closeButton} onClick={onClose}>
            ❌
          </button>
        </div>

        <p style={styles.instructionText}>
          Personalize your dashboard by adding or removing widgets.
        </p>

        {categories.map((category) => (
          <div style={styles.categoryContainer} key={category.id}>
            <h3>{category.name}</h3>
            <ul>
              {category.widgets.map((widget) => (
                <li key={widget.id}>
                  <input
                    type="checkbox"
                    checked={widget.visible} // Bind to widget's visible state
                    onChange={() => handleToggleVisibility(category.id, widget.id)}
                  />
                  {widget.name}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <button style={styles.confirmButton} onClick={onClose}>
          Confirm
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "flex-end",
    zIndex: 1000,
  },
  modal: {
    background: "white",
    width: "50%",
    height: "auto",
    color: "white",
    overflow: "auto",
    zIndex: 1001,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    background: "#008080",
    padding: "10px 20px",
    position: "fixed",
    width: "47%",
  },
  closeButton: {
    background: "none",
    outline: "none",
    border: "none",
    fontSize: "30px",
    cursor: "pointer",
  },
  instructionText: {
    color: "#008080",
    textAlign: "left",
    paddingTop: "80px",
    fontSize: "1.2rem",
  },
  categoryContainer: {
    color: "black",
    padding: "20px",
  },
  confirmButton: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    background: "#008080",
    color: "white",
    padding: "20px",
    outline: "none",
    border: "none",
    fontSize: "1.2rem",
    cursor: "pointer",
    borderRadius: "10px",
    zIndex: 1002,
  },
};

export default WidgetSelector;

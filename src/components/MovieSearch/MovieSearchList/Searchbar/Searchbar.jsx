import { useState, useCallback, useEffect } from "react";
import styles from "./searchbar.module.css";

const Searchbar = ({ onSubmit }) => {
  const [state, setState] = useState("");
  const [previousValue, setPreviousValue] = useState("");

  const storedSearch = localStorage.getItem("searchValue");

  useEffect(() => {
    if (storedSearch) {
      setState(storedSearch);
    }
  }, [storedSearch]);

  const handleChange = useCallback(({ target }) => {
    const { value } = target;
    setState(value);
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (state === previousValue || storedSearch) {
      alert(`Can't enter identical request.`);
      return;
    }
    if (state.trim() === "") {
        return;
      }
    setPreviousValue(state);
    onSubmit(state.trim());
    localStorage.setItem("searchValue", state.trim());
  };

  return (
    <header className={styles.searchForm}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <button type="submit" className={styles.button}>
          <span className={styles.buttonLabel}>Find</span>
        </button>
        <input
          value={state}
          onChange={handleChange}
          required
          type="text"
          autoComplete="off"
          name="search"
          autoFocus
          placeholder="Enter your request"
          className={styles.searchElements}
        />
      </form>
    </header>
  );
};

export default Searchbar;

import { SORT_OPTIONS } from "../../utils/constants";
import styles from "./SortDropdown.module.css";

const SortDropdown = ({ value, onChange }) => (
  <select
    className={styles.select}
    value={value}
    onChange={(e) => onChange(e.target.value)}
  >
    {SORT_OPTIONS.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
);

export default SortDropdown;

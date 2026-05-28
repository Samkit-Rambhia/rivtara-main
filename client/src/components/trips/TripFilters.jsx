import { useState } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { CATEGORIES, DIFFICULTIES } from "../../utils/constants";
import { formatPrice } from "../../utils/formatPrice";
import styles from "./TripFilters.module.css";

const PRICE_MIN = 0;
const PRICE_MAX = 50000;
const PRICE_STEP = 500;

const Section = ({ title, defaultOpen = true, children }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={styles.section}>
      <button
        className={styles.sectionToggle}
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        {title}
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}>
          <FaChevronDown />
        </span>
      </button>
      {open && <div className={styles.sectionBody}>{children}</div>}
    </div>
  );
};

const TripFilters = ({ filters, onFilterChange }) => {
  const handleClearAll = () => {
    onFilterChange({
      search: "",
      category: "",
      minPrice: "",
      maxPrice: "",
      difficulty: "",
    });
  };

  const hasActiveFilters =
    filters.search ||
    filters.category ||
    filters.minPrice ||
    filters.maxPrice ||
    filters.difficulty;

  return (
    <div className={styles.filters}>
      <div className={styles.header}>
        <h3 className={styles.heading}>Filters</h3>
        {hasActiveFilters && (
          <button
            className={styles.clearBtn}
            onClick={handleClearAll}
            type="button"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Search */}
      <Section title="Search" defaultOpen={true}>
        <div className={styles.searchWrapper}>
          <FaSearch className={styles.searchIcon} />
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search trips..."
            value={filters.search || ""}
            onChange={(e) =>
              onFilterChange({ ...filters, search: e.target.value })
            }
          />
        </div>
      </Section>

      {/* Categories */}
      <Section title="Categories" defaultOpen={true}>
        <div className={styles.checkboxList}>
          {CATEGORIES.map((cat) => (
            <label key={cat.value} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={filters.category === cat.value}
                onChange={() =>
                  onFilterChange({
                    ...filters,
                    category:
                      filters.category === cat.value ? "" : cat.value,
                  })
                }
              />
              {cat.label}
            </label>
          ))}
        </div>
      </Section>

      {/* Price Range */}
      <Section title="Price Range" defaultOpen={true}>
        <div className={styles.priceRange}>
          <div className={styles.priceLabels}>
            <span className={styles.priceValue}>
              {formatPrice(filters.minPrice || PRICE_MIN)}
            </span>
            <span className={styles.priceValue}>
              {formatPrice(filters.maxPrice || PRICE_MAX)}
            </span>
          </div>
          <Slider
            range
            min={PRICE_MIN}
            max={PRICE_MAX}
            step={PRICE_STEP}
            value={[
              filters.minPrice ? Number(filters.minPrice) : PRICE_MIN,
              filters.maxPrice ? Number(filters.maxPrice) : PRICE_MAX,
            ]}
            onChange={([min, max]) =>
              onFilterChange({
                ...filters,
                minPrice: min === PRICE_MIN ? "" : String(min),
                maxPrice: max === PRICE_MAX ? "" : String(max),
              })
            }
            styles={{
              track: { backgroundColor: "#1A3A3A", height: 4 },
              rail: { backgroundColor: "#D5DFD0", height: 4 },
              handle: {
                borderColor: "#1A3A3A",
                backgroundColor: "#fff",
                width: 18,
                height: 18,
                marginTop: -7,
                boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                opacity: 1,
              },
            }}
          />
        </div>
      </Section>

      {/* Difficulty */}
      <Section title="Difficulty" defaultOpen={true}>
        <div className={styles.radioList}>
          {DIFFICULTIES.map((diff) => (
            <label key={diff.value} className={styles.radioLabel}>
              <input
                type="radio"
                name="difficulty"
                checked={filters.difficulty === diff.value}
                onChange={() =>
                  onFilterChange({
                    ...filters,
                    difficulty:
                      filters.difficulty === diff.value ? "" : diff.value,
                  })
                }
              />
              {diff.label}
            </label>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default TripFilters;

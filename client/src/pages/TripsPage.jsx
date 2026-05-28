import { useState, useEffect, useCallback } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  FaFilter,
  FaTimes,
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaCompass,
} from "react-icons/fa";
import useDebounce from "../hooks/useDebounce";
import TripFilters from "../components/trips/TripFilters";
import TripCard from "../components/trips/TripCard";
import SortDropdown from "../components/trips/SortDropdown";
import Loader from "../components/ui/Loader";
import { getDemoTrips } from "../data/demoTrips";
import styles from "./TripsPage.module.css";

const FILTER_KEYS = ["search", "category", "minPrice", "maxPrice", "difficulty"];

const getFiltersFromParams = (searchParams) => {
  const filters = {};
  FILTER_KEYS.forEach((key) => {
    filters[key] = searchParams.get(key) || "";
  });
  return filters;
};

const CATEGORY_LABELS = {
  backpacking: "Backpacking",
  weekend: "Weekend",
  international: "International",
  "bike-trip": "Bike Trip",
  trekking: "Trekking",
  camping: "Camping",
  honeymoon: "Honeymoon",
  "group-tour": "Group Tour",
};

const TripsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState(() => getFiltersFromParams(searchParams));
  const [sort, setSort] = useState(searchParams.get("sort") || "");
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  const [trips, setTrips] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [totalTrips, setTotalTrips] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const debouncedSearch = useDebounce(filters.search, 400);

  useEffect(() => {
    const params = {};
    FILTER_KEYS.forEach((key) => {
      if (key === "search") {
        if (debouncedSearch) params.search = debouncedSearch;
      } else if (filters[key]) {
        params[key] = filters[key];
      }
    });
    if (sort) params.sort = sort;
    if (page > 1) params.page = String(page);
    setSearchParams(params, { replace: true });
  }, [filters.category, filters.minPrice, filters.maxPrice, filters.difficulty, debouncedSearch, sort, page, setSearchParams]);

  useEffect(() => {
    const fetchTrips = () => {
      setLoading(true);
      setError(null);
      try {
        const activeFilters = {};
        FILTER_KEYS.forEach((key) => {
          const value = key === "search" ? debouncedSearch : filters[key];
          if (value) activeFilters[key] = value;
        });

        const data = getDemoTrips({
          filters: activeFilters,
          sort,
          page,
          limit: 9,
        });

        setTrips(data.trips || []);
        setTotalPages(data.totalPages || 1);
        setTotalTrips(data.totalTrips || 0);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load trips");
      } finally {
        setLoading(false);
      }
    };
    fetchTrips();
  }, [filters.category, filters.minPrice, filters.maxPrice, filters.difficulty, debouncedSearch, sort, page]);

  const handleFilterChange = useCallback((updated) => {
    setFilters(updated);
    setPage(1);
  }, []);

  const handleSortChange = useCallback((value) => {
    setSort(value);
    setPage(1);
  }, []);

  const removeFilter = (key) => {
    handleFilterChange({ ...filters, [key]: "" });
  };

  const activeFilterTags = [];
  if (filters.category) activeFilterTags.push({ key: "category", label: CATEGORY_LABELS[filters.category] || filters.category });
  if (filters.difficulty) activeFilterTags.push({ key: "difficulty", label: filters.difficulty.charAt(0).toUpperCase() + filters.difficulty.slice(1) });
  if (filters.minPrice || filters.maxPrice) activeFilterTags.push({ key: "minPrice", label: `Price filter` });

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, page - Math.floor(maxVisible / 2));
    let end = start + maxVisible - 1;
    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  return (
    <div className={`${styles.page} page-enter`}>
      {/* Page Hero Banner */}
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <div className={styles.breadcrumb}>
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Trips</span>
          </div>
          <h1 className={styles.pageTitle}>Explore All Trips</h1>
          <p className={styles.pageSubtitle}>
            Discover handpicked adventures across mountains, valleys, and beaches
          </p>

          {/* Inline search */}
          <div className={styles.bannerSearch}>
            <FaSearch className={styles.bannerSearchIcon} />
            <input
              className={styles.bannerSearchInput}
              type="text"
              placeholder="Search trips, destinations..."
              value={filters.search || ""}
              onChange={(e) =>
                handleFilterChange({ ...filters, search: e.target.value })
              }
            />
          </div>
        </div>

        {/* Decorative elements */}
        <div className={styles.bannerDeco1} />
        <div className={styles.bannerDeco2} />
      </div>

      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Desktop Sidebar */}
          <aside className={styles.sidebar}>
            <TripFilters filters={filters} onFilterChange={handleFilterChange} />
          </aside>

          {/* Main Content */}
          <div className={styles.main}>
            {/* Top Bar */}
            <div className={styles.topBar}>
              <div className={styles.topBarLeft}>
                <button
                  className={styles.mobileFilterBtn}
                  onClick={() => setMobileFiltersOpen(true)}
                  type="button"
                >
                  <FaFilter size={13} />
                  Filters
                </button>

                <span className={styles.tripCount}>
                  <span className={styles.tripCountBold}>{totalTrips}</span>{" "}
                  {totalTrips === 1 ? "trip" : "trips"} found
                </span>
              </div>

              <SortDropdown value={sort} onChange={handleSortChange} />
            </div>

            {/* Active filter tags */}
            {activeFilterTags.length > 0 && (
              <div className={styles.filterTags}>
                {activeFilterTags.map((tag) => (
                  <span key={tag.key} className={styles.filterTag}>
                    {tag.label}
                    <button
                      className={styles.filterTagRemove}
                      onClick={() => removeFilter(tag.key)}
                      type="button"
                    >
                      <FaTimes size={10} />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Content */}
            {loading ? (
              <Loader />
            ) : error ? (
              <div className={styles.error}>{error}</div>
            ) : trips.length === 0 ? (
              <div className={styles.empty}>
                <div className={styles.emptyIcon}>
                  <FaCompass />
                </div>
                <h3 className={styles.emptyTitle}>No trips found</h3>
                <p className={styles.emptyText}>
                  Try adjusting your filters or search to find what you're looking for.
                </p>
                <button
                  className={styles.emptyClearBtn}
                  onClick={() =>
                    handleFilterChange({
                      search: "",
                      category: "",
                      minPrice: "",
                      maxPrice: "",
                      difficulty: "",
                    })
                  }
                  type="button"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <>
                <div className={styles.grid}>
                  {trips.map((trip) => (
                    <TripCard key={trip._id} trip={trip} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className={styles.pagination}>
                    <button
                      className={`${styles.pageBtn} ${page <= 1 ? styles.pageBtnDisabled : ""}`}
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={page <= 1}
                      type="button"
                    >
                      <FaChevronLeft size={12} />
                    </button>

                    {getPageNumbers().map((num) => (
                      <button
                        key={num}
                        className={`${styles.pageBtn} ${num === page ? styles.pageBtnActive : ""}`}
                        onClick={() => setPage(num)}
                        type="button"
                      >
                        {num}
                      </button>
                    ))}

                    <button
                      className={`${styles.pageBtn} ${page >= totalPages ? styles.pageBtnDisabled : ""}`}
                      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                      disabled={page >= totalPages}
                      type="button"
                    >
                      <FaChevronRight size={12} />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      {mobileFiltersOpen && (
        <div
          className={styles.mobileOverlayActive}
          onClick={() => setMobileFiltersOpen(false)}
        >
          <div
            className={styles.mobileDrawer}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.mobileDrawerHeader}>
              <span className={styles.mobileDrawerTitle}>Filters</span>
              <button
                className={styles.mobileCloseBtn}
                onClick={() => setMobileFiltersOpen(false)}
                type="button"
              >
                <FaTimes />
              </button>
            </div>
            <TripFilters filters={filters} onFilterChange={handleFilterChange} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TripsPage;

import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { toggleWishlist as toggleWishlistApi } from "../services/authService";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState(new Set());

  useEffect(() => {
    if (user?.wishlist) {
      setWishlist(new Set(user.wishlist.map((t) => (typeof t === "object" ? t._id : t))));
    } else {
      setWishlist(new Set());
    }
  }, [user]);

  const isWishlisted = (tripId) => wishlist.has(tripId);

  const toggleWishlist = async (tripId) => {
    if (!user) return false;

    const newSet = new Set(wishlist);
    if (newSet.has(tripId)) {
      newSet.delete(tripId);
    } else {
      newSet.add(tripId);
    }
    setWishlist(newSet);

    try {
      await toggleWishlistApi(tripId);
      return true;
    } catch {
      setWishlist(wishlist);
      return false;
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, isWishlisted, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

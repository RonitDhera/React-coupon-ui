// src/components/StoreListPage.jsx
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

const StoreListPage = () => {
  const location = useLocation();
  const [stores, setStores] = useState([]); // Stores will be fetched from backend
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // NEW: State for the active letter in the A-Z filter
  const [activeLetter, setActiveLetter] = useState("All");

  // Dummy fetch function - REPLACE WITH YOUR ACTUAL API CALL
  const fetchStores = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // --- START: Simulate API Call ---
      // In a real application, you would replace this with:
      // const response = await fetch('/api/stores');
      // if (!response.ok) {
      // throw new Error(`HTTP error! status: ${response.status}`);
      // }
      // const data = await response.json();
      // setStores(data);

      // Dummy data for demonstration until backend is ready
      const dummyBackendStores = [
        {
          id: "store-1",
          name: "Amazon",
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
          description:
            "Find everything you need, from books and electronics to home goods and fashion, with fast shipping and great deals.",
          totalOffers: 120,
          categories: ["Electronics", "Books", "Home", "Fashion"],
          affiliateLink: "https://www.amazon.com",
          averageRating: 4.7,
          totalReviews: 500,
          isPopular: true, // Marked as popular
        },
        {
          id: "store-2",
          name: "Walmart",
          logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
          description:
            "Your one-stop shop for groceries, electronics, apparel, and more, offering everyday low prices.",
          totalOffers: 95,
          categories: ["Groceries", "Home", "Electronics", "Apparel"],
          affiliateLink: "https://www.walmart.com",
          averageRating: 4.2,
          totalReviews: 300,
          isPopular: true, // Marked as popular
        },
        {
          id: "store-3",
          name: "Target",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Target_Corporation_logo_%28vector%29.svg/2048px-Target_Corporation_logo_%28vector%29.svg.png",
          description:
            "Expect More. Pay Less. Shop Target for great deals on home decor, clothing, electronics, and baby products.",
          totalOffers: 80,
          categories: ["Home", "Apparel", "Baby", "Electronics"],
          affiliateLink: "https://www.target.com",
          averageRating: 4.5,
          totalReviews: 250,
          isPopular: true, // Marked as popular
        },
        {
          id: "store-4",
          name: "Best Buy",
          logo: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Best_Buy_Logo.svg",
          description:
            "Shop for electronics, computers, appliances, cell phones, video games & more new tech. In-store pickup & free shipping.",
          totalOffers: 60,
          categories: ["Electronics", "Appliances", "Tech"],
          affiliateLink: "https://www.bestbuy.com",
          averageRating: 4.6,
          totalReviews: 180,
          isPopular: true, // Marked as popular
        },
        {
          id: "store-5",
          name: "Sephora",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Sephora_logo.svg/2560px-Sephora_logo.svg.png",
          description:
            "Your ultimate destination for beauty products, fragrances, and skincare from top brands.",
          totalOffers: 45,
          categories: ["Beauty", "Skincare", "Fragrance"],
          affiliateLink: "https://www.sephora.com",
          averageRating: 4.8,
          totalReviews: 210,
        },
        {
          id: "store-6",
          name: "Nike",
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Nike_logo_black.svg",
          description:
            "Shop for Nike shoes, clothing and gear. Get the latest innovation in sports footwear and apparel.",
          totalOffers: 30,
          categories: ["Apparel", "Sporting Goods", "Shoes"],
          affiliateLink: "https://www.nike.com",
          averageRating: 4.7,
          totalReviews: 150,
          isPopular: true, // Marked as popular
        },
        {
          id: "store-7",
          name: "Home Depot",
          logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/The_Home_Depot_logo.svg",
          description:
            "Shop for all your home improvement needs. Find tools, appliances, building supplies, and more.",
          totalOffers: 70,
          categories: ["Home Improvement", "Hardware", "Garden"],
          affiliateLink: "https://www.homedepot.com",
          averageRating: 4.3,
          totalReviews: 100,
        },
        {
          id: "store-8",
          name: "Macy's",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Macy%27s_Logo.svg/2560px-Macy%27s_Logo.svg.png",
          description:
            "Shop for the latest fashion trends, home decor, and beauty products from top brands at Macy's.",
          totalOffers: 55,
          categories: ["Fashion", "Apparel", "Home", "Beauty"],
          affiliateLink: "https://www.macys.com",
          averageRating: 4.1,
          totalReviews: 90,
          isPopular: true, // Marked as popular
        },
        {
          id: "store-9",
          name: "Chewy",
          logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Chewy_Logo.svg/1280px-Chewy_Logo.svg.png",
          description:
            "Your online pet store for pet food, supplies, and more, delivered right to your door.",
          totalOffers: 40,
          categories: ["Pet Supplies", "Pet Food"],
          affiliateLink: "https://www.chewy.com",
          averageRating: 4.9,
          totalReviews: 110,
        },
        {
          id: "store-10",
          name: "Expedia",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Expedia_Logo.svg/2560px-Expedia_Logo.svg.png",
          description:
            "Book flights, hotels, rental cars, and vacation packages for your next adventure.",
          totalOffers: 25,
          categories: ["Travel", "Flights", "Hotels"],
          affiliateLink: "https://www.expedia.com",
          averageRating: 4.0,
          totalReviews: 70,
        },
        {
          id: "store-11",
          name: "Kohl's",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Kohl%27s_logo.svg/2560px-Kohl%27s_logo.svg.png",
          description:
            "Shop for clothes, shoes, home, bedding, jewelry, and more. Find great deals and earn Kohl's Cash.",
          totalOffers: 65,
          categories: ["Apparel", "Home", "Jewelry"],
          affiliateLink: "https://www.kohls.com",
          averageRating: 4.2,
          totalReviews: 85,
        },
        {
          id: "store-12",
          name: "Zappos",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Zappos_logo.svg/2560px-Zappos_logo.svg.png",
          description:
            "The best place to shop for shoes, clothing, and accessories online. Free shipping and returns.",
          totalOffers: 35,
          categories: ["Shoes", "Apparel", "Accessories"],
          affiliateLink: "https://www.zappos.com",
          averageRating: 4.6,
          totalReviews: 95,
        },
        {
          id: "the-body-shop",
          name: "The Body Shop",
          logo: "https://upload.wikimedia.org/wikipedia/commons/d/d2/The_Body_Shop_logo.svg",
          description:
            "The Body Shop International plc is a British cosmetics, skin care and perfume company. It was founded in 1976 by Anita Roddick.",
          totalOffers: 3,
          categories: ["Beauty", "Skincare", "Cosmetics"],
          affiliateLink: "https://www.thebodyshop.com/",
          averageRating: 4.5,
          totalReviews: 128,
          isPopular: true, // Marked as popular
        },
        {
          id: "adobe",
          name: "Adobe",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Adobe_logo.svg/512px-Adobe_logo.svg.png",
          description: "Creative, marketing and document management solutions.",
          totalOffers: 15,
          categories: ["Software", "Design", "Productivity"],
          affiliateLink: "https://www.adobe.com/",
          averageRating: 4.3,
          totalReviews: 70,
        },
        {
          id: "dell",
          name: "Dell",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/2560px-Dell_Logo.svg.png",
          description:
            "Shop for Dell laptops, desktops, servers, workstations, monitors & accessories. Shop deals and learn about Dell products.",
          totalOffers: 22,
          categories: ["Electronics", "Computers", "Tech"],
          affiliateLink: "https://www.dell.com/",
          averageRating: 4.4,
          totalReviews: 110,
        },
        {
          id: "ebay",
          name: "eBay",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1280px-EBay_logo.svg.png",
          description:
            "Buy and sell electronics, cars, fashion apparel, collectibles, sporting goods, digital cameras, baby items, coupons, and everything else on eBay.",
          totalOffers: 75,
          categories: ["Marketplace", "Electronics", "Collectibles"],
          affiliateLink: "https://www.ebay.com/",
          averageRating: 4.0,
          totalReviews: 400,
        },
        {
          id: "fila",
          name: "Fila",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/FILA_logo.svg/2560px-FILA_logo.svg.png",
          description:
            "Shop for Fila shoes, clothing and accessories. Discover the latest fashion trends and classic styles.",
          totalOffers: 10,
          categories: ["Apparel", "Shoes", "Sporting Goods"],
          affiliateLink: "https://www.fila.com/",
          averageRating: 4.1,
          totalReviews: 60,
        },
        {
          id: "gap",
          name: "Gap",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Gap_logo.svg/2560px-Gap_logo.svg.png",
          description:
            "Shop Gap for the latest fashion trends in women's, men's, and kids' clothing. Find your perfect pair of jeans, tops, dresses, and more.",
          totalOffers: 30,
          categories: ["Apparel", "Fashion"],
          affiliateLink: "https://www.gap.com/",
          averageRating: 3.9,
          totalReviews: 80,
        },
      ];

      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
      setStores(dummyBackendStores); // Use dummy data for now
      // --- END: Simulate API Call ---
    } catch (err) {
      console.error("Failed to fetch stores:", err);
      setError("Failed to load stores. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStores(); // Initial fetch on component mount
  }, [fetchStores]);

  // NEW: Memoized list for the A-Z "All Stores" section
  const alphaFilteredStores = useMemo(() => {
    let filtered = stores;

    // Apply A-Z filter
    if (activeLetter !== "All") {
      filtered = filtered.filter((store) =>
        store.name.toLowerCase().startsWith(activeLetter.toLowerCase())
      );
    }

    // Always sort alphabetically by name for this section
    filtered.sort((a, b) => a.name.localeCompare(b.name));

    return filtered;
  }, [stores, activeLetter]);

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center font-sans"
        style={{ backgroundColor: "var(--page-bg)" }}
      >
        <div className="text-center">
          <div
            className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 mx-auto mb-4"
            style={{ borderColor: "var(--primary-orange)" }}
          ></div>
          <p className="text-lg" style={{ color: "var(--text-muted)" }}>
            Loading stores...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="min-h-screen flex items-center justify-center font-sans"
        style={{ backgroundColor: "var(--page-bg)" }}
      >
        <div
          className="text-center p-8 rounded-lg shadow-lg border"
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--error-border)",
          }}
        >
          <p
            className="text-xl font-semibold mb-4"
            style={{ color: "var(--error-text)" }}
          >
            {error}
          </p>
          <button
            onClick={fetchStores}
            className="font-bold py-2 px-4 rounded-md transition-colors duration-200"
            style={{
              backgroundColor: "var(--error-button-bg)",
              color: "var(--neutral-white)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                "var(--error-button-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--error-button-bg)")
            }
          >
            Retry Loading{" "}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="pb-12 font-sans"
      style={{ backgroundColor: "var(--page-bg)" }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6">
          <Link
            to="/"
            className="transition-colors duration-300"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--primary-orange)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            Home{" "}
          </Link>
          <span
            className="mx-2"
            style={{ color: "var(--breadcrumb-separator-color)" }}
          >
            &gt;
          </span>
          <span
            className="font-semibold"
            style={{ color: "var(--main-heading-color)" }}
          >
            All Stores
          </span>
        </nav>

        {/* NEW: A-Z Navigation for All Stores */}
        <section className="mb-10">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-6 text-center"
            style={{ color: "var(--main-heading-color)" }}
          >
            All Stores A-Z
          </h2>
          <div
            className="flex flex-wrap justify-center gap-2 p-4 rounded-lg shadow-md border mb-6"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--card-border)",
            }}
          >
            {["All", ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))].map(
              (letter) => (
                <button
                  key={letter}
                  onClick={() => {
                    setActiveLetter(letter);
                  }}
                  className={`px-3 py-1 rounded-md text-sm font-semibold transition-colors duration-200
                    ${
                      activeLetter === letter
                        ? "text-white"
                        : "hover:text-primary-orange"
                    }`}
                  style={{
                    backgroundColor:
                      activeLetter === letter
                        ? "var(--primary-orange)"
                        : "transparent",
                    color:
                      activeLetter === letter
                        ? "var(--neutral-white)"
                        : "var(--text-default)",
                    border: `1px solid ${
                      activeLetter === letter
                        ? "var(--primary-orange)"
                        : "var(--border-color-light)"
                    }`,
                  }}
                >
                  {letter}
                </button>
              )
            )}
          </div>
        </section>

        {/* Modified: All Stores List (using alphaFilteredStores) */}
        {alphaFilteredStores.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-2 gap-x-4">
            {alphaFilteredStores.map((store) => (
              <Link
                key={store.id}
                to={`/store/${store.name.toLowerCase().replace(/\s/g, "-")}`}
                className="block py-1 px-2 text-sm md:text-base transition-colors duration-200"
                style={{ color: "var(--text-default)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--primary-orange)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-default)")
                }
              >
                {store.name}
              </Link>
            ))}
          </div>
        ) : (
          <div
            className="p-6 sm:p-8 rounded-lg shadow-lg border text-center"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--card-border)",
            }}
          >
            <p className="text-xl" style={{ color: "var(--text-default)" }}>
              No stores found matching your criteria.
            </p>
            <button
              onClick={() => {
                setActiveLetter("All"); // Reset the A-Z filter
              }}
              className="mt-4 inline-block font-bold py-2 px-4 rounded-md transition-colors duration-200"
              style={{
                backgroundColor: "var(--primary-orange)",
                color: "var(--neutral-white)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "var(--button-hover-orange)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--primary-orange)")
              }
            >
              Reset Filters{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreListPage;
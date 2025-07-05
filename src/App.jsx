// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // <-- Yeh line wapis add karni padegi
import HomePage from './components/HomePage';
import Category from './components/Category';
import CategoryPage from './components/CategoryPage';
import StorePage from './components/StorePage';
import StoreListPage from './components/StoreListPage'; // Assuming this is your AllStorePage
import BlogPage from './components/BlogPage';
import SingleBlogPage from './components/SingleBlogPage';
import BlogCategoryPage from './components/BlogCategoryPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router> {/* <-- Router wrap karna padega */}
      <Header />
      <main>
        <Routes> {/* <-- Routes wrap karna padega */}
          <Route path="/" element={<HomePage />} />
          <Route path="/stores" element={<StoreListPage />} /> {/* For All Stores */}
          <Route path="/stores/:slug" element={<StorePage />} /> {/* For a single store, :slug dynamic parameter hai */}
          <Route path="/categories" element={<Category />} /> {/* For a single category */}
          <Route path="/categories/:slug" element={<CategoryPage />} /> {/* For a single category */}
          <Route path="/blog" element={<BlogPage />} /> {/* For all blogs */}
          <Route path="/blog/category/:slug" element={<BlogCategoryPage />} /> {/* For blog category */}
          <Route path="/blog/:slug" element={<SingleBlogPage />} /> {/* For a single blog post */}
          {/* ... Add more routes as needed ... */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
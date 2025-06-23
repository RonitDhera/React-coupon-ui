// src/App.jsx (Example)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import StorePage from './components/StorePage';
import StoreListPage from './components/StoreListPage';
import BlogPage from './components/BlogPage';         // New
import SingleBlogPage from './components/SingleBlogPage'; // New
import BlogCategoryPage from './components/BlogCategoryPage'; // New
import Header from './components/Header'; // Assuming you have a Header component
import Footer from './components/Footer'; // Assuming you have a Footer component

function App() {
  return (
    <Router>
      <Header /> {/* Your navigation header */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/store/" element={<StoreListPage />} />
          <Route path="/store/:storeName" element={<StorePage />} />
          {/* Blog Routes */}
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blog/:id" element={<SingleBlogPage />} />
          <Route path="/blog/category/:categorySlug" element={<BlogCategoryPage />} />
          {/* Add other routes like /stores, /categories if they are standalone pages */}
        </Routes>
      </main>
      <Footer /> {/* Your footer */}
    </Router>
  );
}

export default App;
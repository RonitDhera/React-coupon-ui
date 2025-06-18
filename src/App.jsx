import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// IMPORTS: Common Components
// Ab Header aur Footer ko yahan se import karein ge
import Header from './components/Header';
import Footer from './components/Footer';

// IMPORTS: Page Components
// HomePage ko bhi yahan se import karein ge
import HomePage from './components/HomePage';
// Abhi CategoryPage aur StorePage ke components banaaye nahi hain,
// toh unko abhi comment out rakhte hain ya placeholder use karein ge.
// Jab ban jaayein ge, tab uncomment kar dena.
import CategoryPage from './components/CategoryPage'; // Jab banao ge tab uncomment karna
import StorePage from './components/StorePage';     // Jab banao ge tab uncomment karna


function App() {
  return (
    <Router>
      {/* Yeh div poori app ko vertical flex container banata hai */}
      {/* taki header top par, footer bottom par aur content beech mein adjust ho */}
      <div className="flex flex-col min-h-screen">
        {/* Header component ko render kar rahe hain */}
        <Header />

        {/* 'main' tag page ke main content area ke liye hota hai */}
        {/* 'flex-grow' class isko available space lene deti hai */}
        <main className="flex-grow">
          {/* Routes component URLs ko components se map karta hai */}
          <Routes>
            {/* Jab URL '/' ho, toh HomePage component render hoga */}
            <Route path="/" element={<HomePage />} />

            {/* Jab URL '/category/kuchBhi' ho, toh CategoryPage component render hoga */}
            {/* ':categoryName' batata hai ke yeh URL ka dynamic part hai */}
            <Route path="/category/:categoryName" element={<CategoryPage />} />

            {/* Jab URL '/store/kuchBhi' ho, toh StorePage component render hoga */}
            <Route path="/store/:storeName" element={<StorePage />} />

            {/* Agar future mein aur pages banane hon, toh yahan aur <Route> add kar sakte ho */}
          </Routes>
        </main>

        {/* Footer component ko render kar rahe hain */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
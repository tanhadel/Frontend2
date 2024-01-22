// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import OrderConfirmationPage from './components/OrderConfirmationPage';
import ContactPage from './components/ContactPage';
import CompanyPage from './CompanyPage';
import React, { useState } from 'react';
import CheckoutComponent from './CheckoutComponent';
import ProductList from './ProductList';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './components/CheckoutForm';

import {AppContainer} from '.Styled-Components/Container.styeld'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/categories/:categoryId" component={CategoryPage} />
                <Route path="/products/:productId" component={ProductPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/checkout" component={CheckoutPage} />
                <Route path="/order-confirmation" component={OrderConfirmationPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/company" component={CompanyPage} />
            </Switch>
        </Router>
    );
}



const App = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);

    // Funktion för att lägga till produkter till varukorgen
    const handleAddToCart = (product) => {
        setSelectedProducts((prevProducts) => [...prevProducts, product]);
    };

    return (
        <div>
            <h1>Min React App</h1>
            {/* Använd ProductList där du vill visa produkter */}
            <ProductList categoryId={123} />
            {/* Implementera även produktkomponenten och andra relevanta komponenter här */}

            {/* Visa CheckoutComponent när användaren är klar att checka ut */}

            {selectedProducts.length > 0 && (
                <CheckoutComponent selectedProducts={selectedProducts} />
            )}

        </div>
    );
};

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

const App = () => {
    return (
        <div>
            <h1>Min React App</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};


export default App;



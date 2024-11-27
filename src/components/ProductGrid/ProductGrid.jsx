import React from "react";
import './ProductGrid.css'

const products = [
    {
        id: 1,
        name: "boAt Airdopes Alpha with 35 HRS Playback",
        color: "Jet Black",
        rating: 3.9,
        reviews: "418,522",
        price: 799,
        originalPrice: 3490,
        discount: "77% off",
        image: "/src/assets/p1.webp", 
        sponsored: true,
        assured: true,
        bankOffer: true,
    },
    {
        id: 2,
        name: "Mivi DuoPods K2 TWS, AI-ENC, 40Hr Playback",
        color: "Mint Green",
        rating: 3.9,
        reviews: "78,173",
        price: 799,
        originalPrice: 2999,
        discount: "73% off",
        image: "/src/assets/p1.webp", 
        sponsored: true,
        assured: false,
        bankOffer: true,
    },
    {
        id: 3,
        name: "boAt Airdopes Alpha with 35 HRS Playback",
        color: "Dark Cyan",
        rating: 3.9,
        reviews: "418,522",
        price: 899,
        originalPrice: 3490,
        discount: "74% off",
        image: "/src/assets/p1.webp", 
        sponsored: false,
        assured: true,
        bankOffer: true,
    },
    {
        id: 4,
        name: "boAt Airdopes 161, Adv 4Mic ENx, 50H Battery",
        color: "Carbon Black",
        rating: 3.9,
        reviews: "13,214",
        price: 1099,
        originalPrice: 2990,
        discount: "63% off",
        image: "/src/assets/p1.webp", 
        sponsored: false,
        assured: true,
        bankOffer: true,
    },
    {
        id: 4,
        name: "boAt Airdopes 161, Adv 4Mic ENx, 50H Battery",
        color: "Carbon Black",
        rating: 3.9,
        reviews: "13,214",
        price: 1099,
        originalPrice: 2990,
        discount: "63% off",
        image: "/src/assets/p1.webp", 
        sponsored: false,
        assured: true,
        bankOffer: true,
    },
    {
        id: 4,
        name: "boAt Airdopes 161, Adv 4Mic ENx, 50H Battery",
        color: "Carbon Black",
        rating: 3.9,
        reviews: "13,214",
        price: 1099,
        originalPrice: 2990,
        discount: "63% off",
        image: "/src/assets/p1.webp", 
        sponsored: false,
        assured: true,
        bankOffer: true,
    },
    {
        id: 4,
        name: "boAt Airdopes 161, Adv 4Mic ENx, 50H Battery",
        color: "Carbon Black",
        rating: 3.9,
        reviews: "13,214",
        price: 1099,
        originalPrice: 2990,
        discount: "63% off",
        image: "/src/assets/p1.webp", 
        sponsored: false,
        assured: true,
        bankOffer: true,
    },
    {
        id: 4,
        name: "boAt Airdopes 161, Adv 4Mic ENx, 50H Battery",
        color: "Carbon Black",
        rating: 3.9,
        reviews: "13,214",
        price: 1099,
        originalPrice: 2990,
        discount: "63% off",
        image: "/src/assets/p1.webp",
        sponsored: false,
        assured: true,
        bankOffer: true,
    },
    {
        id: 4,
        name: "boAt Airdopes 161, Adv 4Mic ENx, 50H Battery",
        color: "Carbon Black",
        rating: 3.9,
        reviews: "13,214",
        price: 1099,
        originalPrice: 2990,
        discount: "63% off",
        image: "/src/assets/p1.webp", 
        sponsored: false,
        assured: true,
        bankOffer: true,
    },
    {
        id: 4,
        name: "boAt Airdopes 161, Adv 4Mic ENx, 50H Battery",
        color: "Carbon Black",
        rating: 3.9,
        reviews: "13,214",
        price: 1099,
        originalPrice: 2990,
        discount: "63% off",
        image: "/src/assets/p1.webp", 
        sponsored: false,
        assured: true,
        bankOffer: true,
    }
];

const ProductGrid = () => {
    return (
        <div className="product-grid">
            <div className="sort-bar">
                <span>Sort By:</span>
                <button>Popularity</button>
                <button>Price -- Low to High</button>
                <button>Price -- High to Low</button>
                <button>Newest First</button>
                <button>Discount</button>
            </div>

            <div className="products">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        {product.sponsored && <p className="sponsored">Sponsored</p>}
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p className="color">{product.color}</p>
                        <p className="rating">
                            <span>{product.rating} ★</span> ({product.reviews})
                        </p>
                        <p className="price">
                            ₹{product.price} <span className="original-price">₹{product.originalPrice}</span>{" "}
                            <span className="discount">{product.discount}</span>
                        </p>
                        {product.assured && <p className="assured">✔ Assured</p>}
                        {product.bankOffer && <p className="bank-offer">Bank Offer</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;

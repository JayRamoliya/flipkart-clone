import React, { useState } from "react";
import './FilterSidebar.css'

const FilterSidebar = () => {
    const [isCustomerRatingsOpen, setIsCustomerRatingsOpen] = useState(false);
    const [isOffersOpen, setIsOffersOpen] = useState(false);

    const [ratings, setRatings] = useState({
        "4 Stars & Above": true,
        "3 Stars & Above": true,
        "2 Stars & Above": false,
        "1 Star & Above": false,
    });

    const [offers, setOffers] = useState({
        "Buy More, Save More": true,
        "Special Price": false,
    });

    const handleRatingChange = (rating) => {
        setRatings((prev) => ({
            ...prev,
            [rating]: !prev[rating],
        }));
    };

    const handleOfferChange = (offer) => {
        setOffers((prev) => ({
            ...prev,
            [offer]: !prev[offer],
        }));
    };

    return (
        <div className="filter-sidebar">
            <div className="filter-section">
                <div
                    className="filter-header"
                    onClick={() => setIsCustomerRatingsOpen(!isCustomerRatingsOpen)}
                >
                    <h4>Customer Ratings</h4>
                    <span>{isCustomerRatingsOpen ? "-" : "+"}</span>
                </div>
                {isCustomerRatingsOpen && (
                    <div className="filter-options">
                        {Object.keys(ratings).map((rating) => (
                            <label key={rating} className="filter-option">
                                <input
                                    type="checkbox"
                                    checked={ratings[rating]}
                                    onChange={() => handleRatingChange(rating)}
                                />
                                {rating}
                            </label>
                        ))}
                    </div>
                )}
            </div>

            <div className="filter-section">
                <div
                    className="filter-header"
                    onClick={() => setIsOffersOpen(!isOffersOpen)}
                >
                    <h4>Offers</h4>
                    <span>{isOffersOpen ? "-" : "+"}</span>
                </div>
                {isOffersOpen && (
                    <div className="filter-options">
                        {Object.keys(offers).map((offer) => (
                            <label key={offer} className="filter-option">
                                <input
                                    type="checkbox"
                                    checked={offers[offer]}
                                    onChange={() => handleOfferChange(offer)}
                                />
                                {offer}
                            </label>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FilterSidebar;

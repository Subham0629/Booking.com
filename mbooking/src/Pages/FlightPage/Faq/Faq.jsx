import React from 'react';
import "./Faq.css";

const Faq = () => {
  return (
    <div className='mainfaq'>
        <h2>Frequently asked questions</h2>
        <div className='faqq'>
            <div className='faqq1'>
                <h3>How do I find the cheapest flights on Booking.com?</h3>
                <p>You can sort flights by price to see them from cheapest to most expensive. To find the cheapest flights, you also need to consider factors like when you're booking and want to travel.</p>
            </div>
            <div className='faqq1'>
                <h3>Can I book one-way flights on Booking.com?</h3>
                <p>Yes, you can book one-way, round-trip, and multi-city flights on our site.</p>
            </div>
            <div className='faqq1'>
                <h3>How far in advance can I book a flight?</h3>
                <p>You can book a flight up to one year before your departure date.</p>
            </div>
            <div className='faqq1'>
                <h3>Do flights get cheaper closer to departure?</h3>
                <p>Generally, flight prices are more likely to increase the closer you get to your flight date.</p>
            </div>
            <div className='faqq1'>
                <h3>What is a flexible ticket?</h3>
                <p>A flexible ticket allows you to change your flight with the same airline by only paying the fare and tax difference. It can only be used for one confirmed change. You can add the flexible ticket when booking your flight.</p>
            </div>
            <div className='faqq1'>
                <h3>Does Booking.com charge credit card fees?</h3>
                <p>No, we don't charge any credit card fees. You can always see exactly what you’re paying for in the price breakdown when reviewing your booking.</p>
            </div>
        </div>
    </div>
  )
}

export default Faq
import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <div className="serviceCards">
            <div className="serviceCard">
                <div className="serviceCardTitle">
                    In Home
                </div>
                <div className="serviceCardContent">
                    <ul>
                        <li>Remodeling:</li>
                        <ul>
                            <li>Full / New Home</li>
                            <li>One Room Only</li>
                        </ul>
                        <li>New Instalations: </li>
                        <ul>
                            <li>Water Heaters</li>
                            <li>Bathtubs</li>
                            <li>Sinks</li>
                            <li>Toilets</li>
                            <li>Showers</li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className="serviceCard">
                <div className="serviceCardTitle">
                    Outdoors
                </div>
                <div className="serviceCardContent">
                    <ul>
                        <li>Water Features: </li>
                        <ul>
                            <li>Pools</li>
                            <li>Hot Tubs</li>
                            <li>Foutains</li>
                            <li>Ponds</li>
                            <li>Sprinklers</li>
                        </ul>
                        <li>Waterline Repairs</li>
                        <li>Septic Tank: </li>
                        <ul>
                            <li>Installation</li>
                            <li>Maintenance</li>
                            <li>Repair</li>
                            <li>Replacement</li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className="serviceCard">
                <div className="serviceCardTitle">
                    Emergency
                </div>
                <div className="serviceCardContent">
                    <ul>
                        <li>Burst Pipes</li>
                        <li>Clogged Drains</li>
                        <li>Water Heater Ruptures </li>
                        <li>Pools Leaks</li>
                        <li>Cold Hot Tubs</li>
                        <li>Industrial Leaks</li>
                        <li>Geysers</li>
                        <li>Septic Tank Complications</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Services
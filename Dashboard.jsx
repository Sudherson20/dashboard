import React from 'react';
import StatsCard from './StatsCard';
import SalesChart from './SalesChart';
import TopCategories from './TopCategories';
import StockNumbers from './StockNumbers';
import StoreList from './StoreList';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1></h1>
      <div className="stats-container">
        <StatsCard title="New Items" quantity="741" />
        <StatsCard title="New Orders" quantity="123" />
        <StatsCard title="Refunds" quantity="12" />
        <StatsCard title="Message" quantity="1" />
        <StatsCard title="Groups" quantity="4" />
      </div>
      <div className="sales-area">
        <SalesChart /> {/* Integrate the bar chart here */}
      </div>
      <div className="bottom-section">
        <TopCategories />
        <StockNumbers />
        <StoreList />
      </div>
    </div>
  );
}

export default Dashboard;

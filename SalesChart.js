import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Confirmed', sales: 200 },
  { name: 'Packed', sales: 150 },
  { name: 'Refunded', sales: 50 },
  { name: 'Shipped', sales: 300 },
];

function SalesChart() {
  return (
    <div className="sales-chart">
      <h2>Sales</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#6b2de8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;

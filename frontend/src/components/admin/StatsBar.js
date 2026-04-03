import React from 'react';
import { Calendar, CheckCircle, Clock, TrendingUp } from 'lucide-react';

const StatsBar = ({ stats }) => {
  if (!stats) return null;

  const revenue = `€${(stats.total_revenue_cents / 100).toFixed(2)}`;

  const items = [
    { icon: Calendar, label: 'Total bookings', value: stats.total_bookings, color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: CheckCircle, label: 'Confirmed', value: stats.confirmed_bookings, color: 'text-green-600', bg: 'bg-green-50' },
    { icon: Clock, label: 'Today', value: stats.upcoming_today, color: 'text-purple-600', bg: 'bg-purple-50' },
    { icon: TrendingUp, label: 'Revenue (month)', value: revenue, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {items.map(({ icon: Icon, label, value, color, bg }) => (
        <div key={label} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-4">
          <div className={`${bg} p-3 rounded-xl flex-shrink-0`}>
            <Icon className={`w-5 h-5 ${color}`} />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">{label}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;

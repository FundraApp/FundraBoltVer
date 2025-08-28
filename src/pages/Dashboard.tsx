import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, 
  ArrowUpDown, 
  BarChart3, 
  Settings, 
  LogOut,
  CreditCard,
  Plus,
  Send,
  Wallet,
  TrendingUp,
  ArrowUpRight,
  ArrowDownLeft,
  Menu,
  X
} from 'lucide-react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token == "" || token == "Bearer ") {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    navigate('/');
  };

  const transactions = [
    {
      id: 1,
      merchant: "Spotify Premium",
      amount: -12.99,
      date: "Today, 2:30 PM",
      category: "Entertainment",
      icon: "🎵"
    },
    {
      id: 2,
      merchant: "Salary Deposit",
      amount: 3500.00,
      date: "Yesterday, 9:00 AM",
      category: "Income",
      icon: "💰"
    },
    {
      id: 3,
      merchant: "Grocery Store",
      amount: -89.47,
      date: "Dec 28, 2024",
      category: "Food",
      icon: "🛒"
    },
    {
      id: 4,
      merchant: "Transfer to John",
      amount: -150.00,
      date: "Dec 27, 2024",
      category: "Transfer",
      icon: "👤"
    },
    {
      id: 5,
      merchant: "Netflix",
      amount: -15.99,
      date: "Dec 26, 2024",
      category: "Entertainment",
      icon: "📺"
    }
  ];

  const monthlyData = [
    { month: 'Jul', amount: 2400 },
    { month: 'Aug', amount: 2800 },
    { month: 'Sep', amount: 3200 },
    { month: 'Oct', amount: 2600 },
    { month: 'Nov', amount: 3800 },
    { month: 'Dec', amount: 4200 },
  ];

  const Sidebar = () => (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out lg:static lg:inset-0`}>
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Fundra
          </span>
        </div>
        <button 
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden p-2 text-slate-400 hover:text-slate-600"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <nav className="flex-1 p-6">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-cyan-600 bg-cyan-50 rounded-xl font-medium">
              <Home className="w-5 h-5" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors">
              <ArrowUpDown className="w-5 h-5" />
              <span>Transactions</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors">
              <BarChart3 className="w-5 h-5" />
              <span>Analytics</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
      
      <div className="p-6 border-t border-gray-200">
        <button 
          onClick={handleLogout}
          className="flex items-center space-x-3 px-4 py-3 w-full text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white shadow-sm p-4 flex items-center justify-between">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-slate-600 hover:text-slate-900"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Fundra</span>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Good morning, Alex!</h1>
              <p className="text-slate-600">Here's what's happening with your money today.</p>
            </div>

            {/* Balance Card */}
            <div className="bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl p-8 text-white mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full transform -translate-x-12 translate-y-12"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-cyan-100 text-sm font-medium">Total Balance</p>
                    <h2 className="text-4xl font-bold">€12,540.00</h2>
                  </div>
                  <Wallet className="w-8 h-8 text-cyan-200" />
                </div>
                
                <div className="flex items-center space-x-4">
                  <button className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-opacity-30 transition-all flex items-center space-x-2">
                    <Send className="w-4 h-4" />
                    <span>Send</span>
                  </button>
                  <button className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-opacity-30 transition-all flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Add Money</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Transactions */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-slate-900">Recent Transactions</h3>
                    <a href="#" className="text-cyan-600 hover:text-cyan-700 text-sm font-medium">View all</a>
                  </div>
                  
                  <div className="space-y-4">
                    {transactions.map((transaction) => (
                      <div key={transaction.id} className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-xl">
                          {transaction.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-slate-900">{transaction.merchant}</p>
                          <p className="text-sm text-slate-500">{transaction.date}</p>
                        </div>
                        <div className="text-right">
                          <p className={`font-bold ${transaction.amount >= 0 ? 'text-green-600' : 'text-slate-900'}`}>
                            {transaction.amount >= 0 ? '+' : ''}€{Math.abs(transaction.amount).toFixed(2)}
                          </p>
                          <p className="text-sm text-slate-500">{transaction.category}</p>
                        </div>
                        {transaction.amount >= 0 ? (
                          <ArrowDownLeft className="w-5 h-5 text-green-500" />
                        ) : (
                          <ArrowUpRight className="w-5 h-5 text-slate-400" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="space-y-6">
                {/* Quick Stats */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">This Month</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-slate-600 text-sm">Income</span>
                      </div>
                      <span className="font-semibold text-slate-900">€4,200.00</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-slate-600 text-sm">Expenses</span>
                      </div>
                      <span className="font-semibold text-slate-900">€2,180.50</span>
                    </div>
                    
                    <div className="pt-2 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600 text-sm">Net Income</span>
                        <span className="font-bold text-green-600">+€2,019.50</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Monthly Spending Chart */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-slate-900">Monthly Spending</h3>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  
                  <div className="space-y-3">
                    {monthlyData.map((data, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <span className="text-sm text-slate-500 w-8">{data.month}</span>
                        <div className="flex-1 bg-gray-100 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-cyan-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(data.amount / 5000) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-slate-700">€{data.amount}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-4 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl">
                    <p className="text-sm text-slate-600">
                      <span className="font-semibold text-green-600">+18%</span> increase from last month
                    </p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <button className="p-4 bg-gradient-to-br from-cyan-50 to-teal-50 hover:from-cyan-100 hover:to-teal-100 rounded-xl transition-colors text-left">
                      <Send className="w-6 h-6 text-cyan-600 mb-2" />
                      <p className="text-sm font-medium text-slate-700">Send Money</p>
                    </button>
                    
                    <button className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 rounded-xl transition-colors text-left">
                      <Plus className="w-6 h-6 text-purple-600 mb-2" />
                      <p className="text-sm font-medium text-slate-700">Add Funds</p>
                    </button>
                    
                    <button className="p-4 bg-gradient-to-br from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 rounded-xl transition-colors text-left">
                      <BarChart3 className="w-6 h-6 text-orange-600 mb-2" />
                      <p className="text-sm font-medium text-slate-700">View Reports</p>
                    </button>
                    
                    <button className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-xl transition-colors text-left">
                      <Settings className="w-6 h-6 text-green-600 mb-2" />
                      <p className="text-sm font-medium text-slate-700">Settings</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
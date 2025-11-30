import React, { useState, useEffect } from 'react';
import { adminAPI } from '../../services/api';
import { Plus, Edit, Trash2, Loader, AlertCircle, CheckCircle } from 'lucide-react';
import PortfolioForm from '../../Components/admin/PortfolioForm';

const PortfolioManagement = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const response = await adminAPI.getAllPortfolio();
      setPortfolio(response.portfolio || []);
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingItem(null);
    setShowForm(true);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this portfolio item?')) {
      return;
    }

    try {
      await adminAPI.deletePortfolio(id);
      setMessage({ type: 'success', text: 'Portfolio item deleted successfully' });
      fetchPortfolio();
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    }
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingItem(null);
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setEditingItem(null);
    setMessage({ type: 'success', text: editingItem ? 'Portfolio updated successfully' : 'Portfolio created successfully' });
    fetchPortfolio();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader className="w-8 h-8 text-blue-400 animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Portfolio Management</h1>
          <p className="text-gray-400">Manage your portfolio projects</p>
        </div>
        <button
          onClick={handleCreate}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
        >
          <Plus className="w-5 h-5" />
          Add Portfolio Item
        </button>
      </div>

      {message.text && (
        <div
          className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
            message.type === 'success'
              ? 'bg-green-500/20 border border-green-500/50'
              : 'bg-red-500/20 border border-red-500/50'
          }`}
        >
          {message.type === 'success' ? (
            <CheckCircle className="w-5 h-5 text-green-400" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-400" />
          )}
          <p className={message.type === 'success' ? 'text-green-400' : 'text-red-400'}>
            {message.text}
          </p>
        </div>
      )}

      {showForm && (
        <PortfolioForm
          portfolio={editingItem}
          onClose={handleFormClose}
          onSuccess={handleFormSuccess}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolio.map((item) => (
          <div
            key={item._id}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.tagline}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 rounded-lg transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 bg-slate-800 rounded-lg text-xs text-gray-300">
                  {item.category}
                </span>
                <span className="px-3 py-1 bg-slate-800 rounded-lg text-xs text-gray-300">
                  {item.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {portfolio.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No portfolio items found. Create your first portfolio item!</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioManagement;


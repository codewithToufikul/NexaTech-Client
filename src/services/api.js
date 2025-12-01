const API_BASE_URL ='https://nexatech-server-78kb.onrender.com/api';

// Helper function to get auth token
const getAuthToken = () => {
  return localStorage.getItem('adminToken');
};

// Helper function to make API requests
const apiRequest = async (endpoint, options = {}) => {
  const token = getAuthToken();
  
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Request failed');
  }

  return data;
};

// Auth API
export const authAPI = {
  login: async (email, password) => {
    return apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },
  
  getCurrentUser: async () => {
    return apiRequest('/auth/me');
  },
};

// Public API
export const publicAPI = {
  getServices: async () => {
    return apiRequest('/public/services');
  },
  
  getService: async (id) => {
    return apiRequest(`/public/services/${id}`);
  },
  
  getPortfolio: async () => {
    return apiRequest('/public/portfolio');
  },
  
  getPortfolioItem: async (id) => {
    return apiRequest(`/public/portfolio/${id}`);
  },
  
  submitContact: async (contactData) => {
    return apiRequest('/public/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
    });
  },
};

// Admin API
export const adminAPI = {
  // Services
  getAllServices: async () => {
    return apiRequest('/admin/services');
  },
  
  getService: async (id) => {
    return apiRequest(`/admin/services/${id}`);
  },
  
  createService: async (serviceData) => {
    return apiRequest('/admin/services', {
      method: 'POST',
      body: JSON.stringify(serviceData),
    });
  },
  
  updateService: async (id, serviceData) => {
    return apiRequest(`/admin/services/${id}`, {
      method: 'PUT',
      body: JSON.stringify(serviceData),
    });
  },
  
  deleteService: async (id) => {
    return apiRequest(`/admin/services/${id}`, {
      method: 'DELETE',
    });
  },
  
  // Portfolio
  getAllPortfolio: async () => {
    return apiRequest('/admin/portfolio');
  },
  
  getPortfolio: async (id) => {
    return apiRequest(`/admin/portfolio/${id}`);
  },
  
  createPortfolio: async (portfolioData) => {
    return apiRequest('/admin/portfolio', {
      method: 'POST',
      body: JSON.stringify(portfolioData),
    });
  },
  
  updatePortfolio: async (id, portfolioData) => {
    return apiRequest(`/admin/portfolio/${id}`, {
      method: 'PUT',
      body: JSON.stringify(portfolioData),
    });
  },
  
  deletePortfolio: async (id) => {
    return apiRequest(`/admin/portfolio/${id}`, {
      method: 'DELETE',
    });
  },
  
  // Contacts
  getAllContacts: async () => {
    return apiRequest('/admin/contacts');
  },
  
  getContact: async (id) => {
    return apiRequest(`/admin/contacts/${id}`);
  },
  
  updateContactStatus: async (id, status) => {
    return apiRequest(`/admin/contacts/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  },
  
  deleteContact: async (id) => {
    return apiRequest(`/admin/contacts/${id}`, {
      method: 'DELETE',
    });
  },
};


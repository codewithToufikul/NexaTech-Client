import React, { useState, useEffect } from 'react';
import { adminAPI } from '../../services/api';
import { X, Loader, Upload, Image as ImageIcon, ExternalLink } from 'lucide-react';
import imageCompression from 'browser-image-compression';

const PortfolioForm = ({ portfolio, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    tagline: '',
    category: 'Web Development',
    image: '',
    color: 'blue',
    description: '',
    fullDescription: '',
    technologies: [],
    features: [],
    results: [],
    client: '',
    duration: '',
    status: 'Live',
    liveLink: '',
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState({});
  
  // Category options
  const categories = [
    'Web Development',
    'Mobile App',
    'Networking',
    'AI/ML',
    'UI/UX Design',
    'AutoCAD Engineering',
    'Other'
  ];

  useEffect(() => {
    if (portfolio) {
      setFormData({
        id: portfolio.id || '',
        title: portfolio.title || '',
        tagline: portfolio.tagline || '',
        category: portfolio.category || 'Web Development',
        image: portfolio.image || '',
        color: portfolio.color || 'blue',
        description: portfolio.description || '',
        fullDescription: portfolio.fullDescription || '',
        technologies: portfolio.technologies || [],
        features: portfolio.features || [],
        results: portfolio.results || [],
        client: portfolio.client || '',
        duration: portfolio.duration || '',
        status: portfolio.status || 'Live',
        liveLink: portfolio.liveLink || '',
      });
    }
  }, [portfolio]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleArrayChange = (field, value) => {
    // Support both comma and newline separation
    const items = value
      .split(/[,\n]/)
      .map(item => item.trim())
      .filter((item) => item.length > 0);
    setFormData((prev) => ({ ...prev, [field]: items }));
  };

  // ImgBB API Key - You need to get this from https://api.imgbb.com/
  const IMGBB_API_KEY = import.meta.env.VITE_IMGBB_API_KEY || '';

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setErrors({ image: 'Please select an image file' });
      return;
    }

    setUploading(true);
    setErrors({ image: '' });

    try {
      // Image compression options
      const options = {
        maxSizeMB: 1, // Maximum size in MB (1MB)
        maxWidthOrHeight: 1920, // Maximum width or height
        useWebWorker: true, // Use web worker for better performance
        fileType: 'image/webp', // Convert to WebP format
        initialQuality: 0.8, // Initial quality (0-1)
      };

      // Compress and convert to WebP
      const compressedFile = await imageCompression(file, options);
      
      console.log('Original size:', (file.size / 1024 / 1024).toFixed(2), 'MB');
      console.log('Compressed size:', (compressedFile.size / 1024 / 1024).toFixed(2), 'MB');
      console.log('Compression ratio:', ((1 - compressedFile.size / file.size) * 100).toFixed(2), '%');

      // Upload compressed image to ImgBB
      const formData = new FormData();
      formData.append('image', compressedFile);

      const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormData((prev) => ({ ...prev, image: data.data.url }));
      } else {
        throw new Error(data.error?.message || 'Upload failed');
      }
    } catch (error) {
      console.error('Image upload error:', error);
      setErrors({ image: error.message || 'Failed to upload image. Please try again.' });
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      if (portfolio) {
        await adminAPI.updatePortfolio(portfolio.id, formData);
      } else {
        await adminAPI.createPortfolio(formData);
      }
      onSuccess();
    } catch (error) {
      setErrors({ submit: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-slate-900 border-b border-slate-800 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            {portfolio ? 'Edit Portfolio Item' : 'Create New Portfolio Item'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Portfolio ID *
              </label>
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
                required
                disabled={!!portfolio}
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none disabled:opacity-50"
                placeholder="ecommerce-platform"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tagline *
              </label>
              <input
                type="text"
                name="tagline"
                value={formData.tagline}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Status *
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="Live">Live</option>
                <option value="Development">Development</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Project Image *
              </label>
              
              {/* Image Upload via ImgBB */}
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <label className="flex-1 cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={uploading}
                      className="hidden"
                    />
                    <div className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 transition-colors disabled:opacity-50">
                      {uploading ? (
                        <>
                          <Loader className="w-5 h-5 text-blue-400 animate-spin" />
                          <span className="text-gray-300">Uploading...</span>
                        </>
                      ) : (
                        <>
                          <Upload className="w-5 h-5 text-blue-400" />
                          <span className="text-gray-300">Upload Image</span>
                        </>
                      )}
                    </div>
                  </label>
                  
                  {formData.image && (
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-slate-700">
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
                
                {errors.image && (
                  <p className="text-red-400 text-sm">{errors.image}</p>
                )}
                
                {/* Manual URL input as fallback */}
                <div>
                  <p className="text-xs text-gray-400 mb-2">Or enter image URL manually:</p>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="https://..."
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none text-sm"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Color *
              </label>
              <select
                name="color"
                value={formData.color}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="blue">Blue</option>
                <option value="teal">Teal</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="pink">Pink</option>
                <option value="purple">Purple</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Client *
              </label>
              <input
                type="text"
                name="client"
                value={formData.client}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Duration *
              </label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                placeholder="4 months"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <ExternalLink className="w-4 h-4 inline mr-2" />
                Live Project Link (Optional)
              </label>
              <input
                type="url"
                name="liveLink"
                value={formData.liveLink}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                placeholder="https://example.com"
              />
              <p className="text-xs text-gray-400 mt-1">Link to the live project/demo</p>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="3"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Description *
              </label>
              <textarea
                name="fullDescription"
                value={formData.fullDescription}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Technologies (comma separated)
              </label>
              <input
                type="text"
                value={formData.technologies.join(', ')}
                onChange={(e) => handleArrayChange('technologies', e.target.value)}
                placeholder="React, Node.js, MongoDB, Tailwind CSS"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              />
              <p className="text-xs text-gray-400 mt-1">Separate multiple items with commas</p>
              {formData.technologies.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {formData.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Features (comma separated)
              </label>
              <input
                type="text"
                value={formData.features.join(', ')}
                onChange={(e) => handleArrayChange('features', e.target.value)}
                placeholder="Responsive Design, User Authentication, Payment Integration"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              />
              <p className="text-xs text-gray-400 mt-1">Separate multiple items with commas</p>
              {formData.features.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {formData.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Results (one per line)
              </label>
              <textarea
                value={formData.results.join('\n')}
                onChange={(e) => handleArrayChange('results', e.target.value)}
                rows="4"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {errors.submit && (
            <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
              {errors.submit}
            </div>
          )}

          <div className="flex gap-4 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-slate-700 text-gray-300 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 flex items-center gap-2"
            >
              {loading && <Loader className="w-4 h-4 animate-spin" />}
              {portfolio ? 'Update Portfolio' : 'Create Portfolio'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PortfolioForm;


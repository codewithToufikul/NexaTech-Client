import React, { useState, useEffect } from 'react';
import { adminAPI } from '../../services/api';
import { Mail, Trash2, Loader, CheckCircle, Eye, EyeOff } from 'lucide-react';

const ContactsManagement = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await adminAPI.getAllContacts();
      setContacts(response.contacts || []);
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id, status) => {
    try {
      await adminAPI.updateContactStatus(id, status);
      fetchContacts();
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) {
      return;
    }

    try {
      await adminAPI.deleteContact(id);
      fetchContacts();
    } catch (error) {
      console.error('Failed to delete contact:', error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'new':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'read':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'replied':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
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
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Contacts Management</h1>
        <p className="text-gray-400">Manage contact form submissions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contacts List */}
        <div className="lg:col-span-2 space-y-4">
          {contacts.map((contact) => (
            <div
              key={contact._id}
              className={`bg-slate-900/50 backdrop-blur-sm border rounded-xl p-6 transition-all ${
                selectedContact?._id === contact._id
                  ? 'border-blue-500'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-white">{contact.name}</h3>
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-medium border ${getStatusColor(
                        contact.status
                      )}`}
                    >
                      {contact.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{contact.email}</p>
                  {contact.phone && (
                    <p className="text-gray-400 text-sm">{contact.phone}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      setSelectedContact(
                        selectedContact?._id === contact._id ? null : contact
                      )
                    }
                    className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 rounded-lg transition-colors"
                  >
                    {selectedContact?._id === contact._id ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={() => handleDelete(contact._id)}
                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {contact.subject && (
                <p className="text-gray-300 mb-2">
                  <span className="font-medium">Subject:</span> {contact.subject}
                </p>
              )}

              {contact.service && (
                <p className="text-gray-300 mb-2">
                  <span className="font-medium">Service:</span> {contact.service}
                </p>
              )}

              {selectedContact?._id === contact._id && (
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <p className="text-gray-300 whitespace-pre-wrap">{contact.message}</p>
                  <div className="mt-4 flex gap-2">
                    {contact.status !== 'new' && (
                      <button
                        onClick={() => handleStatusUpdate(contact._id, 'new')}
                        className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors text-sm"
                      >
                        Mark as New
                      </button>
                    )}
                    {contact.status !== 'read' && (
                      <button
                        onClick={() => handleStatusUpdate(contact._id, 'read')}
                        className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30 transition-colors text-sm"
                      >
                        Mark as Read
                      </button>
                    )}
                    {contact.status !== 'replied' && (
                      <button
                        onClick={() => handleStatusUpdate(contact._id, 'replied')}
                        className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors text-sm"
                      >
                        Mark as Replied
                      </button>
                    )}
                  </div>
                </div>
              )}

              <div className="mt-4 text-xs text-gray-500">
                {new Date(contact.createdAt).toLocaleString()}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Sidebar */}
        <div className="space-y-6">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-4">Statistics</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Total</span>
                <span className="text-white font-semibold">{contacts.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">New</span>
                <span className="text-blue-400 font-semibold">
                  {contacts.filter((c) => c.status === 'new').length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Read</span>
                <span className="text-yellow-400 font-semibold">
                  {contacts.filter((c) => c.status === 'read').length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Replied</span>
                <span className="text-green-400 font-semibold">
                  {contacts.filter((c) => c.status === 'replied').length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {contacts.length === 0 && (
        <div className="text-center py-12">
          <Mail className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">No contacts found</p>
        </div>
      )}
    </div>
  );
};

export default ContactsManagement;


"use client";

import { useEffect, useState } from "react";
import { Trash2, X, Eye } from "lucide-react";

interface Enquiry {
  _id: string;
  name: string;
  company?: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
  budget?: string;
  contactMethod: string;
  status: "new" | "contacted" | "converted" | "closed";
  createdAt: string;
  updatedAt: string;
}

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [enquiryToDelete, setEnquiryToDelete] = useState<string | null>(null);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const res = await fetch("/api/admin/enquiries");
      const data = await res.json();
      if (data.success) {
        setEnquiries(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch enquiries:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch(`/api/admin/enquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (res.ok) {
        fetchEnquiries();
        if (selectedEnquiry) {
          setSelectedEnquiry({ ...selectedEnquiry, status: status as any });
        }
      }
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const deleteEnquiry = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/enquiries/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchEnquiries();
        setShowModal(false);
        setSelectedEnquiry(null);
        setShowDeleteConfirm(false);
        setEnquiryToDelete(null);
      }
    } catch (error) {
      console.error("Failed to delete enquiry:", error);
    }
  };

  const handleDeleteClick = (id: string) => {
    setEnquiryToDelete(id);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    if (enquiryToDelete) {
      deleteEnquiry(enquiryToDelete);
    }
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
    setEnquiryToDelete(null);
  };

  const openModal = (enquiry: Enquiry) => {
    setSelectedEnquiry(enquiry);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedEnquiry(null), 200);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "contacted":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "converted":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "closed":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-white">Enquiries</h1>
        <div className="text-gray-400 text-sm">
          Total: <span className="text-white font-semibold">{enquiries.length}</span>
        </div>
      </div>

      {enquiries.length === 0 ? (
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-12 text-center">
          <p className="text-gray-400">No enquiries yet. They will appear here once submitted.</p>
        </div>
      ) : (
        <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
          {/* Mobile Card View */}
          <div className="block md:hidden">
            {enquiries.map((enquiry) => (
              <div
                key={enquiry._id}
                className="p-4 border-b border-gray-700 last:border-b-0"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-white font-medium">{enquiry.name}</p>
                    {enquiry.company && (
                      <p className="text-gray-400 text-sm">{enquiry.company}</p>
                    )}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                      enquiry.status
                    )}`}
                  >
                    {enquiry.status}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm mb-3">
                  <p className="text-gray-300">{enquiry.email}</p>
                  <p className="text-gray-400">{enquiry.phone}</p>
                  <p className="text-gray-500 text-xs">
                    {new Date(enquiry.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {enquiry.services.slice(0, 2).map((service) => (
                        <span
                          key={service}
                          className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                        >
                          {service}
                        </span>
                      ))}
                      {enquiry.services.length > 2 && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs">
                          +{enquiry.services.length - 2}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openModal(enquiry)}
                        className="p-2 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors cursor-pointer"
                        title="View details"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteClick(enquiry._id);
                        }}
                        className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer"
                        title="Delete enquiry"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700/50 border-b border-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Services
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {enquiries.map((enquiry) => (
                  <tr
                    key={enquiry._id}
                    className="hover:bg-gray-700/30 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-white font-medium">{enquiry.name}</p>
                        {enquiry.company && (
                          <p className="text-gray-400 text-sm">{enquiry.company}</p>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <p className="text-gray-300">{enquiry.email}</p>
                        <p className="text-gray-400">{enquiry.phone}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {enquiry.services.slice(0, 2).map((service) => (
                          <span
                            key={service}
                            className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                          >
                            {service}
                          </span>
                        ))}
                        {enquiry.services.length > 2 && (
                          <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs">
                            +{enquiry.services.length - 2}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                          enquiry.status
                        )}`}
                      >
                        {enquiry.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400">
                      {new Date(enquiry.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => openModal(enquiry)}
                          className="p-2 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors cursor-pointer"
                          title="View details"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteClick(enquiry._id);
                          }}
                          className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer"
                          title="Delete enquiry"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && selectedEnquiry && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700 sticky top-0 bg-gray-800">
              <h2 className="text-xl font-bold text-white">Enquiry Details</h2>
              <button
                onClick={closeModal}
                className="p-2 text-gray-400 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              <div>
                <label className="text-gray-400 text-sm block mb-2">Status</label>
                <select
                  value={selectedEnquiry.status}
                  onChange={(e) =>
                    updateStatus(selectedEnquiry._id, e.target.value)
                  }
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="converted">Converted</option>
                  <option value="closed">Closed</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-gray-400 text-sm">Name</label>
                  <p className="text-white mt-1 font-medium">{selectedEnquiry.name}</p>
                </div>

                {selectedEnquiry.company && (
                  <div>
                    <label className="text-gray-400 text-sm">Company</label>
                    <p className="text-white mt-1 font-medium">{selectedEnquiry.company}</p>
                  </div>
                )}

                <div>
                  <label className="text-gray-400 text-sm">Email</label>
                  <p className="text-white mt-1">{selectedEnquiry.email}</p>
                </div>

                <div>
                  <label className="text-gray-400 text-sm">Phone</label>
                  <p className="text-white mt-1">{selectedEnquiry.phone}</p>
                </div>

                <div>
                  <label className="text-gray-400 text-sm">Contact Method</label>
                  <p className="text-white mt-1">{selectedEnquiry.contactMethod}</p>
                </div>

                {selectedEnquiry.budget && (
                  <div>
                    <label className="text-gray-400 text-sm">Budget</label>
                    <p className="text-white mt-1">{selectedEnquiry.budget}</p>
                  </div>
                )}
              </div>

              <div>
                <label className="text-gray-400 text-sm">Services Requested</label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedEnquiry.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1.5 bg-gray-700 text-gray-300 rounded-lg text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-gray-400 text-sm">Message</label>
                <div className="mt-2 p-4 bg-gray-700/50 rounded-lg">
                  <p className="text-white whitespace-pre-wrap">{selectedEnquiry.message}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-700 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <label className="text-gray-400">Submitted On</label>
                  <p className="text-white mt-1">
                    {new Date(selectedEnquiry.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                <div>
                  <label className="text-gray-400">Last Updated</label>
                  <p className="text-white mt-1">
                    {new Date(selectedEnquiry.updatedAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg border border-gray-700 max-w-md w-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-500/10 rounded-lg">
                <Trash2 className="text-red-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Delete Enquiry</h3>
            </div>
            
            <p className="text-gray-300 mb-6">
              Are you sure you want to delete this enquiry? This action cannot be undone.
            </p>

            <div className="flex gap-3">
              <button
                onClick={cancelDelete}
                className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

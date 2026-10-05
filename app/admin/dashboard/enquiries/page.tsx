"use client";

import { useEffect, useState } from "react";
import { Trash2, Eye } from "lucide-react";

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
      }
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const deleteEnquiry = async (id: string) => {
    if (!confirm("Are you sure you want to delete this enquiry?")) return;

    try {
      const res = await fetch(`/api/admin/enquiries/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchEnquiries();
        setSelectedEnquiry(null);
      }
    } catch (error) {
      console.error("Failed to delete enquiry:", error);
    }
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
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Enquiries</h1>

      {enquiries.length === 0 ? (
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-12 text-center">
          <p className="text-gray-400">No enquiries yet. They will appear here once submitted.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Enquiries List */}
          <div className="space-y-4">
            {enquiries.map((enquiry) => (
              <div
                key={enquiry._id}
                className="bg-gray-800 rounded-lg border border-gray-700 p-4 hover:border-gray-600 transition-colors cursor-pointer"
                onClick={() => setSelectedEnquiry(enquiry)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-semibold">{enquiry.name}</h3>
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

                <div className="space-y-1 text-sm">
                  <p className="text-gray-400">{enquiry.email}</p>
                  <p className="text-gray-400">{enquiry.phone}</p>
                  <p className="text-gray-500 text-xs mt-2">
                    {new Date(enquiry.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>

                <div className="flex gap-2 mt-3">
                  {enquiry.services.map((service) => (
                    <span
                      key={service}
                      className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Enquiry Details */}
          <div className="lg:sticky lg:top-6 lg:h-fit">
            {selectedEnquiry ? (
              <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white">Enquiry Details</h2>
                  <button
                    onClick={() => deleteEnquiry(selectedEnquiry._id)}
                    className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                    title="Delete enquiry"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm">Status</label>
                    <select
                      value={selectedEnquiry.status}
                      onChange={(e) =>
                        updateStatus(selectedEnquiry._id, e.target.value)
                      }
                      className="w-full mt-1 px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="converted">Converted</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-gray-400 text-sm">Name</label>
                    <p className="text-white mt-1">{selectedEnquiry.name}</p>
                  </div>

                  {selectedEnquiry.company && (
                    <div>
                      <label className="text-gray-400 text-sm">Company</label>
                      <p className="text-white mt-1">{selectedEnquiry.company}</p>
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

                  <div>
                    <label className="text-gray-400 text-sm">Services</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedEnquiry.services.map((service) => (
                        <span
                          key={service}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg text-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 text-sm">Message</label>
                    <p className="text-white mt-1 whitespace-pre-wrap">
                      {selectedEnquiry.message}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-700">
                    <label className="text-gray-400 text-sm">Submitted On</label>
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
                </div>
              </div>
            ) : (
              <div className="bg-gray-800 rounded-lg border border-gray-700 p-12 text-center">
                <Eye className="mx-auto mb-4 text-gray-600" size={48} />
                <p className="text-gray-400">Select an enquiry to view details</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

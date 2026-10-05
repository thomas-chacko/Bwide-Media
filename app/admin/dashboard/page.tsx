import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import connectDB from "@/lib/db";
import Enquiry from "@/models/Enquiry";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/admin/login");
  }

  await connectDB();

  const totalEnquiries = await Enquiry.countDocuments();
  const newEnquiries = await Enquiry.countDocuments({ status: "new" });
  const convertedEnquiries = await Enquiry.countDocuments({ status: "converted" });

  const recentEnquiries = await Enquiry.find()
    .sort({ createdAt: -1 })
    .limit(5)
    .lean();

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Stats Cards */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-gray-400 text-sm font-medium">Total Enquiries</h3>
          <p className="text-3xl font-bold text-white mt-2">{totalEnquiries}</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-gray-400 text-sm font-medium">New Enquiries</h3>
          <p className="text-3xl font-bold text-blue-400 mt-2">{newEnquiries}</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-gray-400 text-sm font-medium">Converted</h3>
          <p className="text-3xl font-bold text-green-400 mt-2">{convertedEnquiries}</p>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
        <h2 className="text-xl font-bold text-white mb-4">Welcome, {session.user?.name}</h2>
        <p className="text-gray-400">
          You are logged in as: <span className="font-medium text-white">{session.user?.email}</span>
        </p>
      </div>

      {/* Recent Enquiries */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-lg font-semibold text-white">Recent Enquiries</h2>
        </div>
        
        <div className="p-6">
          {recentEnquiries.length === 0 ? (
            <p className="text-gray-400 text-center py-4">No enquiries yet</p>
          ) : (
            <div className="space-y-3">
              {recentEnquiries.map((enquiry: any) => (
                <div
                  key={enquiry._id.toString()}
                  className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg"
                >
                  <div>
                    <p className="text-white font-medium">{enquiry.name}</p>
                    <p className="text-gray-400 text-sm">{enquiry.email}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      enquiry.status === "new" ? "bg-blue-500/20 text-blue-400" :
                      enquiry.status === "contacted" ? "bg-yellow-500/20 text-yellow-400" :
                      enquiry.status === "converted" ? "bg-green-500/20 text-green-400" :
                      "bg-gray-500/20 text-gray-400"
                    }`}>
                      {enquiry.status}
                    </span>
                    <p className="text-gray-500 text-xs mt-1">
                      {new Date(enquiry.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

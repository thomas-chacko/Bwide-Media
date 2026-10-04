import { NextResponse } from "next/server";
import { z } from "zod";

const contactMethods = ["Phone", "WhatsApp", "Email"] as const;

const enquirySchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  phone: z.string().min(10),
  email: z.string().email(),
  services: z.array(z.string()).min(1),
  message: z.string().min(10).max(2000),
  budget: z.string().optional(),
  contactMethod: z.enum(contactMethods).default("Phone"),
  website: z.string().max(0).optional(), // honeypot
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = enquirySchema.parse(body);

    // Honeypot check
    if (data.website && data.website.length > 0) {
      return NextResponse.json({ success: true }); // silently reject
    }

    // TODO: connect email/CRM — for now just log the enquiry
    console.log("📩 New enquiry received:", {
      name: data.name,
      company: data.company,
      phone: data.phone,
      email: data.email,
      services: data.services,
      budget: data.budget,
      contactMethod: data.contactMethod,
      messageLength: data.message.length,
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry received successfully.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}

import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import type { TeamMember } from "@shared/schema";

export default function About() {
  const { data: teamMembers, isLoading, error } = useQuery<TeamMember[]>({
    queryKey: ["/api/team"],
  });

  return (
    <main className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company History */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About MedSupply Pro</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2015 by Dr. Sarah Johnson, MedSupply Pro emerged from a critical need for reliable, FDA-certified medical equipment and supplies in the healthcare industry. With over 15 years of experience in emergency medicine, Dr. Johnson recognized the challenges healthcare facilities faced in sourcing quality medical supplies efficiently.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small distribution center in Houston has grown into a nationally recognized medical supply company, serving over 500 healthcare facilities across the United States. Our commitment to quality, compliance, and customer service has made us a trusted partner for hospitals, clinics, and medical professionals nationwide.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-medical-green">500+</div>
                  <div className="text-sm text-gray-600">Healthcare Facilities Served</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-medical-green">50+</div>
                  <div className="text-sm text-gray-600">States Served</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern healthcare facility" 
                className="rounded-xl shadow-lg" 
              />
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Leadership Team</h2>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="text-center">
                  <CardContent className="p-6">
                    <Skeleton className="w-24 h-24 rounded-full mx-auto mb-4" />
                    <Skeleton className="h-6 w-48 mb-2 mx-auto" />
                    <Skeleton className="h-4 w-32 mb-2 mx-auto" />
                    <Skeleton className="h-16 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-red-600">
              <p>Unable to load team members. Please try again later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers?.map((member) => (
                <Card key={member.id} className="bg-white border border-gray-200 shadow-lg text-center">
                  <CardContent className="p-6">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" 
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-medical-green font-medium mb-2">{member.title}</p>
                    <p className="text-gray-600 text-sm whitespace-pre-line">{member.credentials}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Certifications & Permits */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Certifications & Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">FDA Registrations & Certifications</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-medical-green mr-3" />
                  FDA Medical Device Distributor License #12345678
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-medical-green mr-3" />
                  ISO 13485:2016 Quality Management Certification
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-medical-green mr-3" />
                  DEA Registration for Controlled Substances
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-medical-green mr-3" />
                  HIPAA Business Associate Compliant
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Medical certifications and permits" 
                className="rounded-lg shadow-lg" 
              />
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">State Licenses</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-medical-green mr-3" />
                  Texas Medical Device Distributor License
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-medical-green mr-3" />
                  Multi-State Pharmacy Distributor Permits
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-medical-green mr-3" />
                  Controlled Substance Distribution Authority
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Memberships</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-medical-green mr-3" />
                  Healthcare Financial Management Association
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-medical-green mr-3" />
                  Medical Device Manufacturers Association
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-medical-green mr-3" />
                  American Hospital Association Supplier
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import { Building2, ArrowLeft, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const hospitals = [
  { id: 1, name: "City General Hospital", distance: "1.2 km", beds: 45, emergency: true, phone: "+91 11 2345 6789", address: "123 Main St, Downtown" },
  { id: 2, name: "Metro Care Center", distance: "2.8 km", beds: 12, emergency: true, phone: "+91 11 3456 7890", address: "456 Park Ave, Midtown" },
  { id: 3, name: "St. Mary's Health", distance: "3.5 km", beds: 78, emergency: true, phone: "+91 11 4567 8901", address: "789 North Rd, Northside" },
  { id: 4, name: "Sunrise Medical", distance: "4.1 km", beds: 0, emergency: false, phone: "+91 11 5678 9012", address: "321 East Blvd, East Side" },
  { id: 5, name: "Greenview Clinic", distance: "5.6 km", beds: 8, emergency: false, phone: "+91 11 6789 0123", address: "654 Suburb Ln, Suburbs" },
];

const UserHospitals = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 h-14 flex items-center gap-3">
          <Link to="/user">
            <Button variant="ghost" size="icon"><ArrowLeft className="h-5 w-5" /></Button>
          </Link>
          <h1 className="font-semibold text-lg">Nearby Hospitals</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-2xl space-y-4">
        <Input placeholder="Search hospitals..." className="mb-2" />

        {hospitals.map((h) => (
          <Card key={h.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <h3 className="font-semibold">{h.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      <MapPin className="h-3 w-3 mr-1" />{h.distance}
                    </Badge>
                    <Badge variant={h.beds > 0 ? "default" : "destructive"} className="text-xs">
                      {h.beds > 0 ? `${h.beds} beds available` : "No beds"}
                    </Badge>
                    {h.emergency && (
                      <Badge variant="secondary" className="text-xs">24/7 Emergency</Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {h.address}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <Button size="sm" variant="outline">
                    <Phone className="h-3.5 w-3.5 mr-1" /> Call
                  </Button>
                  <Button size="sm" variant="outline">
                    <MapPin className="h-3.5 w-3.5 mr-1" /> Map
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserHospitals;

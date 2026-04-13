import { useState } from "react";
import { Ambulance, MapPin, ArrowLeft, Phone, User, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

const UserRequest = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="p-8 space-y-4">
            <div className="mx-auto p-4 rounded-full bg-success/10 w-fit">
              <Ambulance className="h-10 w-10 text-success" />
            </div>
            <h2 className="text-2xl font-bold">Ambulance Dispatched!</h2>
            <p className="text-muted-foreground">
              An ambulance has been dispatched to your location. Estimated arrival: <strong className="text-foreground">8 minutes</strong>.
            </p>
            <div className="bg-muted rounded-lg p-4 text-sm space-y-1">
              <p>Ambulance ID: <strong>A-102</strong></p>
              <p>Driver: <strong>Jane Doe</strong></p>
              <p>Hospital: <strong>City General Hospital</strong></p>
            </div>
            <div className="flex gap-3 pt-2">
              <Link to="/user/track" className="flex-1">
                <Button className="w-full">
                  <MapPin className="mr-2 h-4 w-4" /> Track Ambulance
                </Button>
              </Link>
              <Link to="/user" className="flex-1">
                <Button variant="outline" className="w-full">Home</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 h-14 flex items-center gap-3">
          <Link to="/user">
            <Button variant="ghost" size="icon"><ArrowLeft className="h-5 w-5" /></Button>
          </Link>
          <h1 className="font-semibold text-lg">Request Ambulance</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-lg">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ambulance className="h-5 w-5 text-destructive" />
              Emergency Request
            </CardTitle>
            <CardDescription>Fill in details so we can send help quickly</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="name"><User className="inline h-3.5 w-3.5 mr-1" />Full Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone"><Phone className="inline h-3.5 w-3.5 mr-1" />Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="emergency">Emergency Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="accident">Accident</SelectItem>
                    <SelectItem value="cardiac">Cardiac Emergency</SelectItem>
                    <SelectItem value="breathing">Breathing Difficulty</SelectItem>
                    <SelectItem value="injury">Severe Injury</SelectItem>
                    <SelectItem value="pregnancy">Pregnancy</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location"><MapPin className="inline h-3.5 w-3.5 mr-1" />Location</Label>
                <Input id="location" placeholder="Your address or landmark" required />
                <Button type="button" variant="outline" size="sm" className="w-full">
                  <MapPin className="mr-2 h-3.5 w-3.5" /> Use Current Location
                </Button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes"><FileText className="inline h-3.5 w-3.5 mr-1" />Additional Notes</Label>
                <Textarea id="notes" placeholder="Any additional details..." rows={3} />
              </div>

              <Button type="submit" className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground" size="lg">
                <Ambulance className="mr-2 h-5 w-5" />
                Request Ambulance Now
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserRequest;

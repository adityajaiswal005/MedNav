import { Ambulance, Building2, MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const UserHome = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Ambulance className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">MedNav</span>
          </div>
          <Link to="/login">
            <Button variant="outline" size="sm">Admin Login</Button>
          </Link>
        </div>
      </header>

      {/* Hero with Emergency Button */}
      <section className="container mx-auto px-4 py-16 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Emergency Help,<br />
          <span className="text-primary">When You Need It Most</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Request an ambulance, find nearby hospitals, and track help in real-time.
        </p>
        
        {/* Emergency Button */}
        <div className="pt-4">
          <Link to="/user/request">
            <Button size="lg" className="h-20 w-64 text-xl rounded-2xl bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-lg animate-pulse hover:animate-none">
              <Phone className="mr-3 h-7 w-7" />
              SOS Emergency
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 pt-2">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">25+</p>
            <p className="text-sm text-muted-foreground">Hospitals</p>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="text-center">
            <p className="text-3xl font-bold text-destructive">50+</p>
            <p className="text-sm text-muted-foreground">Ambulances</p>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="text-center">
            <p className="text-3xl font-bold text-success">24/7</p>
            <p className="text-sm text-muted-foreground">Available</p>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Link to="/user/request" className="group">
            <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto p-4 rounded-2xl bg-destructive/10 w-fit">
                  <Ambulance className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold">Request Ambulance</h3>
                <p className="text-sm text-muted-foreground">
                  Share your location and get the nearest ambulance dispatched immediately.
                </p>
                <span className="inline-flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                  Request Now <ArrowRight className="h-4 w-4 ml-1" />
                </span>
              </CardContent>
            </Card>
          </Link>

          <Link to="/user/hospitals" className="group">
            <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto p-4 rounded-2xl bg-primary/10 w-fit">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Find Hospitals</h3>
                <p className="text-sm text-muted-foreground">
                  Browse nearby hospitals with real-time bed availability and contact info.
                </p>
                <span className="inline-flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                  Find Now <ArrowRight className="h-4 w-4 ml-1" />
                </span>
              </CardContent>
            </Card>
          </Link>

          <Link to="/user/track" className="group">
            <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto p-4 rounded-2xl bg-success/10 w-fit">
                  <MapPin className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-lg font-semibold">Track Ambulance</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time tracking of your dispatched ambulance with live ETA updates.
                </p>
                <span className="inline-flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                  Track Now <ArrowRight className="h-4 w-4 ml-1" />
                </span>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Ambulance className="h-5 w-5 text-primary" />
                <span className="text-lg font-bold">MedNav</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Fast, reliable emergency medical assistance at your fingertips.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/user/request" className="hover:text-primary transition-colors">Request Ambulance</Link></li>
                <li><Link to="/user/hospitals" className="hover:text-primary transition-colors">Find Hospitals</Link></li>
                <li><Link to="/user/track" className="hover:text-primary transition-colors">Track Ambulance</Link></li>
              </ul>
            </div>

            {/* Emergency */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Emergency</h4>
              <p className="text-sm text-muted-foreground">
                In a life-threatening emergency, call immediately:
              </p>
              <p className="text-2xl font-bold text-destructive">112</p>
            </div>
          </div>

          <div className="border-t mt-8 pt-6 text-center text-xs text-muted-foreground">
            <p>© 2026 MedNav. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserHome;

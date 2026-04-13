import { Ambulance, ArrowLeft, MapPin, Clock, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

const UserTrack = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 h-14 flex items-center gap-3">
          <Link to="/user">
            <Button variant="ghost" size="icon"><ArrowLeft className="h-5 w-5" /></Button>
          </Link>
          <h1 className="font-semibold text-lg">Track Ambulance</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-2xl space-y-6">
        {/* Status Banner */}
        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <Ambulance className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-lg">Ambulance A-102</h2>
                <Badge className="bg-success text-success-foreground">En Route</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">Heading to your location</p>
            </div>
          </CardContent>
        </Card>

        {/* ETA */}
        <Card>
          <CardContent className="p-6 text-center space-y-3">
            <Clock className="h-8 w-8 text-primary mx-auto" />
            <div>
              <p className="text-sm text-muted-foreground">Estimated Arrival</p>
              <p className="text-4xl font-bold text-primary">6 min</p>
            </div>
            <Progress value={65} className="h-2" />
            <p className="text-xs text-muted-foreground">2.4 km away • Moving at 45 km/h</p>
          </CardContent>
        </Card>

        {/* Live Map Placeholder */}
        <Card>
          <CardContent className="p-0">
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={`h-${i}`} className="absolute border-b border-foreground w-full" style={{ top: `${i * 8.3}%` }} />
                ))}
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={`v-${i}`} className="absolute border-r border-foreground h-full" style={{ left: `${i * 8.3}%` }} />
                ))}
              </div>
              {/* Ambulance dot */}
              <div className="absolute" style={{ top: "35%", left: "30%" }}>
                <div className="w-4 h-4 rounded-full bg-primary shadow-lg animate-pulse" />
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-primary text-primary-foreground px-1.5 py-0.5 rounded">A-102</span>
              </div>
              {/* Your location */}
              <div className="absolute" style={{ top: "65%", left: "70%" }}>
                <div className="w-4 h-4 rounded-full bg-destructive shadow-lg" />
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-destructive text-destructive-foreground px-1.5 py-0.5 rounded">You</span>
              </div>
              {/* Path line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="33%" y1="38%" x2="72%" y2="68%" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
              </svg>
              <p className="text-muted-foreground text-sm z-10">Live map view</p>
            </div>
          </CardContent>
        </Card>

        {/* Driver Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Driver Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-muted">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium">Jane Doe</p>
                  <p className="text-xs text-muted-foreground">City General Hospital</p>
                </div>
              </div>
              <Button size="sm">
                <Phone className="h-3.5 w-3.5 mr-1" /> Call
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Status Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { time: "10:32 AM", text: "Request received", done: true },
                { time: "10:33 AM", text: "Ambulance A-102 dispatched", done: true },
                { time: "10:34 AM", text: "En route to your location", done: true },
                { time: "~10:40 AM", text: "Expected arrival", done: false },
              ].map((step, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${step.done ? "bg-success" : "bg-muted-foreground/30"}`} />
                    {i < 3 && <div className={`w-0.5 h-6 ${step.done ? "bg-success/30" : "bg-muted"}`} />}
                  </div>
                  <div>
                    <p className={`text-sm ${step.done ? "font-medium" : "text-muted-foreground"}`}>{step.text}</p>
                    <p className="text-xs text-muted-foreground">{step.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserTrack;

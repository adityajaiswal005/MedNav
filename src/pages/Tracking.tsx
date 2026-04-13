import { MapPin, Ambulance, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ambulanceLocations = [
  { id: "A-101", lat: 28.6139, lng: 77.209, status: "Available", driver: "John Smith" },
  { id: "A-102", lat: 28.625, lng: 77.215, status: "On Duty", driver: "Jane Doe" },
  { id: "A-202", lat: 28.608, lng: 77.22, status: "Emergency", driver: "Sarah Lee" },
  { id: "A-402", lat: 28.63, lng: 77.2, status: "On Duty", driver: "David Kim" },
];

const hospitalLocations = [
  { id: 1, name: "City General Hospital", lat: 28.6139, lng: 77.209, ambulances: 8 },
  { id: 2, name: "Metro Care Center", lat: 28.622, lng: 77.218, ambulances: 5 },
  { id: 3, name: "St. Mary's Health", lat: 28.63, lng: 77.195, ambulances: 12 },
];

const statusColor = (status: string) => {
  switch (status) {
    case "Available": return "bg-success";
    case "On Duty": return "bg-warning";
    case "Emergency": return "bg-destructive animate-pulse";
    default: return "bg-muted-foreground";
  }
};

const Tracking = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Live Tracking</h2>
        <p className="text-muted-foreground">Real-time location of ambulances and hospitals</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map placeholder */}
        <Card className="lg:col-span-2">
          <CardContent className="p-0">
            <div className="h-[500px] bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
              {/* Simulated map grid */}
              <div className="absolute inset-0 opacity-10">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={`h-${i}`} className="absolute border-b border-foreground w-full" style={{ top: `${i * 5}%` }} />
                ))}
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={`v-${i}`} className="absolute border-r border-foreground h-full" style={{ left: `${i * 5}%` }} />
                ))}
              </div>
              
              {/* Ambulance markers */}
              {ambulanceLocations.map((a, i) => (
                <div
                  key={a.id}
                  className="absolute flex flex-col items-center gap-1"
                  style={{ top: `${20 + i * 15}%`, left: `${25 + i * 12}%` }}
                >
                  <div className={`w-4 h-4 rounded-full ${statusColor(a.status)} shadow-lg`} />
                  <span className="text-[10px] font-bold bg-card px-1.5 py-0.5 rounded shadow text-foreground">{a.id}</span>
                </div>
              ))}

              {/* Hospital markers */}
              {hospitalLocations.map((h, i) => (
                <div
                  key={h.id}
                  className="absolute flex flex-col items-center gap-1"
                  style={{ top: `${30 + i * 18}%`, left: `${55 + i * 10}%` }}
                >
                  <Building2 className="h-5 w-5 text-primary" />
                  <span className="text-[10px] font-bold bg-primary text-primary-foreground px-1.5 py-0.5 rounded shadow">{h.name.split(" ")[0]}</span>
                </div>
              ))}

              <p className="text-muted-foreground text-sm z-10">Map integration will appear here</p>
            </div>
          </CardContent>
        </Card>

        {/* Sidebar list */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Units</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="ambulances">
              <TabsList className="w-full">
                <TabsTrigger value="ambulances" className="flex-1">
                  <Ambulance className="h-3 w-3 mr-1" /> Ambulances
                </TabsTrigger>
                <TabsTrigger value="hospitals" className="flex-1">
                  <Building2 className="h-3 w-3 mr-1" /> Hospitals
                </TabsTrigger>
              </TabsList>
              <TabsContent value="ambulances" className="space-y-3 mt-3">
                {ambulanceLocations.map((a) => (
                  <div key={a.id} className="flex items-center justify-between p-2 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full ${statusColor(a.status)}`} />
                      <div>
                        <p className="text-sm font-medium">{a.id}</p>
                        <p className="text-xs text-muted-foreground">{a.driver}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">{a.status}</Badge>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="hospitals" className="space-y-3 mt-3">
                {hospitalLocations.map((h) => (
                  <div key={h.id} className="flex items-center justify-between p-2 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors">
                    <div>
                      <p className="text-sm font-medium">{h.name}</p>
                      <p className="text-xs text-muted-foreground">{h.ambulances} ambulances</p>
                    </div>
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Tracking;

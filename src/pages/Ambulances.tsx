import { Ambulance as AmbulanceIcon, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ambulances = [
  { id: "A-101", hospital: "City General Hospital", driver: "John Smith", status: "Available", lastLocation: "Downtown" },
  { id: "A-102", hospital: "City General Hospital", driver: "Jane Doe", status: "On Duty", lastLocation: "Highway 5" },
  { id: "A-201", hospital: "Metro Care Center", driver: "Mike Ross", status: "Available", lastLocation: "Midtown" },
  { id: "A-202", hospital: "Metro Care Center", driver: "Sarah Lee", status: "Emergency", lastLocation: "Route 66" },
  { id: "A-301", hospital: "Sunrise Medical", driver: "Tom Brown", status: "Maintenance", lastLocation: "Depot" },
  { id: "A-401", hospital: "St. Mary's Health", driver: "Emily Clark", status: "Available", lastLocation: "Northside" },
  { id: "A-402", hospital: "St. Mary's Health", driver: "David Kim", status: "On Duty", lastLocation: "Central Ave" },
];

const statusVariant = (status: string) => {
  switch (status) {
    case "Available": return "default";
    case "On Duty": return "secondary";
    case "Emergency": return "destructive";
    default: return "outline";
  }
};

const Ambulances = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Ambulances</h2>
          <p className="text-muted-foreground">Manage fleet and availability</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Ambulance
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {[
          { label: "Total", value: 156, color: "text-foreground" },
          { label: "Available", value: 89, color: "text-success" },
          { label: "On Duty", value: 45, color: "text-warning" },
          { label: "Emergency", value: 12, color: "text-destructive" },
        ].map((s) => (
          <Card key={s.label}>
            <CardContent className="p-4 text-center">
              <p className="text-sm text-muted-foreground">{s.label}</p>
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search ambulances..." className="max-w-sm" />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Hospital</TableHead>
                <TableHead>Driver</TableHead>
                <TableHead>Last Location</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ambulances.map((a) => (
                <TableRow key={a.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <AmbulanceIcon className="h-4 w-4 text-primary" />
                      {a.id}
                    </div>
                  </TableCell>
                  <TableCell>{a.hospital}</TableCell>
                  <TableCell>{a.driver}</TableCell>
                  <TableCell>{a.lastLocation}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariant(a.status) as any}>{a.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Ambulances;

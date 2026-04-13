import { Building2, Plus, Search } from "lucide-react";
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

const hospitals = [
  { id: 1, name: "City General Hospital", location: "Downtown", beds: 320, ambulances: 8, status: "Active" },
  { id: 2, name: "Metro Care Center", location: "Midtown", beds: 210, ambulances: 5, status: "Active" },
  { id: 3, name: "Sunrise Medical", location: "East Side", beds: 150, ambulances: 4, status: "Active" },
  { id: 4, name: "Westfield Hospital", location: "West End", beds: 180, ambulances: 3, status: "Inactive" },
  { id: 5, name: "St. Mary's Health", location: "Northside", beds: 400, ambulances: 12, status: "Active" },
  { id: 6, name: "Greenview Clinic", location: "Suburbs", beds: 80, ambulances: 2, status: "Active" },
];

const Hospitals = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Hospitals</h2>
          <p className="text-muted-foreground">Manage registered hospitals</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Hospital
        </Button>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search hospitals..." className="max-w-sm" />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hospital Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Beds</TableHead>
                <TableHead>Ambulances</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hospitals.map((h) => (
                <TableRow key={h.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-primary" />
                      {h.name}
                    </div>
                  </TableCell>
                  <TableCell>{h.location}</TableCell>
                  <TableCell>{h.beds}</TableCell>
                  <TableCell>{h.ambulances}</TableCell>
                  <TableCell>
                    <Badge variant={h.status === "Active" ? "default" : "secondary"}>
                      {h.status}
                    </Badge>
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

export default Hospitals;

import { Building2, Ambulance, CheckCircle, AlertTriangle } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const recentActivity = [
  { id: 1, message: "Ambulance A-102 dispatched to City Hospital", time: "2 min ago", type: "dispatch" },
  { id: 2, message: "New hospital 'Metro Care' registered", time: "15 min ago", type: "new" },
  { id: 3, message: "Ambulance A-207 returned to base", time: "32 min ago", type: "return" },
  { id: 4, message: "Ambulance A-045 maintenance scheduled", time: "1 hr ago", type: "maintenance" },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-muted-foreground">Overview of your hospital and ambulance network</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Hospitals" value={48} icon={Building2} trend="+3 this month" variant="info" />
        <StatCard title="Total Ambulances" value={156} icon={Ambulance} variant="default" />
        <StatCard title="Available Ambulances" value={89} icon={CheckCircle} variant="success" />
        <StatCard title="On Duty" value={67} icon={AlertTriangle} variant="warning" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((item) => (
              <div key={item.id} className="flex items-start justify-between border-b pb-3 last:border-0">
                <div>
                  <p className="text-sm">{item.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
                </div>
                <Badge variant={item.type === "dispatch" ? "default" : "secondary"} className="text-xs">
                  {item.type}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Ambulance Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { status: "Available", count: 89, color: "bg-success" },
                { status: "On Duty", count: 45, color: "bg-warning" },
                { status: "Emergency", count: 12, color: "bg-destructive" },
                { status: "Maintenance", count: 10, color: "bg-muted-foreground" },
              ].map((s) => (
                <div key={s.status} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${s.color}`} />
                  <span className="text-sm flex-1">{s.status}</span>
                  <span className="text-sm font-semibold">{s.count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

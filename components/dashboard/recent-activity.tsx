import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const activities = [
  {
    user: {
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    action: "created a new project",
    project: "Marketing Dashboard",
    time: "2 hours ago",
  },
  {
    user: {
      name: "Sarah Smith",
      email: "sarah@example.com",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    action: "commented on",
    project: "API Integration",
    time: "4 hours ago",
  },
  {
    user: {
      name: "Michael Brown",
      email: "michael@example.com",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    action: "completed task in",
    project: "User Authentication",
    time: "6 hours ago",
  },
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                <AvatarFallback>{activity.user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  <span className="font-semibold">{activity.user.name}</span>
                  {" "}{activity.action}{" "}
                  <span className="font-semibold">{activity.project}</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
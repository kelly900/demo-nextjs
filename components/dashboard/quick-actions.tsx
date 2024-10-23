import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Users2, Settings } from "lucide-react";

export function QuickActions() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button className="w-full justify-start">
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <FileText className="mr-2 h-4 w-4" />
          Create Report
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <Users2 className="mr-2 h-4 w-4" />
          Invite Team Member
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Update Settings
        </Button>
      </CardContent>
    </Card>
  );
}
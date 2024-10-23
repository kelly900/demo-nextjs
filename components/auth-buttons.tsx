import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";

export function AuthButtons() {
  return (
    <div className="fixed top-4 right-4 flex gap-2 z-50">
      <Button variant="outline">
        <Link href="/login" className="flex items-center">
          Login
        </Link>
      </Button>
      <Button>
        <Link href="/register" className="flex items-center">
          Register <LogIn className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
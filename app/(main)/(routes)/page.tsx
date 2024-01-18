import { ModeToggle } from "@/components/shared/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="text-3xl">
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
}

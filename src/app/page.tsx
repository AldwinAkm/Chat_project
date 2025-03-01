import { Button } from "@/components/ui/button";
import { SignedIn,SignedOut,SignInButton,SignUpButton, UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="m-4">
      <h1>Contenu de ma page d'accueil</h1>
    </div>
  );
}

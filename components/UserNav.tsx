
import { ExitIcon, FaceIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import Link from "next/link";
import { getSession, getUserDetails, getSubscription } from "@/app/supabase-server";
import SignOutButton from "./SignOutButton";
import UserImage from "./user-image";

export default async function UserNav() {
  const [session, userDetails, subscription] = await Promise.all([
    getSession(),
    getUserDetails(),
    getSubscription()
  ]);

  const user = session?.user;
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="relative h-9 w-9 rounded-full">
<UserImage/>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56" align="end" forceMount>
      <DropdownMenuLabel className="font-normal">
       <p>{userDetails?.full_name}</p>
       <p className=" text-xs text-muted-foreground">{session?.user.email}</p>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <Link href={"/"}>
        <DropdownMenuItem>
        Home
          <DropdownMenuShortcut>⌘h</DropdownMenuShortcut>
        </DropdownMenuItem>
        </Link>
      <Link href={"/profile"}>
        <DropdownMenuItem>
          Profile
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        </Link>
        <Link href={"/about"}>
          <DropdownMenuItem>
          About
            <DropdownMenuShortcut>⌘a</DropdownMenuShortcut>
          </DropdownMenuItem>
        </Link>

      </DropdownMenuGroup>
      <DropdownMenuSeparator />
<SignOutButton/>
    </DropdownMenuContent>
  </DropdownMenu>

  )
}

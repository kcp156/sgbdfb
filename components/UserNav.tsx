
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

export default function UserNav() {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="relative h-9 w-9 rounded-full">
        <Avatar className="h-9 w-9 ">
          <AvatarImage src="/01.jpg" alt="AV" />
          <AvatarFallback>AV</AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56" align="end" forceMount>
      <DropdownMenuLabel className="font-normal">
       lll
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
      <DropdownMenuItem >
      <ExitIcon className="mr-2 h-4 w-4" />
      <span>Log out</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>

  )
}

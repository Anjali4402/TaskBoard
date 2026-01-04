import { useContext, useState, type ReactNode } from "react";

import {
  UserIcon,
  SettingsIcon,
  // CreditCardIcon,
  // UsersIcon,
  // SquarePenIcon,
  // CirclePlusIcon,
  LogOutIcon,
} from "lucide-react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import ProfileSettings from "../profile/ProfileSettings";
// import ProfileSettings from "./ProfileSettings";
// import { AuthContext } from "@/context/AuthContext";
// import { Badge } from "./ui/badge";

type Props = {
  trigger: ReactNode;
  defaultOpen?: boolean;
  align?: "start" | "center" | "end";
};

const ProfileDropdown = ({ trigger, defaultOpen, align = "end" }: Props) => {
  const router = useRouter();

  const handleUserLogout = () => {
    // clearUser();
    // localStorage.removeItem("user");
    router.push("/login");
  };

  const [isOpenProfile, setIsOpenProfile] = useState(false);

  const handleCloseProfile = () => setIsOpenProfile(false);

  return (
    <>
      <DropdownMenu defaultOpen={defaultOpen}>
        <DropdownMenuTrigger asChild className="cursor-pointer">
          {trigger}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80" align={align || "end"}>
          <DropdownMenuLabel className="flex items-center gap-4 px-4 py-2.5 font-normal">
            <div className="relative">
              <Avatar className="size-10">
                <AvatarImage
                  // src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png"
                  src={"JD"}
                  alt="John Doe"
                />
                <AvatarFallback className="uppercase">AN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-1 flex-col items-start">
              {/* <span className='text-foreground text-lg font-semibold'>{userDetails?.username}</span> */}
              <span className="text-foreground text-lg font-semibold">
                John Doe
              </span>
              <span className="text-muted-foreground text-base">
                johndoe123@gmail.com
              </span>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <>
              <DropdownMenuItem
                onClick={() => {
                  setIsOpenProfile(true);
                }}
                className="cursor-pointer px-4 py-2.5 text-base"
              >
                <UserIcon className="text-foreground size-5" />
                <span>Profile Settings</span>
              </DropdownMenuItem>
              {/* <DropdownMenuItem className="px-4 py-2.5 text-base">
            <SettingsIcon className="text-foreground size-5" />
            <span>Help Center</span>
          </DropdownMenuItem> */}
            </>

            <DropdownMenuItem
              onClick={() => {
                handleUserLogout();
              }}
              variant="destructive"
              className="cursor-pointer px-4 py-2.5 text-base"
            >
              <LogOutIcon className="size-5" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          {/* <DropdownMenuSeparator /> */}

          {/* <DropdownMenuGroup>
          <DropdownMenuItem className="px-4 py-2.5 text-base">
            <UsersIcon className="text-foreground size-5" />
            <span>Manage team</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="px-4 py-2.5 text-base">
            <SquarePenIcon className="text-foreground size-5" />
            <span>Customization</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="px-4 py-2.5 text-base">
            <CirclePlusIcon className="text-foreground size-5" />
            <span>Add team account</span>
          </DropdownMenuItem>
        </DropdownMenuGroup> */}

          {/* <DropdownMenuSeparator /> */}
        </DropdownMenuContent>
      </DropdownMenu>

      <ProfileSettings
        isOpen={isOpenProfile}
        handleClose={handleCloseProfile}
      />
    </>
  );
};

export default ProfileDropdown;

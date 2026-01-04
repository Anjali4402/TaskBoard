import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ChevronDownIcon, Pencil, X } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export const customInputClasses =
  "focus:ring-0 focus:ring-[#0661FF] focus:border-transparent focus-visible:ring-[#13ec80] focus-visible:border-none focus-within:ring-green-light focus-within:border-green-light focus-within:ring-2 focus:outline-none ";

export const customLabelClasses =
  "pb-2 text-sm leading-normal font-medium text-gray-900 dark:text-white";

interface ProfileSettingsProps {
  isOpen: boolean;
  handleClose: () => void;
}

const ProfileSettings: React.FC<ProfileSettingsProps> = ({
  isOpen,
  handleClose,
}) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
  });

  const handleChange = (name: string, value: string) => {
    setUserDetails((oldval) => {
      return {
        ...oldval,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit form");
  };

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedImage(file);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={handleClose}>
      <AlertDialogContent className="max-h-[90vh] overflow-y-auto rounded-sm shadow-[0px_12px_10px_0px_#0000001A] sm:max-w-[650px]">
        <AlertDialogHeader>
          <div className="mb-2 flex items-center justify-between gap-6">
            <AlertDialogTitle className="space-y-1">
              <p className="custom-text-body-xl text-start font-normal text-[#000000]">
                Profile Settings
              </p>
            </AlertDialogTitle>
            <AlertDialogCancel className="size-8 cursor-pointer p-0">
              <X className="font-bold text-black" />
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2"
        >
          {/* image */}
          <div className="col-span-2 py-4">
            <div className="relative mx-auto h-[98px] w-[98px] overflow-hidden">
              <Image
                src={
                  selectedImage
                    ? URL.createObjectURL(selectedImage)
                    : "/fallback-profile.avif"
                }
                alt="User_image"
                className="border-green-light rounded-full border-2 object-cover"
                fill
                priority
                unoptimized
                quality={100}
              />

              <Label
                htmlFor="image"
                className="absolute right-0 bottom-2 w-fit cursor-pointer rounded-full bg-[#1814F3] p-1.5"
              >
                <Pencil className="size-3.5 text-white" />

                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleUploadImage}
                />
              </Label>
            </div>
          </div>

          {/* Full Name */}
          <div className="space-y-1">
            <Label htmlFor="firstName" className={customLabelClasses}>
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Enter Full Name"
              value={userDetails?.fullName}
              onChange={(e) => {
                handleChange(e?.target?.name, e?.target?.value);
              }}
              className={customInputClasses}
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <Label htmlFor="email" className={customLabelClasses}>
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={userDetails?.email}
              readOnly
              onChange={(e) => {
                handleChange(e?.target?.name, e?.target?.value);
              }}
              className={customInputClasses}
            />
          </div>

          <div className="col-span-2 flex items-center justify-end gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() => {}}
              type="button"
              className="bg-green-light mt-4 flex h-12 transform cursor-pointer items-center justify-center rounded-lg px-4 text-base leading-normal font-bold tracking-[0.015em] text-[#11221a] shadow-[0_0_20px_rgba(19,236,128,0.2)] transition-all hover:bg-[#0fd672] hover:shadow-[0_0_25px_rgba(19,236,128,0.4)] active:scale-[0.99]"
            >
              Cancel
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => {}}
              type="submit"
              className="bg-green-light mt-4 flex h-12 transform cursor-pointer items-center justify-center rounded-lg px-4 text-base leading-normal font-bold tracking-[0.015em] text-[#11221a] shadow-[0_0_20px_rgba(19,236,128,0.2)] transition-all hover:bg-[#0fd672] hover:shadow-[0_0_25px_rgba(19,236,128,0.4)] active:scale-[0.99]"
            >
              Save
            </Button>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ProfileSettings;

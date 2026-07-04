import Image from "next/image";
import { AuthenticatedUserProfile } from "./authApi";

export default function UserProfileMenuBadge({ profile }: { profile: AuthenticatedUserProfile }) {
  const nameFirstLetter = profile.fullName.trim().charAt(0).toUpperCase() || "U";

  return (
    <div className="flex items-center gap-3">
      <span className="font-poppins text-[15px] font-medium text-brand-text whitespace-nowrap">{profile.fullName}</span>
      <div className="relative w-9 h-9 shrink-0 rounded-full border-2 border-brand-accent overflow-hidden bg-brand-border flex items-center justify-center">
        {profile.profileImageUrl ? (
          <Image src={profile.profileImageUrl} alt={profile.fullName} fill className="object-cover" />
        ) : (
          <span className="font-poppins font-bold text-[14px] text-brand-accent">
            {nameFirstLetter}
          </span>
        )}
      </div>
    </div>
  );
}

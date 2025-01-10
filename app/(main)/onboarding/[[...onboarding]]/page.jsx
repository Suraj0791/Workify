"use client";

import { OrganizationList, useOrganization } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



// A slug is a part of a URL that uniquely identifies a resource in a readable and SEO-friendly way. It's often used to replace IDs or technical identifiers with a more human-readable and descriptive string. For example:

// Instead of: /organization/12345
// Use: /organization/roadside-coders
// Slugs are typically used in dynamic routing to improve user experience and search engine optimization (SEO).



export default function Onboarding() {
  const { organization } = useOrganization();
  const router = useRouter();

  useEffect(() => {

    //if the organization is found then we will redirect the user to the organization page. we are using the slug of the organization to redirect the user to the organization page. we are using the slug because it is more readable and SEO-friendly.
    if (organization) {
      router.push(`/organization/${organization.slug}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [organization]);

  return (
    <div className="flex justify-center items-center pt-14">
      <OrganizationList
        hidePersonal
        afterCreateOrganizationUrl="/organization/:slug"
        afterSelectOrganizationUrl="/organization/:slug"
      />
    </div>
  );
}
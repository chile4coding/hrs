import { useRouter } from "next/router";
import Link from "next/link";

const ActiveLink = ({ href, children }) => {
  const router = useRouter();

  // Check if the current route matches the link's href
  const isActive = router.pathname === href;

  console.log(href)

  // Define the class names based on isActive
  const className = isActive ? "active" : "";

  return (
    <Link
      href={href}
      className={`flex p-2   rounded-sm text-md w-full bg-transparent  border-0 text-[#0F0F0FBF] hover:bg-transparent hover:text-[#3188FF]   items-center gap-2 ${className}`}>
      {children}
    </Link>
  );
};

export default ActiveLink;

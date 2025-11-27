import {
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Promo() {
  return (
    <div className=" bg-[#23856D] text-white ">
      <div className="max-w-6xl hidden md:flex justify-between p-6 py-4 mx-auto">
        <div className="flex gap-6">
          <Link className="flex gap-3 hover:text-gray-200" href={"#"}>
            <Phone />
            (225) 555-0118
          </Link>
          <Link className="flex gap-3 hover:text-gray-200" href={"#"}>
            <Mail />
            michelle.rivera@example.com
          </Link>
        </div>
        <div className="flex gap-6 justify-center">
          <div className="font-bold text-md">
            Follow Us and get a chance to win 80% off
          </div>
          <div className="flex gap-3">
            Follow Us:
            <Link href={"#"} className="hover:text-gray-200">
              <Instagram />
            </Link>
            <Link href={"#"} className="hover:text-gray-200">
              <Youtube />
            </Link>
            <Link href={"#"} className="hover:text-gray-200">
              <Facebook />
            </Link>
            <Link href={"#"} className="hover:text-gray-200">
              <Twitter />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

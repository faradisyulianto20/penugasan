import {
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
} from "lucide-react";

export default function Promo() {
  return (
    <div className=" bg-[#23856D] text-white ">
      <div className="max-w-7xl hidden sm:flex justify-between p-6 mx-auto">
        <div className="flex gap-6">
          <div className="flex gap-3">
            <Phone />
            (225) 555-0118
          </div>
          <div className="flex gap-3">
            <Mail />
            michelle.rivera@example.com
          </div>
        </div>
        <div className="flex gap-6 justify-center">
          <div className="font-bold text-md">
            Follow Us and get a chance to win 80% off
          </div>
          <div className="flex gap-3">
            Follow Us: <Instagram />
            <Youtube />
            <Facebook />
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  );
}

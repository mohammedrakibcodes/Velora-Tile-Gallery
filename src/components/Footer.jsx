import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#202940] text-white">
      <div className="mx-auto max-w-7xl px-5 py-4 text-center sm:px-6 sm:py-7 lg:px-4 lg:py-5">
        <Image
          src="/velora.png"
          alt="Velora Logo"
          width={300}
          height={300}
          priority
          className="mx-auto h-28 w-auto object-contain sm:h-32 md:h-36 lg:h-44"
        />

        <p className="mx-auto mt-4 max-w-2xl px-2 text-sm text-slate-300 sm:text-base">
          Discover premium tile collections designed to elevate modern
          interiors. Explore timeless styles, elegant finishes, and inspiring
          designs for every space.
        </p>

        <div className="mt-6 space-y-2">
          <h3 className="text-lg font-semibold text-[#CAAA98] sm:text-xl">
            Contact Us
          </h3>

          <p className="text-sm text-slate-300 sm:text-base">
            support@velora.com
          </p>

          <p className="text-sm text-slate-300 sm:text-base">
            +1 (234) 567-890
          </p>
        </div>

        <h3 className="mt-6 text-lg font-semibold sm:text-xl">Social Links</h3>

        <div className="mt-5 flex justify-center gap-3 sm:gap-4">
          <Link
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:scale-110 sm:h-12 sm:w-12"
          >
            <FaInstagram size={18} />
          </Link>

          <Link
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:scale-110 sm:h-12 sm:w-12"
          >
            <FaFacebookF size={18} />
          </Link>

          <Link
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:scale-110 sm:h-12 sm:w-12"
          >
            <FaXTwitter size={18} />
          </Link>
        </div>

        <div className="mt-7 border-t border-white/10 pt-4">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-300 md:flex-row md:text-left">
            <p>© 2026 Velora. All rights reserved.</p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
              <Link href="#">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

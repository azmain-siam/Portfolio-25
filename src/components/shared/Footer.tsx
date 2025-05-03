import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <section>
      <div className="relative w-full">
        {/* Main Indigo Line */}
        <div className="absolute left-12 right-12 md:left-60 md:right-60 top-0 bg-gradient-to-r from-transparent via-sky-900/60 to-transparent h-[2px] blur-sm" />
        <div className="absolute left-4 right-4 md:left-20 md:right-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] blur-sm" />
        <div className="absolute left-4 right-4 md:left-20 md:right-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px" />

        {/* Highlight Sky Line */}
        <div className="absolute left-12 right-12 md:left-60 md:right-60 top-0 bg-gradient-to-r from-transparent via-sky-900/20  to-transparent h-px" />
      </div>

      <footer className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4 gradient-text">Siam</h3>
              <p className="text-gray-400 mb-4 max-w-md">
                A passionate web developer focused on creating beautiful,
                functional, and user-friendly websites and applications.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/azmain-siam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-300 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/azmain-siam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-300 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="mailto:siam.hossain.dev@gmail.com"
                  className="text-gray-400 hover:text-indigo-300 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-indigo-300 transition-colors text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="text-gray-400 hover:text-indigo-300 transition-colors text-sm"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-gray-400 hover:text-indigo-300 transition-colors text-sm"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-400 hover:text-indigo-300 transition-colors text-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-gray-400 hover:text-indigo-300 transition-colors text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-indigo-300 transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-indigo-300 transition-colors text-sm"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-indigo-500/10 mt-12 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Siam. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}

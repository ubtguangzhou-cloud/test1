import Link from "next/link";

const footerLinks = {
  Shop: [
    { label: "All Products", href: "/products" },
    { label: "Comforters", href: "/collections/comforters" },
    { label: "Pillows", href: "/collections/pillows" },
    { label: "Bedding Sets", href: "/collections/bedding-sets" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Story", href: "/story" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Contact", href: "/contact" },
  ],
  Support: [
    { label: "FAQ", href: "/faq" },
    { label: "Shipping", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "Care Guide", href: "/care" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-semibold text-foreground">
              SilkDream
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Premium silk bedding for the perfect night&apos;s sleep.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-foreground mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} SilkDream. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

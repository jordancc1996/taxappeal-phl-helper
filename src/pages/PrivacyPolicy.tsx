import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="px-8 py-8 bg-white border-b border-border/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-display font-light lowercase text-foreground hover:opacity-70 transition-opacity">
            philly tax appeals
          </Link>
          <div className="flex gap-8 text-foreground font-body text-sm">
            <Link to="/bucks-county-property-tax-appeal" className="hover:opacity-70 transition-opacity">Bucks County</Link>
            <Link to="/delaware-county-property-tax-appeal" className="hover:opacity-70 transition-opacity">Delaware County</Link>
            <Link to="/montgomery-county-property-tax-appeal" className="hover:opacity-70 transition-opacity">Montgomery County</Link>
            <Link to="/philadelphia-property-tax-appeal" className="hover:opacity-70 transition-opacity">Philadelphia</Link>
            <Link to="/#contact" className="hover:opacity-70 transition-opacity">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-8 md:px-12 py-24 md:py-32">
        <h1 className="font-display text-foreground mb-16 leading-[1.05]" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Privacy Policy
        </h1>

        <div className="space-y-12 text-foreground">
          <section className="space-y-4">
            <p className="text-base md:text-lg font-body leading-relaxed">
              Last Updated: November 25, 2024
            </p>
            <p className="text-base md:text-lg font-body leading-relaxed">
              Philly Tax Appeals ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-display text-foreground">
              Information We Collect
            </h2>
            <p className="text-base md:text-lg font-body leading-relaxed">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="space-y-2 text-base md:text-lg font-body leading-relaxed ml-6">
              <li>• Submit a tax appeal request form</li>
              <li>• Contact us via email or phone</li>
              <li>• Subscribe to our newsletter or communications</li>
              <li>• Engage with our services</li>
            </ul>
            <p className="text-base md:text-lg font-body leading-relaxed">
              This information may include your name, email address, phone number, property address, and any other details you choose to provide.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-display text-foreground">
              How We Use Your Information
            </h2>
            <p className="text-base md:text-lg font-body leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="space-y-2 text-base md:text-lg font-body leading-relaxed ml-6">
              <li>• Provide and manage our tax appeal services</li>
              <li>• Respond to your inquiries and provide customer support</li>
              <li>• Send you updates about your property tax appeal</li>
              <li>• Improve our website and services</li>
              <li>• Comply with legal obligations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-display text-foreground">
              Information Sharing and Disclosure
            </h2>
            <p className="text-base md:text-lg font-body leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="space-y-2 text-base md:text-lg font-body leading-relaxed ml-6">
              <li>• With your consent or at your direction</li>
              <li>• With service providers who assist us in operating our business</li>
              <li>• To comply with legal obligations or respond to lawful requests</li>
              <li>• To protect our rights, property, or safety, or that of others</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-display text-foreground">
              Data Security
            </h2>
            <p className="text-base md:text-lg font-body leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-display text-foreground">
              Your Rights
            </h2>
            <p className="text-base md:text-lg font-body leading-relaxed">
              You have the right to:
            </p>
            <ul className="space-y-2 text-base md:text-lg font-body leading-relaxed ml-6">
              <li>• Access the personal information we hold about you</li>
              <li>• Request correction of inaccurate information</li>
              <li>• Request deletion of your personal information</li>
              <li>• Object to or restrict processing of your information</li>
              <li>• Withdraw consent where applicable</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-display text-foreground">
              Cookies and Tracking
            </h2>
            <p className="text-base md:text-lg font-body leading-relaxed">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-display text-foreground">
              Changes to This Privacy Policy
            </h2>
            <p className="text-base md:text-lg font-body leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-display text-foreground">
              Contact Us
            </h2>
            <p className="text-base md:text-lg font-body leading-relaxed">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="text-base md:text-lg font-body leading-relaxed">
              <p>Email: <a href="mailto:jordan@phillytaxappeals.com" className="hover:opacity-60 transition-opacity">jordan@phillytaxappeals.com</a></p>
              <p>Phone: <a href="tel:+12676323162" className="hover:opacity-60 transition-opacity">(267) 632-3162</a></p>
              <p>Address: Philadelphia, PA</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

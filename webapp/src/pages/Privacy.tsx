import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const sections = [
  {
    number: 1,
    title: "Who We Are",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        Bonus Vault is owned and operated by Horizon Labs LLC, a limited liability company organized under the laws of the State of Colorado. References to "we," "us," or "our" in this Policy refer to Horizon Labs LLC. For privacy inquiries, contact us at{" "}
        <a href="mailto:support@bonusvault.app" className="text-primary hover:underline">
          support@bonusvault.app
        </a>
        .
      </p>
    ),
  },
  {
    number: 2,
    title: "Information We Collect",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed font-medium mb-3">
          Information you provide directly:
        </p>
        <ul className="mt-1 mb-4 space-y-2 text-muted-foreground leading-relaxed list-none">
          <li className="flex gap-2">
            <span className="text-primary mt-0.5 shrink-0">•</span>
            <span>
              <span className="text-foreground/80 font-medium">Account information:</span> When you register, we collect your email address and a hashed version of your password. We do not store your password in plain text.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary mt-0.5 shrink-0">•</span>
            <span>
              <span className="text-foreground/80 font-medium">Communications:</span> If you contact our support team, we retain the content of your messages to assist with your inquiry.
            </span>
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed font-medium mb-3">
          Information collected automatically:
        </p>
        <ul className="mt-1 mb-4 space-y-2 text-muted-foreground leading-relaxed list-none">
          <li className="flex gap-2">
            <span className="text-primary mt-0.5 shrink-0">•</span>
            <span>
              <span className="text-foreground/80 font-medium">Usage data:</span> We may collect information about how you interact with the Service, including features accessed, time spent, and crash reports, to improve the app's performance and user experience.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary mt-0.5 shrink-0">•</span>
            <span>
              <span className="text-foreground/80 font-medium">Device information:</span> We may collect your device type, operating system version, and app version for diagnostic and analytics purposes.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary mt-0.5 shrink-0">•</span>
            <span>
              <span className="text-foreground/80 font-medium">Purchase information:</span> In-App Purchase transactions are processed by Apple. We receive confirmation of completed purchases but do not receive or store your payment card information.
            </span>
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          We do not collect: financial account numbers, bank credentials, Social Security numbers, or any sensitive financial data from your accounts.
        </p>
      </>
    ),
  },
  {
    number: 3,
    title: "How We Use Your Information",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          We use collected information to: (a) create and maintain your account; (b) provide, operate, and improve the Service; (c) process and verify In-App Purchases; (d) send transactional communications such as password resets and support responses; (e) detect and prevent fraud, abuse, or security incidents; and (f) comply with applicable legal obligations.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          We do not sell your personal information to third parties. We do not use your information for targeted advertising.
        </p>
      </>
    ),
  },
  {
    number: 4,
    title: "Legal Basis for Processing (if applicable)",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        Where required by applicable law, we process your data based on: (a) performance of a contract — to provide the Service you've requested; (b) our legitimate interests — to operate and improve the Service and prevent fraud; and (c) your consent — where you have explicitly agreed to a specific use.
      </p>
    ),
  },
  {
    number: 5,
    title: "How We Share Your Information",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We do not sell or rent your personal information. We may share your information only in the following limited circumstances:
        </p>
        <ul className="space-y-2 text-muted-foreground leading-relaxed list-none">
          <li className="flex gap-2">
            <span className="text-primary mt-0.5 shrink-0">•</span>
            <span>
              <span className="text-foreground/80 font-medium">Service providers:</span> We may share data with trusted third-party vendors who assist us in operating the Service (e.g., cloud hosting, analytics, crash reporting), subject to confidentiality obligations.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary mt-0.5 shrink-0">•</span>
            <span>
              <span className="text-foreground/80 font-medium">Apple Inc.:</span> In-App Purchase processing is handled by Apple in accordance with Apple's Privacy Policy.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary mt-0.5 shrink-0">•</span>
            <span>
              <span className="text-foreground/80 font-medium">Legal compliance:</span> We may disclose information if required by law, regulation, legal process, or governmental request.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary mt-0.5 shrink-0">•</span>
            <span>
              <span className="text-foreground/80 font-medium">Business transfers:</span> In the event of a merger, acquisition, or sale of all or substantially all of Horizon Labs' assets, your information may be transferred as part of that transaction.
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    number: 6,
    title: "Data Retention",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        We retain your account information for as long as your account is active or as needed to provide the Service. If you delete your account, we will delete or anonymize your personal data within a reasonable period, except where retention is required by law or legitimate business purposes such as dispute resolution.
      </p>
    ),
  },
  {
    number: 7,
    title: "Data Security",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          We implement reasonable technical and organizational measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security of your data.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          In the event of a data breach that affects your rights and freedoms, we will notify affected users as required by applicable law.
        </p>
      </>
    ),
  },
  {
    number: 8,
    title: "Children's Privacy",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        The Service is not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you believe a minor has provided us with personal information, please contact us at{" "}
        <a href="mailto:support@bonusvault.app" className="text-primary hover:underline">
          support@bonusvault.app
        </a>{" "}
        and we will take steps to delete such information promptly.
      </p>
    ),
  },
  {
    number: 9,
    title: "Your Rights and Choices",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          Depending on your jurisdiction, you may have the right to: access the personal information we hold about you; correct inaccurate data; request deletion of your data; object to or restrict certain processing; and withdraw consent where processing is based on consent.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          To exercise any of these rights, please contact us at{" "}
          <a href="mailto:support@bonusvault.app" className="text-primary hover:underline">
            support@bonusvault.app
          </a>
          . We will respond to your request within a reasonable timeframe.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          You may delete your Bonus Vault account at any time through the app's settings. Account deletion will result in permanent loss of your saved data.
        </p>
      </>
    ),
  },
  {
    number: 10,
    title: "California Privacy Rights (CCPA)",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        If you are a California resident, you have the right to know what personal information we collect about you and how it is used, the right to request deletion of your personal information, and the right not to be discriminated against for exercising these rights. As noted above, we do not sell personal information. To submit a request, contact us at{" "}
        <a href="mailto:support@bonusvault.app" className="text-primary hover:underline">
          support@bonusvault.app
        </a>
        .
      </p>
    ),
  },
  {
    number: 11,
    title: "Third-Party Services",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        The Service may link to or integrate with third-party services, including Bank websites and the Apple App Store. This Privacy Policy does not apply to those third parties. We encourage you to review the privacy policies of any third-party services you interact with.
      </p>
    ),
  },
  {
    number: 12,
    title: "Changes to This Policy",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        We may update this Privacy Policy from time to time. When we do, we will update the "Effective Date" at the top of this page. Continued use of the Service after any changes constitutes your acceptance of the updated Policy. For material changes, we will make reasonable efforts to notify you through the app or via email.
      </p>
    ),
  },
  {
    number: 13,
    title: "Contact Us",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        If you have questions, concerns, or requests related to this Privacy Policy, please contact:
        <br />
        <br />
        <span className="text-foreground font-medium">Horizon Labs LLC — Bonus Vault</span>
        <br />
        <a href="mailto:support@bonusvault.app" className="text-primary hover:underline">
          support@bonusvault.app
        </a>
      </p>
    ),
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-16">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-sans mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="font-display text-4xl font-bold text-foreground tracking-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground font-sans">
              Bonus Vault &middot; Effective Date: 03/24/2026 &middot; Horizon Labs LLC, Colorado
            </p>
          </div>

          {/* Intro */}
          <p className="text-muted-foreground leading-relaxed mb-10">
            This Privacy Policy describes how Horizon Labs LLC collects, uses, and protects your information when you use Bonus Vault.
          </p>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.number}>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  {section.number}. {section.title}
                </h2>
                {section.content}
              </section>
            ))}
          </div>

          {/* Bottom divider */}
          <div className="mt-16 pt-8 border-t border-border/30">
            <p className="text-xs text-muted-foreground font-sans text-center">
              &copy; {new Date().getFullYear()} Horizon Labs LLC. All rights reserved.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import { Link } from "react-router-dom";
import { TriangleAlert, ArrowLeft } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const sections = [
  {
    number: 1,
    title: "Agreement to Terms",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you") and Horizon Labs LLC ("Horizon Labs," "we," "us," or "our"), a limited liability company organized under the laws of the State of Colorado. These Terms govern your access to and use of the Bonus Vault mobile application, website, and related services (collectively, the "Service").
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          By downloading, installing, accessing, or using the Service, you affirm that you are at least 18 years of age, have read and understood these Terms, and agree to be bound by them. If you do not agree, do not access or use the Service.
        </p>
      </>
    ),
  },
  {
    number: 2,
    title: "Description of Service",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          Bonus Vault is an informational platform that aggregates and displays information about bank account opening bonuses, promotional offers, and related financial incentives offered by third-party financial institutions ("Banks"). The Service is designed to help users discover and track publicly available bonus promotions.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Bonus Vault is not a bank, financial institution, financial advisor, or broker-dealer. We do not hold, transfer, or manage any funds on your behalf.
        </p>
      </>
    ),
  },
  {
    number: 3,
    title: "No Guarantee of Promotions — Important Disclaimer",
    highlighted: true,
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed font-medium mb-3">
          This section is critical. Please read it carefully.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          All bonus offers, promotional rates, qualifying requirements, and related information displayed within the Service are sourced from third-party Banks and are subject to change or discontinuation at any time, at the sole discretion of those Banks, without prior notice to Horizon Labs or to you.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Horizon Labs LLC makes no representations, warranties, or guarantees — express or implied — that:
        </p>
        <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed list-none">
          <li className="flex gap-2"><span className="text-primary mt-0.5">•</span>Any bonus or promotion displayed in the Service is currently available, accurate, or complete;</li>
          <li className="flex gap-2"><span className="text-primary mt-0.5">•</span>You will qualify for or receive any bonus or promotion;</li>
          <li className="flex gap-2"><span className="text-primary mt-0.5">•</span>The terms of any promotion will remain unchanged from the time of display;</li>
          <li className="flex gap-2"><span className="text-primary mt-0.5">•</span>Any Bank will honor a promotion after it has been modified or withdrawn.</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4">
          You acknowledge and agree that it is your sole responsibility to verify the current terms, availability, and qualifying requirements of any promotion directly with the applicable Bank before opening any account or taking any financial action. Horizon Labs shall not be liable for any losses, damages, or expenses arising from your reliance on information displayed in the Service.
        </p>
      </>
    ),
  },
  {
    number: 4,
    title: "Account Registration",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          To access certain features of the Service, you must create an account using a valid email address and password. You agree to provide accurate, current, and complete information during registration and to update such information as necessary to keep it accurate.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          You are solely responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to notify us immediately at{" "}
          <a href="mailto:support@bonusvault.app" className="text-primary hover:underline">
            support@bonusvault.app
          </a>{" "}
          if you suspect any unauthorized use of your account. Horizon Labs will not be liable for any loss or damage arising from your failure to comply with these obligations.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          We reserve the right to suspend or terminate any account that we believe, in our sole discretion, violates these Terms or poses a risk to the Service or other users.
        </p>
      </>
    ),
  },
  {
    number: 5,
    title: "In-App Purchases and Subscriptions",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          Bonus Vault may offer premium features, subscriptions, or one-time purchases through the Apple App Store ("In-App Purchases"). All In-App Purchases are processed by Apple Inc. and are subject to Apple's Terms of Sale and applicable App Store policies.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          All purchases are final. Horizon Labs does not offer refunds for In-App Purchases except as required by applicable law or Apple's refund policies. If you believe you are entitled to a refund, please submit your request directly through the App Store.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current subscription period. You can manage and cancel subscriptions in your Apple ID account settings.
        </p>
      </>
    ),
  },
  {
    number: 6,
    title: "Acceptable Use",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        You agree not to use the Service to: (a) violate any applicable federal, state, or local law or regulation; (b) scrape, harvest, or systematically extract data from the Service without our express written permission; (c) attempt to gain unauthorized access to any part of the Service or its related systems; (d) transmit any malicious code, viruses, or disruptive software; (e) impersonate any person or entity; or (f) engage in any conduct that restricts or inhibits any other user's use or enjoyment of the Service.
      </p>
    ),
  },
  {
    number: 7,
    title: "Intellectual Property",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        The Service, including all software, design, text, graphics, logos, and other content, is owned by or licensed to Horizon Labs LLC and is protected by applicable intellectual property laws. You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your personal, non-commercial purposes. No other rights are granted.
      </p>
    ),
  },
  {
    number: 8,
    title: "Disclaimer of Warranties",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        The Service is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, accuracy, or non-infringement. Horizon Labs does not warrant that the Service will be uninterrupted, error-free, or free of viruses or other harmful components.
      </p>
    ),
  },
  {
    number: 9,
    title: "Limitation of Liability",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          To the fullest extent permitted by applicable law, Horizon Labs LLC and its members, managers, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to lost profits, lost data, loss of goodwill, or damages arising from your reliance on information provided through the Service, even if Horizon Labs has been advised of the possibility of such damages.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          In no event shall Horizon Labs's total aggregate liability to you exceed the greater of (a) the amount you paid to Horizon Labs in the twelve (12) months preceding the claim, or (b) one hundred dollars ($100.00 USD).
        </p>
      </>
    ),
  },
  {
    number: 10,
    title: "Indemnification",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        You agree to indemnify, defend, and hold harmless Horizon Labs LLC and its members, managers, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or in connection with: (a) your use of or access to the Service; (b) your violation of these Terms; or (c) your violation of any third-party right, including any intellectual property right or privacy right.
      </p>
    ),
  },
  {
    number: 11,
    title: "Third-Party Links and Content",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        The Service may contain links to third-party websites, including Bank websites. These links are provided for informational purposes only. Horizon Labs does not control, endorse, or assume responsibility for the content, privacy practices, or terms of any third-party websites. Your interactions with third-party websites are solely between you and those parties.
      </p>
    ),
  },
  {
    number: 12,
    title: "Modifications to the Service and Terms",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        Horizon Labs reserves the right to modify, suspend, or discontinue the Service (or any part thereof) at any time with or without notice. We also reserve the right to update these Terms at any time. We will notify you of material changes by updating the "Effective Date" at the top of this page. Your continued use of the Service following any changes constitutes your acceptance of the updated Terms.
      </p>
    ),
  },
  {
    number: 13,
    title: "Governing Law and Dispute Resolution",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        These Terms shall be governed by and construed in accordance with the laws of the State of Colorado, without regard to its conflict of law principles. Any dispute arising from or relating to these Terms or the Service shall be subject to the exclusive jurisdiction of the state and federal courts located in Colorado.
      </p>
    ),
  },
  {
    number: 14,
    title: "Severability",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        If any provision of these Terms is found to be unenforceable or invalid by a court of competent jurisdiction, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
      </p>
    ),
  },
  {
    number: 15,
    title: "Contact",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        If you have questions about these Terms, please contact us at:
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

export default function Terms() {
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
          <div className="mb-8">
            <h1 className="font-display text-4xl font-bold text-foreground tracking-tight mb-3">
              Terms of Service
            </h1>
            <p className="text-sm text-muted-foreground font-sans">
              Bonus Vault &middot; Effective Date: 03/24/2026 &middot; Horizon Labs LLC, Colorado
            </p>
          </div>

          {/* Warning banner */}
          <div className="flex gap-3 bg-status-wait/10 border border-status-wait/30 rounded-lg p-4 mb-12">
            <TriangleAlert className="w-5 h-5 text-status-wait shrink-0 mt-0.5" />
            <p className="text-sm text-foreground/90 font-sans leading-relaxed">
              Please read these terms carefully before using Bonus Vault. By creating an account or using the app, you agree to be bound by these terms.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.number}>
                <h2 className="text-xl font-semibold font-display text-foreground mb-3">
                  {section.number}. {section.title}
                </h2>
                {section.highlighted ? (
                  <div className="bg-card border border-border rounded-lg p-4">
                    {section.content}
                  </div>
                ) : (
                  section.content
                )}
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

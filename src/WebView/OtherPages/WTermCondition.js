import React from "react";
import { Link } from "react-router-dom";

const WTermCondition = () => {
  return (
    <main className="main">
      <section className="serv-comp">
        <div className="common-container">
          <div className="comn-heading">
            <h3>
              Terms <span>Conditions</span>
            </h3>

            <strong>Effective Date: 11 Sep 2025</strong>

            <p>
              By accessing or using Nikah-e-Muslim (“the Platform”), you agree
              to comply with and be bound by these Terms & Conditions. If you do
              not agree with any part of these terms, you must discontinue use
              of the platform immediately.
            </p>

            <strong>1. Use of the Service</strong>
            <p>
              Nikah-e-Muslim is a matrimonial and matchmaking platform created
              for Muslims seeking marriage through a halal, respectful, and
              value-based process. Users must be legally eligible for marriage
              and must use the platform solely for genuine matrimonial purposes.
            </p>

            <strong>2. User Eligibility & Conduct</strong>
            <p>
              By using this platform, you confirm that all information provided
              in your profile is accurate, truthful, and up to date. Any form of
              misleading information, impersonation, abuse, harassment, or
              inappropriate behavior is strictly prohibited and may result in
              account suspension or permanent termination.
            </p>

            <strong>3. Account Registration & Security</strong>
            <p>
              To access certain features, users must create an account. You are
              responsible for maintaining the confidentiality of your login
              credentials and for all activities conducted through your account.
              Nikah-e-Muslim shall not be liable for unauthorized account access
              caused by user negligence.
            </p>

            <strong>4. Subscription & Payments</strong>
            <p>
              Nikah-e-Muslim offers free and paid subscription plans. Paid
              features may include messaging, contact visibility, and enhanced
              profile access. All payments are subject to our Return & Refund
              Policy, and subscription fees are generally non-refundable once
              activated.
            </p>

            <strong>5. Privacy & Data Protection</strong>
            <p>
              Your use of the platform is also governed by our Privacy Policy.
              We take user privacy seriously and provide tools to control
              profile visibility, photo access, and personal information
              sharing.
            </p>

            <strong>6. Intellectual Property</strong>
            <p>
              All content, trademarks, logos, designs, and software associated
              with Nikah-e-Muslim are the intellectual property of the platform
              and are protected by applicable laws. Unauthorized copying,
              modification, or distribution is strictly prohibited.
            </p>

            <strong>7. Limitation of Liability</strong>
            <p>
              Nikah-e-Muslim provides matchmaking services on an “as-is” basis
              and does not guarantee marriage outcomes. We are not responsible
              for user interactions, decisions, or outcomes arising from
              connections made through the platform.
            </p>

            <strong>8. Termination of Service</strong>
            <p>
              Nikah-e-Muslim reserves the right to suspend or terminate any
              account that violates these Terms & Conditions, applicable laws,
              or Islamic ethical guidelines, without prior notice.
            </p>

            <strong>9. Changes to Terms</strong>
            <p>
              We reserve the right to update or modify these Terms at any time.
              Continued use of the platform after changes are posted constitutes
              acceptance of the revised Terms.
            </p>

            <strong>10. Governing Law & Contact</strong>
            <p>
              These Terms & Conditions are governed by the laws of India. If you
              have any questions or concerns, please contact us through the
              official support channels available on Nikah-e-Muslim.
            </p>
            <strong>11. Account Deletion</strong>
            <p>
              Users may request deletion of their Nikah-e-Muslim account at any
              time through the account settings or by contacting our support
              team. Upon successful verification of the request, your profile
              will be removed from public view and your account will be
              permanently deleted within a reasonable period, unless retention
              of certain information is required by applicable law, fraud
              prevention, dispute resolution, or other legitimate business
              purposes. Once the account is permanently deleted, it cannot be
              recovered, and any active subscription or unused benefits will be
              governed by our Return & Refund Policy.{" "}
              <Link to={"/contact-us"}>Delete Account</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WTermCondition;

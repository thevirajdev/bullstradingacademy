import { LegalPage } from './legal-layout'

export function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="May 12, 2024">
      <section>
        <h2>1. Information We Collect</h2>
        <p>
          Bulls Trading Academy collects information that you provide directly to us when you register for a course, 
          sign up for our newsletter, or contact our support team. This may include your name, email address, phone number, 
          and payment information.
        </p>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect to provide, maintain, and improve our services, 
          process your transactions, and communicate with you about new courses, events, and trading insights.
        </p>
      </section>

      <section>
        <h2>3. Data Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information. 
          However, no method of transmission over the Internet is 100% secure.
        </p>
      </section>

      <section>
        <h2>4. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at support@bullstrading.in
        </p>
      </section>
    </LegalPage>
  )
}

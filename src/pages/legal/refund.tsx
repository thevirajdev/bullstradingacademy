import { LegalPage } from './legal-layout'

export function RefundPolicy() {
  return (
    <LegalPage title="Refund Policy" lastUpdated="May 12, 2024">
      <section>
        <h2>1. No Refund Policy</h2>
        <p>
          Due to the digital nature of our educational content and services, Bulls Trading Academy maintains a 
          <strong> strictly no-refund policy</strong>. Once access to a course or mentorship program is granted, 
          the value of the information has been delivered.
        </p>
      </section>

      <section>
        <h2>2. Exception Requests</h2>
        <p>
          Exceptions may be considered in extreme cases of technical failure on our part that prevents access 
          to the content for more than 7 consecutive days, provided the issue is reported within 24 hours of occurrence.
        </p>
      </section>

      <section>
        <h2>3. Course Transfers</h2>
        <p>
          Students may request a one-time transfer to a future batch or a different course of equal value 
          before the course start date, subject to availability and approval.
        </p>
      </section>
    </LegalPage>
  )
}

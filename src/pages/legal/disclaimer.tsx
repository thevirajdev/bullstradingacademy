import { LegalPage } from './legal-layout'

export function Disclaimer() {
  return (
    <LegalPage title="Disclaimer" lastUpdated="May 12, 2024">
      <section>
        <h2>1. Trading Risk Warning</h2>
        <p>
          Trading financial markets carries a high level of risk and may not be suitable for all investors. 
          The high degree of leverage can work against you as well as for you. Before deciding to trade, 
          you should carefully consider your investment objectives, level of experience, and risk appetite.
        </p>
      </section>

      <section>
        <h2>2. No Financial Advice</h2>
        <p>
          Bulls Trading Academy is an educational institution. We do not provide financial advice, 
          investment recommendations, or managed trading services. All information shared is for educational 
          purposes only.
        </p>
      </section>

      <section>
        <h2>3. Past Performance</h2>
        <p>
          Past results are not indicative of future performance. Any testimonials or examples of student success 
          are not guarantees that you will achieve similar results. Trading requires skill, discipline, and effort.
        </p>
      </section>
    </LegalPage>
  )
}

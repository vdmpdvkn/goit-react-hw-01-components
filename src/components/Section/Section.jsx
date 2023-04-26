export const Section = ({ title, children }) => (
  <section style={{ paddingTop: '40px', paddingBottom: '40px' }}>
    {title && (
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>{title}</h2>
    )}
    {children}
  </section>
);

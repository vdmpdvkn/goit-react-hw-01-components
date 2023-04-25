export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h2 className="title">Upload stats</h2>}
      <ul>
        {stats.map(element => {
          return (
            <li key={element.id} className="item">
              <span className="label">{element.label}</span>
              <span className="percentage">{element.percentage}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

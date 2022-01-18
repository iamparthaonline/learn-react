const Loop = function () {
  const loopArray = ["Piyanshee", "Vishwanath", "Tanisha", "Vedanshee"];

  return (
    <div>
      Loop
      <ul>
        {loopArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Loop;

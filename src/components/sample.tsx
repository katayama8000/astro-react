export const Sample = () => {
  const fruits = ["apple", "banana", "orange"];
  return (
    <div>
      <h1 className="text-red-200">Sample</h1>
      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

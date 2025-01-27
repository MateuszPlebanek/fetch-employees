import React, { useEffect, useState } from "react";

// Interface pour les employés
interface Employee {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    medium: string;
  };
}

const App: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Employees</h1>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            <h2>
              {employee.name.first} {employee.name.last}
            </h2>
            <p>{employee.email}</p>
            <img src={employee.picture.medium} alt={`${employee.name.first} ${employee.name.last}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

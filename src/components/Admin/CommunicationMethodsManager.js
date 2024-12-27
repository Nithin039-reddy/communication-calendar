function CommunicationMethodsManager() {
  const [methods, setMethods] = useState([
    { name: "LinkedIn Post", description: "Post on LinkedIn", sequence: 1, mandatory: true },
    { name: "Email", description: "Send email", sequence: 2, mandatory: false },
  ]);

  const addMethod = (method) => {
    setMethods([...methods, method]);
  };

  return (
    <div>
      <h3>Communication Methods</h3>
      <ul>
        {methods.map((method, index) => (
          <li key={index}>
            {method.sequence}. {method.name}: {method.description}{" "}
            {method.mandatory ? "(Mandatory)" : ""}
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const newMethod = {
            name: formData.get("name"),
            description: formData.get("description"),
            sequence: parseInt(formData.get("sequence")),
            mandatory: formData.get("mandatory") === "on",
          };
          addMethod(newMethod);
        }}
      >
        <input name="name" placeholder="Name" required />
        <input name="description" placeholder="Description" />
        <input name="sequence" type="number" placeholder="Sequence" required />
        <label>
          <input name="mandatory" type="checkbox" />
          Mandatory
        </label>
        <button type="submit">Add Method</button>
      </form>
    </div>
  );
}

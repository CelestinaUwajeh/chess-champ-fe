const Role = ({ role }: { role: string }) => {
  return (
    <div>
      <p className="text-xl font-medium mb-8">Role</p>
      <p>
        I am using chess champs as:{" "}
        <span className="font-medium text-xl">{role}</span>
      </p>
    </div>
  );
};

export default Role;

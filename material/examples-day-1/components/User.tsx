import "./User.css";

type UserProps = {
  name: string;
  email: string;
  phone: string;
};

function User({ name, email, phone }: UserProps) {
  return (
    <div className="User">
      <h4>{name}</h4>
      <div>Email: {email}</div>
      <div>Phone: {phone}</div>
    </div>
  );
}

export default User;

import "./Input.css";

type InputProps = {
  name: string;
  value: string | number;
  label: string;
  onChange: (value: string) => void;
  error?: string | null;
};

function Input({ name, value, label, onChange, error = null }: InputProps) {
  return (
    <div className="Input">
      <label className="Input-label">{label}</label>
      <input
        className={`Input-input ${error ? "Input-error" : ""}`}
        name={name}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        placeholder={label}
      />
      {error && <div className="Input-error-message">{error}</div>}
    </div>
  );
}

export default Input;

interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: string;
}

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  required = false,
  disabled = false,
  autoComplete,
}: InputProps) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      autoComplete={autoComplete}
      className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200 disabled:cursor-not-allowed disabled:bg-gray-100"
    />
  );
}
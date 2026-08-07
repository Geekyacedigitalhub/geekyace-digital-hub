interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  name?: string;
}

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}: InputProps) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
    />
  );
}
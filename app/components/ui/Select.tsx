interface SelectProps {
  name?: string;
  value?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  children: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
}

export default function Select({
  name,
  value,
  onChange,
  children,
  required = false,
  disabled = false,
}: SelectProps) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className="w-full rounded-xl border border-gray-300 bg-white px-5 py-4 text-gray-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200 disabled:cursor-not-allowed disabled:bg-gray-100"
    >
      {children}
    </select>
  );
}
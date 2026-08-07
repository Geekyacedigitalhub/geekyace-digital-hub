interface SelectProps {
  name?: string;
  value?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  children: React.ReactNode;
}

export default function Select({
  name,
  value,
  onChange,
  children,
}: SelectProps) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full rounded-xl border border-gray-300 bg-white px-5 py-4 text-gray-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
    >
      {children}
    </select>
  );
}
interface TextareaProps {
  name?: string;
  placeholder?: string;
  value?: string;
  rows?: number;
  onChange?: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  disabled?: boolean;
}

export default function Textarea({
  name,
  placeholder,
  value,
  rows = 6,
  onChange,
  required = false,
  disabled = false,
}: TextareaProps) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      rows={rows}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className="w-full resize-none rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200 disabled:cursor-not-allowed disabled:bg-gray-100"
    />
  );
}
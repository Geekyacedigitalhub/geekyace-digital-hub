interface TextareaProps {
  name?: string;
  placeholder?: string;
  value?: string;
  rows?: number;
  onChange?: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export default function Textarea({
  name,
  placeholder,
  value,
  rows = 6,
  onChange,
}: TextareaProps) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      rows={rows}
      onChange={onChange}
      className="w-full resize-none rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
    />
  );
}
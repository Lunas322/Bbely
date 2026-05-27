type OptionBarProps = {
  text: string
  onSelect: (value: string) => void
}

function OptionBar({ text, onSelect }: OptionBarProps) {
  return (
    <div
      className="w-140 h-14 text-sm border border-[#7777774f] rounded-sm flex items-center p-2"
      onClick={() => onSelect(text)}
    >
      {text}
    </div>
  )
}

export default OptionBar
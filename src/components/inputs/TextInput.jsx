const TextInput = ({ label, name, value, onChange, required = false}) => {
  return (
    <div className="mb-4">
            <label htmlFor={name} className="block">
              {label}
            </label>
            <input
              name={name}
              type="text"
              className="w-full p-2 border rounded-lg bg-gray-50"
              value={value}
              onChange={onChange}
              required={required}
            />
          </div>
  )
}
export default TextInput
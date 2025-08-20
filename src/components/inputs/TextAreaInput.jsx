const TextAreaInput = ({ label, name, value, onChange, required = false }) => {
  return (
    <div className="mb-4">
            <label htmlFor={name} className="block">
              {label}
            </label>
            <textarea
              name={name}
              className="w-full p-2 border rounded-lg bg-gray-50"
              value={value}
              onChange={onChange}
              // is this required here?
              required={required} 
            />
          </div>
  )
}
export default TextAreaInput;
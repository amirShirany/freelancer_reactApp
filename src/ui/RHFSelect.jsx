function RHFSelect({ label, name, register, options, required }) {
  return (
    <div className="mb-2 block text-secondary-700">
      <label htmlFor="name">{label} {required && <span className="text-error">*</span>}</label>
      <select {...register(name)} id="name" className="textField__input">
        {
          options.map((option) => (<option key={option.value} value={option.value} ></option>))
        }
      </select>  
    </div>
  )
}

export default RHFSelect
import { useState } from "react";

function FormInput({ id, label, onInput, regex, errorMsg}) {
      const [error, setError] = useState('');

      const validateInput = (value) => {
          if (!regex.test(value)) {
            setError(errorMsg);
          } else {
            setError('');
          }
        };

      const handleChange = (e) => {
        const value = e.target.value;
        validateInput(value);
      };

      return (
          <div className="form-input-container">
              <label htmlFor={id}>{label}</label>
              <input 
                type="text" id={id} 
                onInput={(e) => onInput(e.target.value)} 
                onChange={handleChange} 
                className={error ? 'input-error' : ''}
            />
            {error && <span className="error-message">{error}</span>}
          </div>
      )
}

export default FormInput
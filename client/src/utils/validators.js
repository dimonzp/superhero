//Check for empty field
export const required = (value) => (value ? null : "Обязательное поле");

//Check max lenght
export const maxLength = (max) => (value) =>
  value && value.length > max ? `Строка более ${max} символов` : null;

//Check min lenght
export const minLength = (min) => (value) =>
  value && value.length < min ? `Строка меньше ${min} символов` : null;


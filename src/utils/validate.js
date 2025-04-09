export const checkValidateData = (email, password) => {
  // const isNameValid = name && /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name);
  const isEmailValid = email && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid = password && /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/.test(
    password
  );

  // if (!isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};

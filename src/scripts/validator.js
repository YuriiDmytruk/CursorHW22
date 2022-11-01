export function validateName(name) {
  return Boolean(name);
}

export function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export function validatePassword(password) {
  if (!Boolean(password)) return false;
  if (password.length < 8) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/[a-z]/.test(password)) return false;
  return true;
}

export function isEmailUnique(email) {
  try {
    const userList = JSON.parse(localStorage.getItem("userList"));
    const found = userList.find((e) => e.email === email);
    return !Boolean(found);
  } catch (error) {
    console.log(error);
    return true;
  }
}

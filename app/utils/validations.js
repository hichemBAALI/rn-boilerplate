const pinRegex = /^\d{6}$/;
const emailRegex = /\S+@\S+\.\S+/;
const fullNameRegex = /^\w{3,}(\s+\w{2,})*$/; // TODO refine this regex

const formatPhoneNumber = (phone, countryPhoneCode = '213') => {
  if (phone && phone.startsWith(0)) {
    return `+${countryPhoneCode}${phone.substr(1)}`;
  }
  if (phone && phone.startsWith('+')) {
    return phone;
  }
  if (phone && !phone.startsWith(`+${countryPhoneCode}`)) {
    return `+${countryPhoneCode}${phone}`;
  }
  return phone;
};
const isValidPin = (pin) => pin && pinRegex.test(pin);
const isValidEmail = (email) => (email ? email.match(emailRegex) : false);
const isValidName = (name) => (name ? fullNameRegex.test(name) : false);

export {formatPhoneNumber, isValidPin, isValidEmail, isValidName};

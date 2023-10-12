export function isValidEmail(emailAdress?: string) {
  if (!emailAdress) {
    return false;
  }
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress?.match(regexEmail)) {
    return true;
  } else {
    return false;
  }
}

export function isValidUsername(username?: string) {
  if (!username) {
    return false;
  }
  let regexUsername = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
  if (username?.match(regexUsername)) {
    return true;
  } else {
    return false;
  }
}

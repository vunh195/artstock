export enum ERROR_CODE {
  Guard_MalformedJWT = 'Malformed JWT',
  Guard_RequiredJWT = 'Required JWT',

  Auth_UsernameNotFound = 'Username Not Found',
  Auth_UsernameAlreadyRegistered = 'Username Already Registered',
  Auth_EmailNotFound = 'Email Not Found',
  Auth_EmailAlreadyRegistered = 'Email Already Registered',
  Auth_AddressNotFound = 'Address Not Found',
  Auth_AddressAlreadyRegistered = 'Address Already Registered',
  Auth_InvalidUsernamePassword = 'Invalid Username Password',
  Auth_InvalidEmailPassword = 'Invalid Email Password',
  Auth_InvalidNonce = 'Invalid Nonce',
  Auth_InvalidSignature = 'Invalid Signature',
  Auth_PasswordConfirmNotMatch = 'Password Confirm Not Match',
  Auth_InvalidEmailVerification = 'User Not Found Or Secret Not Matched',
  Auth_EmailAlreadyVerified = 'Email Already Verified',
  Auth_EmailVerificationUnavailable = 'Email Verification Unavailable',

  Code_UnableToResendCode = 'Unable To Resend Code',
  Code_InvalidCodeType = 'Invalid Code Type',

  TwoFA_UserNotFoundOrDeleted = 'User Not Found Or Deleted',
  TwoFA_UserAlreadyVerifiedEmail = 'User Already Verified Email',
  TwoFA_InvalidEmailVerification = 'Invalid Email Verification',
  TwoFA_EmailAlreadyVerified = 'Email Already Verified',
  TwoFA_EmailVerificationUnavailable = 'Email Verification Unavailable',
  TwoFA_EmailAlreadyRegistered = 'Email Already Registered',
  TwoFA_AuthorityNotFound = 'Authority Not Found',
  TwoFA_AccountAlreadyRegisteredEmail = 'Account Already Registered Email',
  TwoFA_AccountAlreadyLinkedWallet = 'Account Already Linked Wallet',

  KYC_AuthorityNotFound = 'Authority Not Found',
  KYC_UnboundStatus = ' Unbound Status',

  Profile_UsernameAlreadyExisted = 'Username Already Existed',
  Profile_InvalidReferralCode = 'Invalid Referral Code',
  Profile_AccountAlreadyInputtedReferral = 'Account Already Inputted Referral',
  Profile_MimeTypeNotAllowed = 'Mimetype Not Allowed',

  Whitelist_Not_In_Whitelist = "User don't have whitelist access",

  Sale_MarketClosed = 'Market Closed',
  Sale_MarketNotStarted = 'Market Not Started',
  Sale_WhitelistRequired = 'Whitelist Required',
  Sale_MarketExceedSupply = 'Market Exceed Supply',
  Sale_TokenNotAllowed = 'Token Not Allowed',
  Sale_MarketNotFound = 'Market Not Found',
}

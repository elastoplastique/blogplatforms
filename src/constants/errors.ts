export const ERROR_TYPES = {
  invalidPassword: ERROR.AUTH_INVALID_PASSWORD,
};
export const enum ERROR {
  AUTH_INVALID_PASSWORD = 'INVALID_PASSWORD',
}

export const ERROR_MESSAGE = {
  [ERROR.AUTH_INVALID_PASSWORD]: 'Invalid password',
};

export function getErrorMessageFromCode(code: Wix.AUTH_ERROR_CODE) {
  return ERROR_MESSAGE[ERROR_TYPES[code]];
}

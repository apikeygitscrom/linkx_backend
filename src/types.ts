export const ERROR_CODES = {
  INVALID_INPUT: {
    code: "INVALID_INPUT",
    message: "Please provide valid input or missing required fields.",
  },

  INVALID_ID: {
    code: "INVALID_ID",
    message: "Invalid resource identifier.",
  },

  UNAUTHORIZED: {
    code: "UNAUTHORIZED",
    message: "Authentication is required.",
  },
  INCORRECT_PASSWORD: {
    code: "INCORRECT_PASSWORD",
    message: "The password you entered is incorrect.",
  },
  FORBIDDEN: {
    code: "FORBIDDEN",
    message: "You do not have permission to perform this action.",
  },
  TOKEN_EXPIRED: {
    code: "TOKEN_EXPIRED",
    message: "Your session has expired. Please log in again.",
  },
  TOKEN_INVALID: {
    code: "TOKEN_INVALID",
    message: "Invalid authentication token.",
  },

  RESOURCE_NOT_FOUND: {
    code: "RESOURCE_NOT_FOUND",
    message: "Requested resource was not found.",
  },
  LINK_NOT_FOUND: {
    code: "LINK_NOT_FOUND",
    message: "Short link does not exist.",
  },
  RESOURCE_ALREADY_EXISTS: {
    code: "RESOURCE_ALREADY_EXISTS",
    message: "Resource already exists.",
  },

  OPERATION_NOT_ALLOWED: {
    code: "OPERATION_NOT_ALLOWED",
    message: "This operation is not allowed.",
  },
  LIMIT_EXCEEDED: {
    code: "LIMIT_EXCEEDED",
    message: "You have exceeded the allowed limit.",
  },

  TOO_MANY_REQUESTS: {
    code: "TOO_MANY_REQUESTS",
    message: "Too many requests. Please try again later.",
  },
  SERVICE_UNAVAILABLE: {
    code: "SERVICE_UNAVAILABLE",
    message: "Service is temporarily unavailable.",
  },

  INTERNAL_SERVER_ERROR: {
    code: "INTERNAL_SERVER_ERROR",
    message: "Something went wrong. Please try again later.",
  },
} as const;

export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,

  MOVED_PERMANENTLY = 301,
  FOUND = 302,
  NOT_MODIFIED = 304,

  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,
  TOO_MANY_REQUESTS = 429,

  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
}

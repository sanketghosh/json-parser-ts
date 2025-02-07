export enum TOKEN_TYPES {
  LEFT_BRACE = "LEFT_BRACE",
  RIGHT_BRACE = "RIGHT_BRACE",
  LEFT_BRACKET = "LEFT_BRACKET",
  RIGHT_BRACKET = "RIGHT_BRACKET",
  COLON = "COLON",
  COMMA = "COMMA",
  STRING = "STRING",
  NUMBER = "NUMBER",
  TRUE = "TRUE",
  FALSE = "FALSE",
  NULL = "NULL",
}

export interface Token {
  type: TOKEN_TYPES;
  value?: any;
}

import type { Token, TOKEN_TYPES } from "@/types";

// create token func
export const createToken = (type: TOKEN_TYPES, value?: any): Token => {
  return {
    type,
    value,
  };
};

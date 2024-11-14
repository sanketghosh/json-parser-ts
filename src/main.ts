import { lexer } from "@/lexer";

const inp = `{"car":"Toyota","price":20000000}`;

const res = lexer(inp);
console.log(res);

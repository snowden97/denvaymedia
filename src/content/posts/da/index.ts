import type { PostText } from "@/lib/posts";
import a from "./a";
import b from "./b";
import c from "./c";
import d from "./d";

const da: Record<string, PostText> = { ...a, ...b, ...c, ...d };
export default da;

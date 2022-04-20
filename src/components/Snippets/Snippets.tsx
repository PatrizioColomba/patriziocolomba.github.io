import { Firebase } from "App";
import { Block } from "baseui/block";
import { useFetch } from "components/useFetch";
import { useState } from "react";
import CodeSnippet from "./CodeSnippet/CodeSnippet";

export type CodeLang = "kotlin" | "js" | "rust" | "java";
interface SnippetsData {
  lang: CodeLang;
  text: string;
}
export default function Snippets() {
  const [snippets, setSnippets] = useState<SnippetsData[]>([]);

  useFetch(Firebase.Snippets, []).then(setSnippets);

  return (
    <div data-testid="Snippets">
      {snippets.map((s, i) => (
        <Block padding={"2em"}>
          <h2>Code Snippet in {s.lang}</h2>
          <CodeSnippet key={`snippet-${i}`} text={s.text} lang={s.lang} />
        </Block>
      ))}
    </div>
  );
}

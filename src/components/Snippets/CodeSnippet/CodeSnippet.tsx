import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { CodeLang } from "../Snippets";

interface CodeSnippetProps {
  text: string;
  lang: CodeLang;
}

const CodeSnippet: FC<CodeSnippetProps> = (props) => (
  <div data-testid="CodeSnippet">
    <ReactMarkdown
      children={getCodeSnippet(props.lang, props.text)}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter children={String(children).replace(/\n$/, "")} language={match[1]} PreTag="div" {...props} />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  </div>
);

const getCodeSnippet = (lang: CodeLang, text: string) => `~~~${lang}
  ${text}
  ~~~`;

export default CodeSnippet;

import React from "react";

export const HighlightQuotedText = ({ text }: { text: string }) => {
  const highlightQuotes = (inputText: string) => {
    const parts = inputText.split(/"([^"]*)"/g);

    return parts.map((part: string, index: number) => {
      if (index % 2 === 1) {
        return (
          <span
            key={index}
            className="text-xs font-medium text-[var(--black)] px-1 py-0.5 rounded-sm bg-[var(--gray)] whitespace-nowrap"
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="text-sm font-normal text-[#404040] leading-[22px]">
      {highlightQuotes(text)}
    </div>
  );
};

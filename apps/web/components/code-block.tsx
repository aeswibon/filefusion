"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  examples: {
    language: string;
    code: string;
  }[];
}

export default function CodeBlock({ examples }: CodeBlockProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (
      examples.length > 0 &&
      activeTab >= 0 &&
      activeTab < examples.length &&
      examples[activeTab]
    ) {
      navigator.clipboard.writeText(examples[activeTab].code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="rounded-lg bg-white/5 p-4">
      <div className="flex space-x-2 mb-4">
        {examples.map((example, index) => (
          <Button
            key={example.language}
            variant={activeTab === index ? "default" : "outline"}
            onClick={() => setActiveTab(index)}
          >
            {example.language}
          </Button>
        ))}
      </div>
      <div className="relative">
        <pre className="p-4 rounded bg-black/50 overflow-x-auto">
          {examples.length > 0 &&
          activeTab >= 0 &&
          activeTab < examples.length ? (
            <code className="text-sm text-white">
              {examples[activeTab] && examples[activeTab].code}
            </code>
          ) : (
            <code className="text-sm text-white"></code>
          )}
        </pre>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-2 right-2"
          onClick={copyToClipboard}
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}

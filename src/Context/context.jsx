import { createContext, useState } from "react";
import { URL } from "../config/geminiApi";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const payload = {
    contents: [
      {
        parts: [
          {
            text: input,
          },
        ],
      },
    ],
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if (prompt !== undefined) {
      response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      });
      setRecentPrompt(prompt);
    } else {
      setPrevPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(payload),
      });
    }

    // setResultData(response), setLoading(false), setInput("");

    // response = await response.json();
    // // console.log(response.candidates[0].content.parts[0].text);
    // setResultData(response.candidates[0].content.parts[0].text);
    const data = await response.json(); // ✅ parse JSON
    setResultData(data.candidates[0].content.parts[0].text); // ✅ only set string
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;

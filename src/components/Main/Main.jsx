import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/context";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Card = ({ text, icon }) => (
  <div className="card">
    <p>{text}</p>
    <img src={icon} alt="" />
  </div>
);

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const cardsData = [
    {
      text: "Suggest beautiful places to see on an upcoming road trip",
      icon: assets.compass_icon,
    },
    {
      text: "Briefly summarize this concept: urban planning",
      icon: assets.bulb_icon,
    },
    {
      text: "Brainstorm team bonding activities for our work retreat",
      icon: assets.message_icon,
    },
    {
      text: "Improve the readability of the following code",
      icon: assets.code_icon,
    },
  ];

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.raj_icon} alt="Raj Icon" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div
              className="greet"
              style={{
                overflow: "scroll",
                border: "none",
                outline: "none",
              }}
            >
              <p>
                <span>Hello, Rajendra</span>{" "}
              </p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards">
              {!resultData &&
                cardsData.map((card, index) => (
                  <Card key={index} text={card.text} icon={card.icon} />
                ))}
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              {/* <img src={assets.rajj_icon} alt="" /> */}
              <p
                style={{
                  display: "inline-block",
                  justifyContent: "flex-end",
                  background: " #f0f4f9ff",
                  padding: "10px 10px",
                  borderTopLeftRadius: "20px",
                  borderBottomRightRadius: "20px",
                  borderBottomLeftRadius: "20px",
                  maxWidth: "500px",

                  // marginBottom: "50px",
                }}
              >
                {recentPrompt}
              </p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <>
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                </>
              ) : (
                <div className="markdown">
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {resultData}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom ">
          <div className="search-box">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  onSent();
                }
              }}
              type="text"
              placeholder="Ask Gemini"
            />
            <div>
              <img src={assets.gallery_icon} alt="Gallery" />
              <img src={assets.mic_icon} alt="Mic" />

              {input ? (
                <img
                  className="searchbtn"
                  onClick={onSent}
                  style={{ border: "none" }}
                  src={assets.send_icon}
                  alt="Send"
                />
              ) : null}
            </div>
          </div>

          <p className="bottom-info">
            Gemini can make mistakes, so double check it
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

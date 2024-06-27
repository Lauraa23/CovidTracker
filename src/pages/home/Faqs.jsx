import React from "react";

const Questions = () => {
  return (
    <section
      id="questionsWrapper"
      className="bg-center relative text-white flex flex-col items-center"
      style={{
        background:
          'linear-gradient(to right, #1e0c9db3, #06cdecb3), url("assets/images/slide-1.jpg") center center / cover no-repeat local',
      }}
    >
      <div className="questionsContainer flex flex-col text-center">
        <div className="questionsTitle">
          <h2 className="text-[0.8rem] font-bold">Faqs</h2>
          <h3 className="text-[2rem] font-bold">Frequently Asked Questions</h3>
        </div>
        <div className="questionsContentCards flex w-full flex-row justify-between">
          <div className="questionsPanelGroupLeft w-[45%] flex flex-col text-start">
            <div className="questionsPanelContent bg-[#1e0c9d80] border mb-5 p-2.5 rounded-[10px]">
              <p className="text-[0.6rem] font-bold">01. How does COVID-19 spread?</p>
            </div>
            <div className="questionsPanelContent bg-[#1e0c9d80] border mb-5 p-2.5 rounded-[10px]">
              <p className="text-[0.6rem] font-bold">
                02. What are the symptoms of COVID-19?
              </p>
            </div>
            <div className="questionsPanelContent bg-[#1e0c9d80] border mb-5 p-2.5 rounded-[10px]">
              <p className="text-[0.6rem] font-bold">03. Should I wear mask?</p>
            </div>
          </div>
          <div className="questionsPanelGroupRight w-6/12 flex flex-col text-start">
            <div className="questionsPanelContent bg-[#1e0c9d80] border mb-5 p-2.5 rounded-[10px]">
              <p className="text-[0.6rem] font-bold">
                04. What does it mean to self-isolate?
              </p>
            </div>
            <div className="questionsPanelContent bg-[#1e0c9d80] border mb-5 p-2.5 rounded-[10px]">
              <p className="text-[0.6rem] font-bold">
                05. Can children or adolescents catch COVID-19?
              </p>
            </div>
            <div className="questionsPanelContent bg-[#1e0c9d80] border mb-5 p-2.5 rounded-[10px]">
              <p className="text-[0.6rem] font-bold">
                06. Is there a vaccine or drug for COVID-19?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;

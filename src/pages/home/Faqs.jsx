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
      <div className="questionsContainer flex flex-col text-center px-0 py-[30px]">
        <div className="questionsTitle py-[40px]">
          <h2 className="text-[1rem] font-bold">Faqs</h2>
          <h3 className="text-[2.5rem] font-bold">
            Frequently Asked Questions
          </h3>
        </div>
        <div className="questionsContentCards flex w-full flex-row justify-between">
          <div className="questionsPanelGroupLeft w-[45%] flex flex-col text-start">
            <div className="questionsPanelContent bg-[#1e0c9d80] border mb-5 p-3 rounded-[10px]">
              <p className="text-[0.8rem]">01. How does COVID-19 spread?</p>
            </div>
            <div className="questionsPanelContent bg-[#1e0c9d80] border mb-5 p-3 rounded-[10px]">
              <p className="text-[0.8rem]">
                02. What are the symptoms of COVID-19?
              </p>
            </div>
            <div className="questionsPanelContent bg-[#1e0c9d80] border mb-5 p-3 rounded-[10px]">
              <p className="text-[0.8rem]">03. Should I wear mask?</p>
            </div>
          </div>
          <div className="questionsPanelGroupRight w-6/12 flex flex-col text-start">
            <div className="questionsPanelContent bg-[#1e0c9d80] border mb-5 p-3 rounded-[10px]">
              <p className="text-[0.8rem]">
                04. What does it mean to self-isolate?
              </p>
            </div>
            <div className="questionsPanelContent bg-[#1e0c9d80] border mb-5 p-3 rounded-[10px]">
              <p className="text-[0.8rem]">
                05. Can children or adolescents catch COVID-19?
              </p>
            </div>
            <div className="questionsPanelContent bg-[#1e0c9d80] border mb-5 p-3 rounded-[10px]">
              <p className="text-[0.8rem]">
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

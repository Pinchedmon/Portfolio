import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Message = (props: { text: string; index: number }) => {
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const typeText = () => {
      const textArray = props.text.split("");
      let i = 0;
      const interval = setInterval(() => {
        setText(textArray.slice(0, i + 1).join(""));
        i++;
        if (i >= textArray.length) {
          clearInterval(interval);
          setTyping(false);
        }
      }, 50); // adjust the speed of typing here
    };
    typeText();
  }, [props.text]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex w-full items-center gap-2">
        <p
          className={`${
            props.index % 2 == 0 ? "ml-auto bg-gray-700" : "ml-right bg-orange"
          }   px-3 py-1 rounded-xl `}
        >
          {props.index % 2 == 0
            ? typing
              ? text + (typing ? "|" : "")
              : props.text
            : props.text}
        </p>
        {props.index % 2 == 0 && (
          <Image
            src="/ava.jpeg"
            alt="ava"
            width={40}
            height={40}
            className="rounded-3xl "
          />
        )}
      </div>
    </motion.div>
  );
};
const Question = (props: { text: string; addNextMsg: () => void }) => {
  const [clicked, setClicked] = useState(false);
  const variants = {
    initial: {
      opacity: 0,
      y: 0,
    },
    appear: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    clicked: {
      opacity: 0,
      y: -50,
      //   scale: 0.5,
      transition: {
        duration: 0.5,
      },
    },
  };
  const ClickButton = () => {
    props.addNextMsg();
    setClicked(true);
  };
  return (
    <motion.div
      initial="initial"
      animate={clicked ? "clicked" : "appear"}
      variants={variants}
      onClick={() => ClickButton()}
    >
      <button className="flex mt-auto justify-center w-full items-center gap-2">
        <p className="bg-orange px-3 py-1 rounded-xl">{props.text}</p>
      </button>
    </motion.div>
  );
};

const About = (props: { isReady: boolean }) => {
  const [msgs, setMsgs] = useState<Array<string>>([]);
  const [isStarted, setIsStarted] = useState(false);
  const questions = ["Сможешь сделать крутой сайт?", "Какой стек?"];
  const [isNextMsg, setIsNextMsg] = useState(false);

  useEffect(() => {
    if (isStarted) {
      setTimeout(() => {
        setMsgs((msgs) => ["Привет, приятно познакомиться!)"]);
        setIsNextMsg(true);
      }, 1000);
    }
  }, [isStarted]);
  const addMessage = (text: string) => {
    setMsgs((msgs) => [...msgs, text]);
    let otvet;
    if (text.length > 20) {
      otvet = "Конечно же!!! Срочно пиши мне в телеграм!!!";
    } else {
      otvet =
        "Я пишу сайты используя next js, ts,react, redux toolkit, tailwind, prisma, postgresql, docker";
    }
    setTimeout(() => {
      setMsgs((msgs) => [...msgs, otvet]);
    }, 1000);
  };
  return (
    <section className="w-full text-white z-10 gap-[20px] flex  h-[80vh] ">
      <div
        className={`border h-full border-white/10 bg-black/60 flex-col w-full rounded-3xl p-[40px] ${
          !isStarted && "flex justify-center items-center"
        }`}
      >
        {isStarted &&
          msgs.length > 0 &&
          msgs.map((msg, index) => (
            <Message key={index} index={index} text={msg} />
          ))}

        {isNextMsg && (
          <div className="text-center h-full mt-auto flex flex-col gap-2 justify-center">
            {questions.length > 0 &&
              questions.map((msg, index) => (
                <Question
                  key={index}
                  text={msg}
                  addNextMsg={() => addMessage(msg)}
                />
              ))}
          </div>
        )}
        {!isStarted && (
          <button
            onClick={() => setIsStarted(true)}
            className="bg-orange px-3 py-1 rounded-xl"
          >
            Начать диалог?
          </button>
        )}
        <div></div>
      </div>
    </section>
  );
};

export default About;

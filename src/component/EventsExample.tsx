import React, { ChangeEvent, FC, useRef, useState } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");

  const changeHandker = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };



  //drag

  const [isDrag, setIsDrag] = useState<boolean>(false);

  const dragHendler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("ffdvdf");
  };

  const dragWithPrevents = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  const leaveHendler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const dropHendler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("bvs");
  };

  //
  const inputRef = useRef<HTMLInputElement>(null);


  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };

  return (
    <div>
      <input
        value={value}
        type="text"
        onChange={changeHandker}
        placeholder="Упарвляємий"
      />
      <input
        type="text"
        ref={inputRef}
        placeholder="не упарвляємий"
      />
      <button onClick={clickHandler}>Кнопка</button>
      <div
        onDrag={dragHendler}
        draggable
        style={{ width: 200, height: 200, background: "red" }}
      ></div>
      <div
        onDrop={dropHendler}
        onDragLeave={leaveHendler}
        onDragOver={dragWithPrevents}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? "blue" : "red",
          marginTop: 15,
        }}
      ></div>
    </div>
  );
};

export default EventsExample;

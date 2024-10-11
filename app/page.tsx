"use client";

import { useStateContext } from "@/context/stateContext";
import { useRouter } from "next/navigation";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import { tasks } from "@/constant";
import TaskComponent from "@/components/taskComponent";

export default function Home() {
  const [showActionButton, setShowActionButton] = useState(false);
  const [index, setIndex] = useState(0);
  const { user } = useStateContext();
  const { push } = useRouter();

  if (!user) {
    push("/registration");
  }

  return (
    <div className="">
      <p className="text-xl text-center font-medium lowercase">TASK MANAGEMENT APP</p>
      <div>
        <button className="flex items-center gap-2 bg-black ml-auto px-4 py-2 text-white rounded-lg cursor-pointer mr-20">
          <CiCirclePlus /> Add task
        </button>
        <div className="flex item-center justify-center p-2 md:p-10 gap-[30px] flex-wrap">

          {tasks.map((task) => (
            <TaskComponent
              key={task.id}
              id={task.id}
              index={index}
              setIndex={setIndex}
              title={task.title}
              description={task.description}
              imageUrl={task.imageUrl}
              assignee={task.assignee}
              timeAgo={task.timeAgo}
              setShowActionButton={setShowActionButton}
              showActionButton={showActionButton}
            />
          ))}

        </div>
      </div>
    </div>
  );
}

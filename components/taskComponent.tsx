"use client"
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react';
import { CiEdit } from 'react-icons/ci'
import { IoMdMore } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'

interface TaskProps {
    id: number;
    index: number;
    setIndex: Dispatch<SetStateAction<number>>;
    title: string;
    description: string;
    imageUrl: string;
    assignee: string;
    timeAgo: string;
    setShowActionButton: Dispatch<SetStateAction<boolean>>;
    showActionButton: boolean;
}

const TaskComponent = ({
    id,
    title,
    index,
    setIndex,
    description,
    imageUrl,
    assignee,
    timeAgo,
    setShowActionButton,
    showActionButton

}: TaskProps ) => {
    setIndex(id);
  return (
    <div key={id} className="w-full md:w-[400px] p-5 shadow-sm shadow-blue-400 space-y-3">
              <div>
                <div className="w-full flex items-center justify-between mb-5">
                  <p className="font-bold capitalize">{title}</p>
                  <button onClick={() => setShowActionButton((prev) => !prev)}>
                    <IoMdMore />
                  </button>
                </div>
                <p className="text-sm text-gray-400">Description: {description}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[20px]">
                  <div className="w-[30px] h-[30px] rounded-full relative aspect-video">
                    <Image
                      src={imageUrl}
                      alt={title}
                      fill
                      className="rounded-full object-cover absolute"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm">{assignee}</p>
                    <p className="text-[9px] text-gray-400">{timeAgo}</p>
                  </div>
                </div>
                {showActionButton && (
                  <div className="flex items-center gap-4">
                    <button><CiEdit /></button>
                    <button><MdDelete /></button>
                  </div>
                )}
              </div>
            </div>
  )
}

export default TaskComponent

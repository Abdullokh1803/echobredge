"use client";

import React, { useEffect } from "react";
// import  Image  from 'next/image';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({ isOpen, onClose }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[1000000]">
      <div className="bg-white relative p-4 rounded-lg overflow-hidden">
        <button className="absolute top-2 right-2" onClick={onClose}>
          ✖
        </button>
        <div className="relative z-50 border border-dashed border-gray-300 p-4 rounded-md text-center text-black mt-6">
          <h4 className="text-lg font-medium mb-2">Скоро будет доступно</h4>
          <p className="text-sm">
            Платёжная система ещё в разработке. Следите за обновлениями!
          </p>
          {/* <Image src={'/images/IL_modal.png'} width={200} height={200} alt={'Process'} className="absolute top-[-20px] rotate-[-20deg] right-0 z-[-1] opacity-45" />
          <Image src={'/images/IL1_modal.png'} width={200} height={200} alt={'Process'} className="absolute top-[-150px] rotate-30 left-0 z-[-1] opacity-45" /> */}
        </div>
      </div>
    </div>
  );
}

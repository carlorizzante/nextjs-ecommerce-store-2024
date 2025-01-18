"use client";

import { Fragment } from 'react';
import { X } from 'lucide-react';
import { IconButton } from '@/components/icon-button';
import { WithChildren } from '@/lib/types';
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';

type ModalProps = WithChildren & {
  open: boolean;
  onClose: () => void;
}

export const Modal = ({ open, onClose, children }: ModalProps) => (
  <Transition show={open} appear as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={onClose}>
      <div className="fixed inset-0 bg-black bg-opacity-50">
        <div className="fixed inset-0 overdflow-y-auto">
          <div className="flex justify-center items-center min-h-full p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <div className="absolute top-4 right-4">
                    <IconButton
                      icon={<X size={15} />}
                      onClick={onClose}
                      className="absolute top-4 right-4"
                    />
                  </div>
                  {children}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </Transition>
);

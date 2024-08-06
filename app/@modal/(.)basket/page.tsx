"use client";

import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Basket from "@/components/basket";

const BasketInterception = () => {
  const router = useRouter();

  const onDismiss = () => {
    router.back();
  };
  return (
    <Dialog
      open
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          onDismiss();
        }
      }}
    >
      <DialogContent className="h-4/5 w-full overflow-auto max-w-3xl">
        <DialogHeader>
          <DialogTitle>Basket</DialogTitle>
          <DialogDescription>
            <p className="">My Items</p>
          </DialogDescription>
        </DialogHeader>
        <Basket />
      </DialogContent>
    </Dialog>
  );
};

export default BasketInterception;

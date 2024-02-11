import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="p-10 w-full flex flex-col lg:flex-row items-center lg:items-start justify-center space-x-4 space-y-4 mx-auto lg:space-y-0">
      <div className="flex space-x-4">
        <div className="hidden lg:inline-block space-y-4">
          <Skeleton className="h-[100px] w-[100px] rounded-md" />
          <Skeleton className="h-[100px] w-[100px] rounded-md" />
          <Skeleton className="h-[100px] w-[100px] rounded-md" />
        </div>

        <Skeleton className="inline lg:hidden h-[100px] w-[100px] rounded-md" />

        <Skeleton className="lg:inline hidden lg:h-[300px] lg:w-[400px] rounded-md" />

        <div className="w-[400px] h-[400px] sm:w-[520px] sm:h-[780px] rounded-md space-y-2 border p-2 animate-pulse">
          <Skeleton className="h-[40px] w-[380px] sm:w-[500px] rounded-md" />
          <Skeleton className="h-[40px] w-[380px] sm:w-[300px] rounded-md" />
          <Skeleton className="h-[385px] sm:h-[650px] w-[380px] sm:w-[500px] rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Loading;

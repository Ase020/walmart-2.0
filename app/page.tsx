import GridOptions from "@/components/grid-options";
import { gridOptions } from "@/constants/data";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-2 md:gap-6 m-2 md:m-6">
        {gridOptions.map(({ id, title, image, className }) => (
          <GridOptions
            key={id}
            title={title}
            image={image}
            className={className}
          />
        ))}
      </div>
    </main>
  );
}

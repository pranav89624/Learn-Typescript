type LayoutProps = {
  layout: "grid" | "list" | "blog";
};

const layoutDescriptions: Record<LayoutProps["layout"], string> = {
  grid: "Items are laid out in a grid.",
  list: "Items are stacked vertically.",
  blog: "Each item has a title, body, and metadata.",
};

const LayoutCard = ({ layout }: LayoutProps) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">📐 Layout Description</h2>
      <p className="text-gray-300 font-medium">Layout: {layout}</p>
      <p className="text-sm text-gray-500 mt-2">{layoutDescriptions[layout]}</p>
    </div>
  );
};

export default LayoutCard;

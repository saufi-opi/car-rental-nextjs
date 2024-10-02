export default function Dashboard() {
  const rows = Array.from({ length: 100 }, (_, i) => (
    <div key={i} className="py-4 px-2 border-b border-gray-300">
      Placeholder row {i + 1}
    </div>
  ));

  return (
    <div>
      {rows}
    </div>
  );
}

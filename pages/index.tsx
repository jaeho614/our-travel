export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="p-2 text-center border-b">홈</div>
      <div className="grid grid-flow-row">
        <div className="w-full h-12 bg-gray-500">
          <button>시작하기</button>
        </div>
      </div>
      <div className="h-10 p-2 border-t border-gray-300">
        <div className="flex justify-around">
          {["홈", "검색", "게시판", "My Page"].map(item => (
            <button
              key={item}
              className="w-24 text-center rounded hover:bg-purple-100"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

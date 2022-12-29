export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="h-10 p-2 text-center border-b">홈</div>
      <div className="h-full grid grid-flow-row">
        <div className="">
          <img
            className="h-full w-full"
            alt="background"
            src="https://images.unsplash.com/photo-1612977512598-3b8d6a498bbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8JUVCJThDJTgwJUVEJTk1JTlDJUVCJUFGJUJDJUVBJUI1JUFEfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
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

import Image from 'next/image';

export default function MegaLogin() {
  return (
    <main className="relative min-h-screen w-full bg-[#f3f4f6] md:overflow-hidden">
      
      {/* ==========================================
          ANDROID / MOBILE VIEW 
          (Hidden on Desktop - md:hidden)
          ========================================== */}
      <div className="flex md:hidden min-h-screen w-full flex-col bg-white px-6 py-4 font-sans">
        {/* Mobile Header */}
        <header className="flex justify-between items-center w-full pt-2">
          <Image src="/Mega.png" alt="MEGA" width={100} height={30} className="h-15 w-auto" />
          <a href="#" className="text-[17px] font-bold text-[#1a1a1a] underline underline-offset-4">
            Sign up
          </a>
        </header>

        {/* Mobile Content */}
        <div className="flex-1 flex flex-col mt-16">
          <h1 className="text-[18px] font-bold text-[#1a1a1a] mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Log in to your MEGA account
          </h1>

          <form className="flex flex-col">
            <div className="mb-6">
              <label className="block text-[15px] font-bold text-[#1a1a1a] mb-2">Email address</label>
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full h-[54px] px-4 rounded-lg border border-gray-400 text-[16px] outline-none placeholder:text-[#333333B3]"
              />
            </div>

            <div className="mb-2">
              <label className="block text-[15px] font-bold text-[#1a1a1a] mb-2">Password</label>
              <input 
                type="password" 
                placeholder="Password"
                className="w-full h-[54px] px-4 rounded-lg border border-gray-400 text-[16px] outline-none placeholder:text-[#333333B3]"
              />
            </div>

            <div className="text-right mb-10">
              <a href="#" className="text-[15px] font-bold text-blue-600 underline underline-offset-2">
                Forgot password?
              </a>
            </div>

            <div className="flex items-start gap-4 mb-10">
              <input type="checkbox" id="m-keep" className="w-6 h-6 mt-0.5 accent-[#070b13]" />
              <label htmlFor="m-keep" className="flex flex-col">
                <span className="text-[15px] font-bold text-[#1a1a1a]">Keep me logged in</span>
                <span className="text-[14px] text-gray-500">Use this for devices you trust</span>
              </label>
            </div>

            <button className="w-full h-[56px] bg-[#070b13] text-white font-bold text-[18px] rounded-lg">
              Log in
            </button>
          </form>
        </div>

        {/* Mobile Footer */}
        <footer className="w-full py-6 flex flex-col items-center gap-4 text-[13px] text-gray-500 mt-[90px]">
          <div className="flex items-center gap-4">
            <span>Help Centre</span>
            <span>Terms of Service</span>
            <span className="flex items-center gap-1">
              <span className="text-transparent" style={{ textShadow: "0 0 0 #6b7280" }}>🌐</span>
              <span className="font-bold border-b border-gray-500 text-gray-700">EN</span>
            </span>
          </div>
        </footer>
      </div>


      {/* ==========================================
          DESKTOP VIEW 
          (Hidden on Mobile - hidden md:flex)
          ========================================== */}
      <div className="hidden md:flex min-h-screen flex-col items-center justify-center relative">
        {/* Background Mesh (Desktop Only) */}
        <div 
          className="absolute inset-0 z-0 scale-110"
          style={{
            backgroundImage: `linear-gradient(rgba(250, 250, 250, 0.85), rgba(250, 250, 250, 0.85)), url('/bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: '50% 50%',
            filter: 'blur(36px)',
          }}
        />

        {/* Desktop Header */}
        <div className="absolute top-[-20px] w-full px-6 py-5 flex justify-between items-center z-20">
          <Image src="/Mega.png" alt="MEGA Logo" width={400} height={500} className="h-20 w-auto" />
          <a href="#" className="text-[16px] font-[500] text-[#333333] border-b border-[#1a1a1a] hover:border-black" style={{ fontFamily: "'Inter', sans-serif" }}>
            MEGA for Business
          </a>
        </div>

        {/* Desktop Login Card */}
        <div className="relative z-10 bg-white rounded-[24px] p-10 shadow-sm border border-gray-100 w-[500px] min-h-[530px]">
          <h2 className="text-[18px] font-[700] text-[#333333]" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Log in to your MEGA account
          </h2>
          
          <form className="space-y-5">
            <div className="space-y-1.5 mt-6">
              <label className="text-[14px] font-bold text-[#303233]" style={{ fontFamily: "'Inter', sans-serif" }}>Email address</label>
              <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder:text-[#333333B3] outline-none" />
            </div>

            <div className="space-y-1.5">
              <label className="text-[14px] font-bold text-[#303233]" style={{ fontFamily: "'Inter', sans-serif" }}>Password</label>
              <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder:text-[#333333B3] outline-none" />
            </div>

            <div className="text-right">
              <a href="#" className="text-sm font-bold text-blue-600 underline">Forgot password?</a>
            </div>

            <div className="flex items-start gap-3 py-2">
              <input type="checkbox" id="d-keep" className="mt-1 w-5 h-5 accent-black" />
              <label htmlFor="d-keep" className="text-[12px] text-gray-600 leading-tight">
                <span className="font-bold block text-gray-800 mb-1">Keep me logged in</span>
                Use this for devices you trust
              </label>
            </div>

            <button className="w-full py-4 bg-[#070b13] text-white font-bold rounded-lg hover:bg-[#39424E] transition-colors">
              Log in
            </button>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account? <a href="#" className="text-black font-bold underline">Sign up</a>
          </p>
        </div>

        {/* Desktop Footer */}
        <div className="absolute bottom-6 w-full px-10 flex justify-between text-[12px] text-gray-500 z-20">
          <span>V.6.29.1</span>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Help Centre</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <span className="flex items-center gap-1 cursor-pointer">
              <span className="text-transparent" style={{ textShadow: "0 0 0 #6b7280" }}>🌐</span> 
              <span className="font-bold border-b border-gray-500 text-gray-700">EN</span>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
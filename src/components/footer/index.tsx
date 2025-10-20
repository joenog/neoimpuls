export default function Footer() {
  return (
    <footer className="flex flex-row items-center justify-center mt-10 py-10 bg-[#162556] text-white">
      <div className="w-auto md:w-2xl xl:w-6xl text-sm">
        <ul className="cursor-pointer w-30">
          <li className="hover:underline">About</li>
          <li className="hover:underline">Contact</li>
          <li className="hover:underline">More Info.</li>
        </ul>
        <p className="mt-10">
          © Neo Impuls - 2026
        </p>
        <p>
          Todos os direitos reservados.
        </p>
        <a
          className="opacity-20"
          target="_blank"
          href="https://github.com/joenog"
        >
        </a>
      </div>
    </footer>
  );
}

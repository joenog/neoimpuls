export default function Footer() {
  return (
    <footer className="flex flex-row items-center justify-center mt-20 py-20 bg-[#162556] text-white px-10">
      <div className="w-6xl text-sm">
        <ul className="cursor-pointer w-30">
          <li className="hover:underline">About</li>
          <li className="hover:underline">Contact</li>
          <li className="hover:underline">More Info.</li>
        </ul>
        <p className="mt-8">
          © NeoImpuls 2026 | Todos os direitos reservados.
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

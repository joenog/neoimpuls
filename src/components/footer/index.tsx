export default function Footer() {
  return (
    <footer className="flex flex-row items-center justify-center mt-20 py-20 bg-[#162556] text-white px-10">
      <div className="w-6xl">
        <ul className="cursor-pointer">
          <li className="hover:underline">About</li>
          <li className="hover:underline">Contact</li>
          <li className="hover:underline">More Info.</li>
        </ul>
        <p className="mt-8">© NeoInpuls 2025 | Todos os direitos reservado.</p>
        <a
          className="opacity-30"
          target="_blank"
          href="https://github.com/joenog"
        >
          by - Joab Nogueira{' '}
        </a>
      </div>
    </footer>
  )
}

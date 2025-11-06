import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer id="contacts" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-white/70 max-w-sm">Офіційні сторінки клубу Hoverla Plzeň. Усі права захищено.</p>
        </div>
        <div>
          <h4 className="font-bold mb-3">Контакти</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: contact@hoverlaplzen.cz</li>
            <li>Секретар: +420 000 000 000</li>
            <li>Спортзал: ZČU PedF, Plzeň</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Швидкі посилання</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#tickets" className="hover:text-green-400 transition">Квитки</a></li>
            <li><a href="#full-schedule" className="hover:text-green-400 transition">Розклад</a></li>
            <li><a href="#news" className="hover:text-green-400 transition">Новини</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-white/50 pb-6">© {new Date().getFullYear()} Hoverla Plzeň</div>
    </footer>
  );
}

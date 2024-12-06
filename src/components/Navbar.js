import React, { useState } from "react";
import { Link } from "react-router-dom";

// Imagen del logo
import navMobileLogo from "../img/nav-mobile-logo2.png";

export default function SimpleNavbar() {
  // Estado para manejar la apertura/cierre del menú
  const [open, setOpen] = useState(false);

  // Opciones del menú
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Servicios", href: "/services" },
    { name: "Sobre Nosotros", href: "/about" },
    { name: "Contacto", href: "/contact" },
  ];

  return (
    <div className="bg-background shadow-md w-full fixed top-0 left-0 z-50">
      <div className="flex items-center py-3">
        {/* Icono del menú (a la izquierda) */}
        <div className="p-4 text-2xl cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        {/* Logo de la empresa (a la derecha) */}
        <div className="fix-max-width">
          <img src={navMobileLogo} alt="mobileLogo" className="object-contain w-full" />
        </div>
      </div>

      {/* Menú desplegable */}
      {open && (
        <ul className="bg-background p-4">
          {navigation.map((navItem) => (
            <li key={navItem.name} className="py-2">
              <Link to={navItem.href} className="text-nav-typo hover:text-gray-400" onClick={() => setOpen(false)}>
                {navItem.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

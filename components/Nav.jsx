'use client';
import { useState } from 'react';
import Link from 'next/link';


function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="navbar bg-base-100 relative">
      <div className="navbar-start">
        <div className="dropdown">
          {/* Toggle dropdown visibility */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {dropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow-lg"
            >
              <li>
                
              </li>
              <li>
                <a>Mokytojai ir dėstytojai</a>
                <ul className="p-2">
                  <li>
                    <a>Įvertinti</a>
                  </li>
                  <li>
                  <Link href="/prideti-mokytoja">Pridėti</Link>
                  </li>
                  <li>
                    <Link href="/perziureti-mokytojus">Peržiūrėti</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a>Mokyklos ir universitetai</a>
                <ul className="p-2">
                  <li>
                  <Link href="/prideti-mokykla">Pridėti</Link>
                  </li>
                  <li>
                    <Link href="/mokyklu-ivertinimai">Peržiūrėti</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/apie-mus">Apie mus</a>
              </li>
            </ul>
          )}
        </div>
        <a href='/' className="text-xl font-bold lg:px-20">
          <img 
              src="/images/EDUinf.png"
              alt="EDUinf Logo"
              width={70} 
              height={100}/>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex z-[50]">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Taisyklės</a>
          </li>
          <li>
            <details>
              <summary>Mokytojai ir dėstytojai</summary>
              <ul className="p-2">
                <li>
                  <a>Įvertinti</a>
                </li>
                <li>
                <Link href="/prideti-mokytoja">Pridėti</Link>
                </li>
                <li>
                <Link href="/perziureti-mokytojus">Peržiūrėti</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Mokyklos ir universitetai</summary>
              <ul className="p-2">
                <li>
                <Link href="/prideti-mokykla">Pridėti</Link>
                </li>
                <li>
                <Link href="/mokyklu-ivertinimai">Peržiūrėti</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Apie mus</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="/skydelis" className="btn btn-outline btn-primary">
          Paskyra
        </a>
      </div>
      <div className="navbar-end">
        <a href="/prisijungti" className="btn btn-outline btn-primary">
          Prisijungti
        </a>
      </div>
    </div>
  );
}

export default Nav;

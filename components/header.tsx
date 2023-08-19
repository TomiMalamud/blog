"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <header
      className="w-full bg-white border-b border-gray-300 justify-between items-center duration-100 ease-in mx-auto sm:sticky top-0 transition-all z-40"
      id="header"
    >
      <div className="w-full px-4 max-w-6xl flex justify-between py-2 sm:pt-0 sm:pb-2 mx-auto">
        <div className="items-center flex h-16 justify-between relative">
          <div className="items-center flex justify-center sm:items-stretch  sm:justify-start sm:w-24 ">
            <a href="/" className="items-center">
              <svg
                viewBox="0 0 136.04 50"
                height="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <style>{`.cls-1{fill:#222}.cls-2{fill:none;stroke:#222;stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.83px`}</style>
                </defs>
                <title>Recurso 2</title>
                <g data-name="Capa 2" id="Capa_2">
                  <g data-name="Capa 1" id="Capa_1-2">
                    <g data-name="Capa 2" id="Capa_2-2">
                      <g data-name="Capa 1-2" id="Capa_1-2-2">
                        <path
                          d="M25.6,33.84V1.44a1.1,1.1,0,0,1,.21-.65.77.77,0,0,1,.67-.27H41.16a10.13,10.13,0,0,1,4.36.94A11,11,0,0,1,49,4a11.78,11.78,0,0,1,2.24,3.6,11.35,11.35,0,0,1,.8,4.19,10.17,10.17,0,0,1-1.59,5.47,11.9,11.9,0,0,1-4.22,4.09l6.28,12.46a.66.66,0,0,1,0,.65.63.63,0,0,1-.62.32h-6A1.16,1.16,0,0,1,44.85,34L39.36,22.9h-7V33.84a.82.82,0,0,1-.92.92H26.49A.8.8,0,0,1,25.6,33.84ZM39.54,6.46H32.35V16.8h7.19a5.72,5.72,0,0,0,4-1.45,4.82,4.82,0,0,0,1.59-3.72,5,5,0,0,0-.41-2.05,4.85,4.85,0,0,0-1.18-1.65,5.59,5.59,0,0,0-1.78-1.08A6,6,0,0,0,39.54,6.46Z"
                          className="cls-1"
                        ></path>
                        <path
                          d="M90.73,17.63a17.44,17.44,0,0,1-5.18,12.44,18,18,0,0,1-5.63,3.77A17.6,17.6,0,0,1,60.6,30.07a17.55,17.55,0,0,1-5.1-12.44A17.41,17.41,0,0,1,66.19,1.39,17.79,17.79,0,0,1,85.55,5.14a17.48,17.48,0,0,1,5.18,12.49Zm-6.79,0a11.32,11.32,0,0,0-.82-4.38,10.89,10.89,0,0,0-5.74-5.91A10.76,10.76,0,0,0,73,6.46a10.6,10.6,0,0,0-4.29.88,10.78,10.78,0,0,0-3.44,2.38,10.51,10.51,0,0,0-2.26,3.53,12.14,12.14,0,0,0,0,8.72,10.51,10.51,0,0,0,2.26,3.53,10.78,10.78,0,0,0,3.44,2.38,11,11,0,0,0,8.63,0A10.82,10.82,0,0,0,83.11,22a11.28,11.28,0,0,0,.83-4.34Z"
                          className="cls-1"
                        ></path>
                        <path
                          d="M117.62,33.84V20H102.25V33.84c0,.61-.34.92-1,.92H96.38c-.58,0-.87-.31-.87-.92V1.48a1.12,1.12,0,0,1,.2-.69.77.77,0,0,1,.67-.28h5a1.07,1.07,0,0,1,.57.18.79.79,0,0,1,.3.74V13.48h15.38v-12a1.12,1.12,0,0,1,.2-.69.77.77,0,0,1,.67-.28h5a1,1,0,0,1,.55.18.83.83,0,0,1,.28.74V33.84c0,.61-.33.92-1,.92H118.5C117.91,34.76,117.62,34.45,117.62,33.84Z"
                          className="cls-1"
                        ></path>
                        <path
                          d="M129.25,33.84V1.48c0-.65.31-1,.92-1h5c.58,0,.88.32.88,1V33.84a.8.8,0,0,1-.88.92h-5A.82.82,0,0,1,129.25,33.84Z"
                          className="cls-1"
                        ></path>
                        <path
                          d="M2.68,34.09c9.17-.82,8.84-7.25,8.84-7.25V7.59C11.06.69,3.39,1.12,3.39,1.12V13.53s.25,6.67,8.21,7.37c0,0,8.11-.44,8.37-7V1.53a29,29,0,0,0-6.25.29S9,2.73,3.65,8.21l-.17.16"
                          className="cls-2"
                        ></path>
                        <path
                          d="M.91,20.8V26a1.15,1.15,0,0,0,.07.36c.3.76,1.7,3.55,5.91,3.37V24.44a1.49,1.49,0,0,0,0-.36C6.6,23.33,5.45,20.78.91,20.8Z"
                          className="cls-2"
                        ></path>
                        <path
                          d="M37.86,48.73l.78-1a3.63,3.63,0,0,0,2.48,1c.94,0,1.42-.46,1.42-1s-.54-.84-1.74-1.12c-1.56-.36-2.65-.82-2.65-2.23a2.43,2.43,0,0,1,2.71-2.28,4.14,4.14,0,0,1,2.85,1.05l-.74,1a3.35,3.35,0,0,0-2.16-.89c-.76,0-1.28.46-1.28,1s.56.83,1.76,1.11c1.57.35,2.62.85,2.62,2.23s-1,2.3-2.83,2.3A4.61,4.61,0,0,1,37.86,48.73Z"
                          className="cls-1"
                        ></path>
                        <path
                          d="M48.94,46a4,4,0,1,1,4,4A4,4,0,0,1,48.94,46Zm6.5,0a2.56,2.56,0,1,0-5.11,0A2.65,2.65,0,0,0,52.9,48.7,2.62,2.62,0,0,0,55.44,46Z"
                          className="cls-1"
                        ></path>
                        <path
                          d="M62.26,42.28h1.37l2.48,4.6,2.5-4.6H70v7.55H68.61v-5l-2.5,4.6-2.48-4.6v5H62.26Z"
                          className="cls-1"
                        ></path>
                        <path
                          d="M75.78,42.28h1.38l2.48,4.6,2.49-4.6h1.36v7.55H82.13v-5l-2.49,4.6-2.48-4.6v5H75.78Z"
                          className="cls-1"
                        ></path>
                        <path
                          d="M89.23,42.28h1.36v7.55H89.23Z"
                          className="cls-1"
                        ></path>
                        <path
                          d="M97.6,43.53v1.83h3.9v1.25H97.6v2h4.3v1.26H96.22V42.28h5.68v1.25Z"
                          className="cls-1"
                        ></path>
                        <path
                          d="M111.88,49.83l-1.78-2.54h-1.46v2.54h-1.37V42.28h3.28a2.59,2.59,0,0,1,2.83,2.51,2.45,2.45,0,0,1-1.83,2.36l1.89,2.67ZM108.64,46h1.75c.94,0,1.59-.48,1.59-1.24s-.65-1.23-1.59-1.23h-1.75Z"
                          className="cls-1"
                        ></path>
                        <path
                          d="M118.22,48.73l.79-1a3.63,3.63,0,0,0,2.48,1c.94,0,1.42-.46,1.42-1s-.54-.84-1.74-1.12c-1.56-.36-2.65-.82-2.65-2.23a2.43,2.43,0,0,1,2.71-2.28,4.19,4.19,0,0,1,2.86,1.05l-.76,1a3.34,3.34,0,0,0-2.16-.88c-.76,0-1.27.46-1.27,1s.55.84,1.75,1.11c1.57.35,2.63.86,2.63,2.23s-1,2.3-2.84,2.3A4.62,4.62,0,0,1,118.22,48.73Z"
                          className="cls-1"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <nav
          aria-label="Main navigation"
          className="items-center flex"
        >
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center">
              Comprar<ChevronDownIcon className="ml-1"></ChevronDownIcon>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <a href="https://rohisommiers.com/colchones" target="_blank">
                  Colchones
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a
                  href="https://www.rohisommiers.com/sommier-y-colchon/"
                  target="_blank"
                >
                  Sommiers
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a
                  href="https://www.rohisommiers.com/bases-sommier/camas-con-cajones/"
                  target="_blank"
                >
                  Camas con Cajones
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a
                  href="https://www.rohisommiers.com/sillones/"
                  target="_blank"
                >
                  Sillones
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a
                  href="https://www.rohisommiers.com/almohadas/"
                  target="_blank"
                >
                  Almohadas
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}

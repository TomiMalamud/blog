import { InstagramLogoIcon } from "@radix-ui/react-icons";
import Newsletter from "components/newsletter";
import Link from "next/link";

const links = [
  {
    title: "Productos",
    items: [
      { title: "Colchones", href: "https://www.rohisommiers.com/colchones/" },
      {
        title: "Sommiers",
        href: "https://www.rohisommiers.com/sommier-y-colchon/"
      },
      {
        title: "Camas con Cajones",
        href: "https://www.rohisommiers.com/bases-sommier/camas-con-cajones/"
      },
      { title: "Sillones", href: "https://www.rohisommiers.com/sillones/" },
      { title: "Almohadas", href: "https://www.rohisommiers.com/almohadas/" }
    ]
  },
  {
    title: "Sobre Nosotros",
    items: [
      {
        title: "Quiénes somos",
        href: "https://www.rohisommiers.com/quienes-somos/"
      },
      { title: "Nuestra tienda online", href: "https://www.rohisommiers.com/" },
      { title: "Sucursales", href: "https://www.rohisommiers.com/sucursales/" }
    ]
  }
];

const social = [
  {
    label: "Instagram",
    icon: "tabler:brand-instagram",
    href: "https://instagram.com/rohisommiers"
  },
  {
    label: "Facebook",
    icon: "tabler:brand-facebook",
    href: "https://facebook.com/rohisommiers"
  },
  {
    label: "Pinterest",
    icon: "tabler:brand-pinterest",
    href: "https://pinterest.com/rohisommiers"
  },
  {
    label: "Linkedin",
    icon: "tabler:brand-linkedin",
    href: "https://www.linkedin.com/company/rohi-sommiers/"
  }
];

const Footer = () => (
  <footer className="border-t border-gray-200 mt-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12">
        <div className="col-span-12 md:col-span-3">
          <div className="mb-2">
            <Link href="/" className="inline-block font-bold text-rohi text-xl">
              ROHI Sommiers
            </Link>
          </div>
          <ul className="text-sm text-gray-600">
            <li>
              <Link
                href="/tyc"
                className="text-gray-600 hover:text-gray-700 hover:underline transition duration-150 ease-in-out"
              >
                Términos y Condiciones
              </Link>
            </li>
            <li>
              <Link
                href="/tyc#privacidad"
                className="text-gray-600 hover:text-gray-700 hover:underline transition whitespace-nowrap leading-8 duration-150 ease-in-out"
              >
                Política de privacidad
              </Link>
            </li>
          </ul>
        </div>
        {links.map(({ title, items }) => (
          <div className="col-span-6 md:col-span-3" key={title}>
            <div className="text-gray-800  font-medium mb-4 text-lg md:text-xl">
              {title}
            </div>
            {items && Array.isArray(items) && items.length > 0 && (
              <ul className="text-md md:text-lg">
                {items.map(({ title, href }) => (
                  <li className="mb-2" key={title}>
                    <a
                      className="text-gray-600 hover:text-gray-700 hover:underline  transition duration-150 ease-in-out"
                      href={href}
                      target="_blank"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <div className="col-span-12 md:col-span-3">
          <p className="text-gray-600 mb-2">Suscribite</p>
          <Newsletter />
        </div>
      </div>
      <div className="md:flex md:items-center md:justify-between py-6 md:py-8">
        <ul className="flex mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0">
          {social.map(({ label, href, icon }) => (
            <li key={label}>
              <a
                className="text-gray-500  hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200  rounded-lg text-sm p-2.5 inline-flex items-center"
                aria-label={label}
                href={href}
                target="_blank"
              >
                <InstagramLogoIcon className="w-5 h-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;

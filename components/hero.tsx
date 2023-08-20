export default function Hero() {
  return (
    <div className="relative sm:pt-20 md:pt-0 isolate px-6 lg:px-8">
      <div className="mx-auto max-w-2x py-9 sm:py-12 lg:py-14">
        <div className="text-center sm:mb-8 sm:flex sm:justify-center">
          <div className="relative mb-8 rounded-full px-3 py-2 sm:py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Nuestra visión es construir una Argentina mejor descansada.{" "}
            <a
              href="https://rohisommiers.com/quienes-somos"
              className="font-semibold text-rohi"
              target="_blank"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              Conocenos <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center mx-auto">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Empezá a dormir mejor desde{" "}
            <span className="underline decoration-wavy underline-offset-4 decoration-rohi">
              hoy
            </span>
          </h1>
          <p className="mt-6 text-lg sm:mx-36 text-center leading-8 text-gray-600">
            En nuestro <strong>Blog</strong> vas a encontrar novedades sobre
            cómo dormir mejor, cómo elegir un buen colchón, cómo decorar un
            dormitorio, las últimas tendencias de diseño y mucho más.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#posts"
              className="motion-safe:animate-bounce items-center rounded-full p-2 font-semibold text-rohi border border-rohi/40 border-solid shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
            >
              <span aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

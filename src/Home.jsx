import Navigation from "./components/Navigation";

export default function Home(params) {
    return (
        <>
            <Navigation />
            <section class="py-10 bg-gray-50">
                <div class="container items-center max-w-6xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16" />
                <div class="flex flex-wrap items-center -mx-3">
                    <div class="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                        <div class="w-full lg:max-w-md">
                        <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl text-left">
                                    <span class="block xl:inline">Solusi Tepat </span>
                                    <span class="block text-indigo-600 xl:inline">Enkripsi Apapun</span>
                                </h1>
                                <p class="mx-auto text-left text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure praesentium quisquam voluptatibus esse molestias voluptas corrupti nam aliquid nisi nulla!</p>
                                <div class="relative flex flex-col sm:flex-row sm:space-x-4">
                                    <a href="https://kihub.net" target="blank" class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
                                        Portfolio Web Saya
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img class="mx-auto sm:max-w-sm lg:max-w-full" src="https://cdn.devdojo.com/images/november2020/feature-graphic.png" alt="feature image" /></div>
                </div>
            </section>

        </>
    )
};
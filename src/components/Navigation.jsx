
import { Link } from 'react-router-dom';
export default function Navigation(params) {
    return (
        <>
            <div class="relative flex flex-col md:flex-row">

                <a href="#_" class="flex items-center mb-5 font-medium mr-10 text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                    <span class="mx-auto text-xl font-black leading-none text-gray-900 select-none">Crypt<span class="text-indigo-600">.hub</span></span>
                </a>
                <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                    <li class="me-2">
                        <Link to="/" aria-current="page" class="inline-block p-2 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Home</Link>
                    </li>
                    <li class="me-2">
                        <Link to="/caesar" class="inline-block p-2 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Caesar</Link>
                    </li>
                    <li class="me-2">
                        <Link to="/vigenere" class="inline-block p-2 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Vigenere</Link>
                    </li>
                    <li class="me-2">
                        <Link to="/affine" class="inline-block p-2 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Affine</Link>
                    </li>
                    <li class="me-2">
                        <Link to="/playfair" class="inline-block p-2 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Playfair</Link>
                    </li>
                    <li class="me-2">
                        <Link to="/hill" class="inline-block p-2 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Hill</Link>
                    </li>
                </ul>
            </div>

        </>
    );
}

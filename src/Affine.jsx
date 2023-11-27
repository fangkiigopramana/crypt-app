import { useState } from "react";
import Navigation from "./components/Navigation";

export default function Affine(params) {
    const [plaintext, setPlaintext] = useState('');
    const [a, setA] = useState(1);
    const [b, setB] = useState(0);
    const [ciphertext, setCiphertext] = useState('');

    const encrypt = (pt, a, b) => {
        let encrypted = '';

        for (let i = 0; i < pt.length; i++) {
            let ptCharCode = pt.charCodeAt(i);

            if (ptCharCode >= 65 && ptCharCode <= 90) {
                let encryptedCharCode = ((a * (ptCharCode - 65)) + b) % 26 + 65;
                encrypted += String.fromCharCode(encryptedCharCode);
            } else {
                encrypted += pt.charAt(i);
            }
        }

        return encrypted;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Navigation />
            <h1 className=" text-center pt-10 text-4xl font-bold">Algoritma Affine Cipher</h1>
            <div className="py-5">
                <form class="max-w-sm mx-start text-left">
                    <div class="mb-5">
                        <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Plaintext</label>
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={plaintext} onChange={(e) => {setPlaintext(e.target.value.toUpperCase()); setCiphertext(encrypt(plaintext, a, b));}} placeholder="abcde" required />
                    </div>
                    <div class="flex gap-6 items-start mb-5">
                        <div>
                            <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Keyword A</label>
                            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={a} onChange={(e) => {setA(parseInt(e.target.value)); setCiphertext(encrypt(plaintext, a, b));}} placeholder="abcde" required />
                        </div>
                        <div>

                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Keyword B</label>
                            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={b} onChange={(e) => {setB(parseInt(e.target.value)); setCiphertext(encrypt(plaintext, a, b));}} placeholder="abcde" required />
                        </div>
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ciphertext</label>
                        <input type="text" class="bg-gray-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={ciphertext} disabled />
                    </div>

                </form>

            </div>
        </>
    )
};

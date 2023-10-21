/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { checkValidData } from '../../../../utils/validate';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../utils/firebase';

const Login = () => {
  const [open, setOpen] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const cancelButtonRef = useRef(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleLoginClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    // Sign In Logic
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value,
    )
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + '-' + errorMessage);
      });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white rounded-lg shadow relative">
                  <div className="flex justify-end p-2">
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                      data-modal-toggle="authentication-modal"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <form
                    className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8"
                    onSubmit={e => e.preventDefault()}
                  >
                    <h3 className="text-xl font-medium text-black">
                      Sign in to our platform
                    </h3>
                    <div>
                      <label
                        for="email"
                        className="text-sm font-medium text-gray-900 block mb-2"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        ref={email}
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                        placeholder="name@company.com"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        for="password"
                        className="text-sm font-medium text-gray-900 block mb-2"
                      >
                        Your password
                      </label>
                      <input
                        type="password"
                        name="password"
                        ref={password}
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                        required=""
                      />
                    </div>
                    <p className="text-red-500 font-bold text-lg py-2">
                      {errorMessage}
                    </p>
                    <button
                      type="submit"
                      onClick={handleLoginClick}
                      className="w-full text-white bg-secondary hover:bg-secondaryHover focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Login to your account
                    </button>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Login;

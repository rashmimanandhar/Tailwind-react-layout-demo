import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Searchbox from "./Searchbox";

const Table = ({ data, rows, cols }) => {
  return (
    <div>
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
        <Searchbox></Searchbox>
        <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
          <table class="min-w-full table-fixed">
            <thead>
              <tr>
                <th class="table-header">ID</th>
                <th class="table-header">Fullname</th>
                <th class="table-header">Email</th>
                <th class="table-header">Phone</th>
                <th class="table-header">Status</th>
                <th class="table-header">Created At</th>
                <th class="table-header-no-title"></th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr>
                <td class="table-data">
                  <div class="flex items-center">
                    <div>
                      <div class=" text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td class="table-data">
                  <div class=" text-blue-900">Rashmi Manandhar</div>
                </td>
                <td class="table-data">rashmi@gmail.com</td>
                <td class="table-data">+2348106420637</td>
                <td class="table-data">
                  <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span class="relative text-xs">active</span>
                  </span>
                </td>
                <td class="table-data">September 12</td>
                <td class="table-data text-right ">
                  <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                    View Details
                  </button>
                </td>
              </tr>
              <tr>
                <td class="table-data">
                  <div class="flex items-center">
                    <div>
                      <div class=" text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td class="table-data">
                  <div class=" text-blue-900">Rashmi Manandhar</div>
                </td>
                <td class="table-data">rashmi@gmail.com</td>
                <td class="table-data">+2348106420637</td>
                <td class="table-data">
                  <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span class="relative text-xs">active</span>
                  </span>
                </td>
                <td class="table-data">September 12</td>
                <td class="table-data text-right ">
                  <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                    View Details
                  </button>
                </td>
              </tr>
              <tr>
                <td class="table-data">
                  <div class="flex items-center">
                    <div>
                      <div class=" text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td class="table-data">
                  <div class=" text-blue-900">Rashmi Manandhar</div>
                </td>
                <td class="table-data">rashmi@gmail.com</td>
                <td class="table-data">+2348106420637</td>
                <td class="table-data">
                  <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                    <span
                      aria-hidden
                      class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                    ></span>
                    <span class="relative text-xs">not active</span>
                  </span>
                </td>
                <td class="table-data">September 12</td>
                <td class="table-data text-right ">
                  <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                    View Details
                  </button>
                </td>
              </tr>
              <tr>
                <td class="table-data">
                  <div class="flex items-center">
                    <div>
                      <div class=" text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td class="table-data">
                  <div class=" text-blue-900">Rashmi Manandhar</div>
                </td>
                <td class="table-data">rashmi@gmail.com</td>
                <td class="table-data">+2348106420637</td>
                <td class="table-data">
                  <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span class="relative text-xs">active</span>
                  </span>
                </td>
                <td class="table-data">September 12</td>
                <td class="table-data text-right ">
                  <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                    View Details
                  </button>
                </td>
              </tr>
              <tr>
                <td class="table-data">
                  <div class="flex items-center">
                    <div>
                      <div class=" text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td class="table-data">
                  <div class=" text-blue-900">Rashmi Manandhar</div>
                </td>
                <td class="table-data">rashmi@gmail.com</td>
                <td class="table-data">+2348106420637</td>
                <td class="table-data">
                  <span class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                    <span
                      aria-hidden
                      class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                    ></span>
                    <span class="relative text-xs">disabled</span>
                  </span>
                </td>
                <td class="table-data">September 12</td>
                <td class="table-data text-right ">
                  <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                    View Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
            <div>
              <p class=" text-blue-700">
                Showing
                <span class="font-medium">1</span>
                to
                <span class="font-medium">200</span>
                of
                <span class="font-medium">2000</span>
                results
              </p>
            </div>
            <div>
              <nav class="relative z-0 inline-flex shadow-sm">
                <div>
                  <a
                    href="#"
                    class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white  font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                    aria-label="Previous"
                  >
                    <svg
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white  font-medium text-blue-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white  font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white  font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary"
                  >
                    3
                  </a>
                </div>
                <div v-if="pagination.current_page < pagination.last_page">
                  <a
                    href="#"
                    class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white  font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                    aria-label="Next"
                  >
                    <svg
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

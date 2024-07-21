import React from 'react'

const LoanReports = () => {
  return (
    <>
      <section class="text-gray-600 body-font w-full">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
      <table className="min-w-full border-collapse my-5 text-lg text-left">
              <thead>
                <tr>
                  <th className="p-3 bg-gray-200 font-bold">Application no.</th>
                  <th className="p-3 bg-gray-200 font-bold">Application Date</th>
                  <th className="p-3 bg-gray-200 font-bold">Application status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3">12345</td>
                  <td className="p-3">2023-07-20</td>
                  <td className="p-3">Approved</td>
                </tr>
                <tr>
                  <td className="p-3">12346</td>
                  <td className="p-3">2023-07-21</td>
                  <td className="p-3">Pending</td>
                </tr>
                <tr>
                  <td className="p-3">12347</td>
                  <td className="p-3">2023-07-22</td>
                  <td className="p-3">Rejected</td>
                </tr>
              </tbody>
            </table>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">In Progress Loan Application</h2>
          </div>
      <div class="sm:w-1/2 mb-10 px-4">
      <table className="min-w-full border-collapse my-5 text-lg text-left">
              <thead>
                <tr>
                  <th className="p-3 bg-gray-200 font-bold">Application no.</th>
                  <th className="p-3 bg-gray-200 font-bold">Application Date</th>
                  <th className="p-3 bg-gray-200 font-bold">Application status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3">12345</td>
                  <td className="p-3">2023-07-20</td>
                  <td className="p-3">Approved</td>
                </tr>
                <tr>
                  <td className="p-3">12346</td>
                  <td className="p-3">2023-07-21</td>
                  <td className="p-3">Pending</td>
                </tr>
                <tr>
                  <td className="p-3">12347</td>
                  <td className="p-3">2023-07-22</td>
                  <td className="p-3"><mark>Submitted</mark></td>
                </tr>
              </tbody>
            </table>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Submitted Loan Application</h2>
             </div>
    </div>
  </div>
</section>
    </>
  )
}

export default LoanReports

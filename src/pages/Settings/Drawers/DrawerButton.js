import React from 'react'
import FormButton from '../Forms/FormButton'

export default function DrawerButton({showModal, modalValues, section, i}){
  //console.log(modalValues)
  ///console.log(`drawer-${modalValues.typeElement}-${section}-${i}`)

  return(
    <div id={`drawer-${modalValues.typeElement}-${section}-${i}`}  className="left-[-320px] top-0 z-40 fixed h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-form-label">
       <h5 id="drawer-label" className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"><svg className="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
        Edit Button - Banner
       </h5>
       <button type="button" onClick={() => showModal(modalValues.typeElement, section, i)} data-drawer-dismiss="drawer-form" aria-controls="drawer-form" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          <span className="sr-only">Close menu</span>
       </button>
        <FormButton modalValues={modalValues} section={section} />
    </div>
  )
}

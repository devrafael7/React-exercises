import './index.css'

function App() {

  return (
    <>
      <div className='w-full h-auto pt-20 flex flex-col items-center'>
        <h1 className='text-3xl font-semibold'>
          To-Do App
        </h1>
        <p className='text-gray-600 mt-1'>
          Prepare Your Routine Tasks Right Here!
        </p>
        <form className='flex flex-col items-center w-full px-20 mt-6' action="">
          <input className='py-2 w-full px-4 text-start border border-black border-solid rounded-md outline-none' placeholder='Type a task to add in it' type="text" />
          <button className='w-full py-2 text-center bg-blue-500 rounded-md text-white mt-2 cursor-pointer mb-4' type="button">
            Add task
          </button>
          <div className='w-full flex justify-between items-center gap-3'>
            <button className='bg-red-500 py-2 px-2 text-sm text-white rounded-md cursor-pointer' type="button">
              Delete
            </button>
            <h1 className='bg-emerald-500 w-full py-2 rounded-md text-center text-white'>
              Task Content
            </h1>
            <button className='bg-emerald-500 py-2 px-2 text-sm text-white rounded-md cursor-pointer' type="button">
              Done
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App

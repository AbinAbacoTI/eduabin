
export const OrdenSummary = () => {
  return (
    <div className='flex flex-col px-4 py-2'>
      <div className='flex justify-between w-full'>
        <div className="">
          <span>SubTotal: </span>
        </div>
        <div className="">
          <span>S/ 00.00</span>
        </div>
      </div>
      <div className='flex justify-between w-full'>
        <div className="">
          <span>Descuento: </span>
        </div>
        <div className="">
          <span>S/ 00.00</span>
        </div>
      </div>
      <div className='flex justify-between w-full mt-2 font-bold text-lg'>
        <div className="">
          <span>Total: </span>
        </div>
        <div className="">
          <span>S/ 00.00</span>
        </div>
      </div>
    </div>
  )
}

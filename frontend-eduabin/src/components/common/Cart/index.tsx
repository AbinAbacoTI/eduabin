import { Popover } from '@headlessui/react'

const Cart = () => {
  return (
   <Popover>
   {({ open }) => (
     <>
       <Popover.Button>
         <span>Solutions</span>
         {/* <ChevronRightIcon
           className={`${open ? 'transform rotate-90' : ''}`}
         /> */}
       </Popover.Button>

       <Popover.Panel className='absolute z-10 border-2 bg-white'>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam dolore consectetur pariatur dolorem nemo laborum maxime? Id autem, nisi dolorum porro quisquam repellat quod beatae deleniti unde, possimus repellendus iste.</span>
       </Popover.Panel>
     </>
   )}
 </Popover>
  )
}

export default Cart

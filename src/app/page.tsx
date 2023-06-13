import Image from 'next/image'
import { AccordionDemo } from './accordion'
import { AlertDialogDemo } from './alertbox'
import { CardDemo } from './card'

export default function Home() {
  return (
    <div>
      <h1 className='text-center text-3xl pt-5'>shadcan ui</h1>
      <div className='p-10 text-3xl'>
      {/* <AccordionDemo/> */}
      {/* <AlertDialogDemo/> */}
      <CardDemo/>
      </div>
    </div>
  )
}

import 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
              <div className="container flex flex-col items-center py-4">
                <p className='text-xl font-bold'>Farmacia Generation | Copyright: </p>
                <p className='text-lg'>Acesse nossas redes sociais</p>
                <div className='flex gap-2'>
                  <LinkedinLogo size={35} weight='bold' />
                  <InstagramLogo size={35} weight='bold' />
                  <FacebookLogo size={35} weight='bold' />
                </div>
              </div>
            </div>
          </>
      )
    }

export default Footer
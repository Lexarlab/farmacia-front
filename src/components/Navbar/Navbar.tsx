import { ShoppingCart } from '@phosphor-icons/react';
import { Link} from 'react-router-dom'
import 'react';

function Navbar() {

  return (
    <>
      <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <Link to='/' className='text-2xl font-bold uppercase'>FARMACIA GENERATION
                    </Link>
                    <div className='flex gap-4'>
                        <Link to='/temas'>Categorias</Link>
                        <Link to='/cadastroTema'>Cadastrar Categoria</Link>
                        <ShoppingCart size={25} />
                    </div>
                </div>
            </div>
    </>
  )
}

export default Navbar
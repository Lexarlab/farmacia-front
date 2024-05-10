import { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { buscar } from '../../../service/Service';
import CardTemas from '../cardCategoria/CardCate';
import Categoria from '../../../models/Categoria';

function ListaCategoria() {
  const [categoria, setCategoria] = useState<Categoria[]>([]);

  async function buscarCategoria() {
    try {
      await buscar('/categorias', setCategoria);
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
    }
  }

  useEffect(() => {
    buscarCategoria();
  }, []);

  return (
    <>
      {categoria.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.map((categoria) => (
              <CardTemas key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategoria;

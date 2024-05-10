import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { atualizar, buscar, cadastrar } from '../../../service/Service';
import { RotatingLines } from 'react-loader-spinner';
import Categoria from '../../../models/Categoria';

function FormularioCategoria() {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)  
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>()  

    async function buscarPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria);
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id) 
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({  
            ...categoria, 
            [e.target.name]: e.target.value 
        })
    }

    async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true) 

        if (id !== undefined) { 
            try {
                await atualizar(`/categorias`, categoria, setCategoria)
                alert('Categoria atualizada com sucesso')
                retornar()
            } catch (error: any) {
                alert('Erro ao atualizar categoria')
            }
        } else {    
            try {
                await cadastrar(`/categorias`, categoria, setCategoria)
                alert('Categoria cadastrada com sucesso')
            } catch (error: any) {
                alert('Erro ao cadastrar categoria')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">

                {id === undefined ? 'Cadastre uma nova categoria' : 'Editar categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoTema}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome da categoria</label>
                    <input
                        type="text"
                        placeholder="nome"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.nome}  
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}  
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição de categoria</label>
                    <input
                        type="text"
                        placeholder="Descrição"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.descricao}  
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}  
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center "
                    type="submit"
                >
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>Confirmar</span>
                    }
                </button>
            </form>
        </div>
    );
}

export default FormularioCategoria;

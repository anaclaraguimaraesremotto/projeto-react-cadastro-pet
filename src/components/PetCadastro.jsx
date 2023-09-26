import { useState } from 'react'
import './PetCadastro.scss'

export default function PetCadastro(){

    const[animal, setAnimal] = useState(
        { 
            nomeAnimal:'',
            racaAnimal: '',
            idadeAnimal: '',
            tamanhoAnimal:'',
            donoAnimal: '',
            telDonoAnimal: ''
        }
    )

    const[listaAnimais, setListaAnimais] = useState([])

    // e = captura evento
    const cadAnimal = (e)=>{
        setAnimal({...animal, [e.target.name]:e.target.value})
    }

    const inserirAnimal = (e)=>{
        e.preventDefault()
        setListaAnimais([...listaAnimais, animal])
        setAnimal( { 
            nomeAnimal:'',
            racaAnimal: '',
            idadeAnimal: '',
            tamanhoAnimal:'',
            donoAnimal: '',
            telDonoAnimal: ''
        })
    }


    return(
        <>
        <div className="divCadPet">
            <form onSubmit={inserirAnimal}>
                <fieldset>
                    <legend>Dados Pessoais</legend>
                    <label>Nome do animal:
                        <input type="text" name="nomeAnimal" onChange={cadAnimal} value={pet.nome}/>
                    </label>
                    <label>Raça:
                        <input type="text" name="racaAnimal" onChange={cadAnimal} value={pet.email}/>
                    </label>
                    <label>Idade:
                        <input type="text" name="idadeAnimal" onChange={cadAnimal} value={pet.cpf}/>
                    </label>
                    <label>Tamanho:
                        <input type="text" name="tamanhoAnimal" onChange={cadAnimal} value={pet.nome}/>
                    </label>
                    <label>Nome do dono:
                        <input type="text" name="donoAnimal" onChange={cadAnimal} value={pet.email}/>
                    </label>
                    <label>Telefone do dono:
                        <input type="text" name="telDonoAnimal" onChange={cadAnimal} value={pet.cpf}/>
                    </label>
                    <button type="submit">Criar</button>
                </fieldset>
            </form>
            <div className="painel">
                {
                    listapets.map((anml, i)=>
                        <div className="etiqueta">
                            <p>Nome do animal: {anml.nome}</p>
                            <p>Raça: {anml.email}</p>
                            <p>Idade: {anml.cpf}</p>
                            <p>Tamanho: {anml.nome}</p>
                            <p>Nome do dono: {anml.email}</p>
                            <p>Telefone do dono: {anml.cpf}</p>
                        </div>
                    )
                }
            </div>
        </div>
        </>
    )
}
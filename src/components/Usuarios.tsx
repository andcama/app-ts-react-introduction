import { Usuario } from '../interfaces/reqRes';
import { useUsuarios } from '../hooks/useUsuarios';


export const Usuarios = () => {

    const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios();


    const renderItem = ({ id, first_name, last_name, email, avatar }: Usuario ) => {
        return (
            <tr key={ id.toString() }>
                <td>
                    <img 
                        src={ avatar } 
                        alt={ first_name } 
                        style={{
                            width: 35,
                            borderRadius: 100
                        }}
                    />
                </td>
                <td> { first_name  } { last_name } </td>
                <td> { email }</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Users:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map( renderItem )
                    }
                </tbody>
            </table>
            

            <button
                className="btn btn-primary"
                onClick={ paginaAnterior }
            >
                Previous Page
            </button>

            &nbsp;

            <button
                className="btn btn-primary"
                onClick={ paginaSiguiente }
            >
                Next Page
            </button>
        </>
    )
}
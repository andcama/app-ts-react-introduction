
interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion
}

interface Direccion {
    pais: string;
    casaNo: number;
}


export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Andres Camacho',
        edad: 28,
        direccion: {
            pais: 'Costa Rica',
            casaNo: 501
        }
    }

    return (
        <>
            <h3>Literal Objects</h3>
            <code>
                <pre>
                    { JSON.stringify( persona, null, 2 ) }
                </pre>
            </code>
        </>
    )
}

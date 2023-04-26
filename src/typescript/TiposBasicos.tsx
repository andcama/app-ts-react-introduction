

export const TiposBasicos = () => {

    const nombre: string = 'Andres Camacho';
    const edad: number = 28;
    const estaActivo:boolean = false;

    const poderes: (string|number)[] = []; // 'Velocidad','Volar','Respirar en el agua'
    
    return (
        <>
            <h3>Basic Types</h3>
            { nombre }, { edad }, { (estaActivo) ? 'activo' : 'no activo' }
            <br/>
            { poderes.join(', ') }
        </>
    )
}
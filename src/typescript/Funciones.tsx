export const Funciones = () => {

    const sumar = ( a: number, b: number ):number => {
        return a + b;
    }


    return (
        <>
           <h3>Functions</h3>
           <span>The result is: { sumar( 10, 5 ) }</span>
        </>
    )
}


// codigo copiado y analizado de ImageCanvas.tsx

export function Prueba(){
    // prueba importar los modelos convolucional y perceptron sin fallo
    async function cargarModelo(){
        const imagenPath = "";
        const [inferenceResult,inferenceTime] = await inferirModeloConvoucional(imagenPath);
    }
    cargarModelo();
    return(
        <div>
            <h1>PRUEBA COMPONENT</h1>
        </div>
    );
}
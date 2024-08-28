interface InfoParams {
    params: {
        productId: number,
    }
}
export default function Info({ params }: InfoParams) {
    return (
        <div>
            <p>Informações do produto  {params.productId}</p>
        </div>
    );
}
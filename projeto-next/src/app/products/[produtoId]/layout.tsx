export default function ProductDetailsLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <p className="bg-blue-300">Especificações</p>
            {children}
        </>
    )   
}